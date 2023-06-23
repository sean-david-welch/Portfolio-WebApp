'use client';

import axios from 'axios';
import styles from './styles/projects.module.css';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface DeleteProps {
    projectId: string;
}

export const DeleteButton: React.FC<DeleteProps> = ({ projectId }) => {
    const router = useRouter();

    const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            const response = await axios.delete(`/api/projects/${projectId}`);
            if (response.status >= 200 && response.status < 300) {
                router.push('/projects');
                router.refresh();
            } else {
                alert(`Error: ${response.status}`);
            }
        } catch (error) {
            alert(`Network error: ${error}`);
        }
    };

    return (
        <button className={styles.optionsBtn} onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
};
