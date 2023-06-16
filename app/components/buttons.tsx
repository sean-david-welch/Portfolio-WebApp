'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Buttons.module.css';
import { useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export const ModalButton = () => {
    const dialog = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button
                className={styles.modalButton}
                onClick={() => dialog.current?.showModal()}>
                Open Model
            </button>

            <dialog ref={dialog} id={styles.dialog} className={styles.modal}>
                <h1 className={styles.modalHeading}>Modal Window</h1>
                <button
                    className={styles.modalClose}
                    onClick={() => dialog.current?.close()}>
                    Close
                </button>
            </dialog>
        </>
    );
};

export const SignInButton = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <button className={styles.signInButton}>...</button>;
    }

    if (status === 'authenticated') {
        return (
            <>
                <ul className={styles.signIn}>
                    <SignOutButton />
                    <Link href={`/dashboard`}>
                        <Image
                            src={session.user?.image ?? '/favicon.ico'}
                            width={42}
                            height={42}
                            alt={`Your Name`}
                            className={styles.profileImage}
                        />
                    </Link>
                </ul>
            </>
        );
    }

    return (
        <button className={styles.signInButton} onClick={() => signIn()}>
            Sign In
        </button>
    );
};

export const SignOutButton = () => {
    return (
        <button className={styles.signOutButton} onClick={() => signOut()}>
            Sign Out
        </button>
    );
};
