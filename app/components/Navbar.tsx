import Link from 'next/link';
import styles from './styles/Navbar.module.css';
import { SignInButton } from './Buttons';

const Navbar = () => {
    return (
        <nav id={styles.navbar}>
            <Link href={'/'}>Home</Link>
            <Link href={'/projects'}>Projects</Link>
            <SignInButton />
        </nav>
    );
};

export default Navbar;
