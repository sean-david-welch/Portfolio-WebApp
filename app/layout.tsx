import './styles/globals.css';
import { Raleway } from 'next/font/google';

import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthProvider from './AuthProvider';
import QueryProvider from './QueryProvider';

const raleway = Raleway({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

axios.defaults.baseURL = 'http://localhost:3000/api';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryProvider>
            <AuthProvider>
                <html lang="en" className={raleway.className}>
                    <body className="min-h-screen text-white">
                        <Header />
                        <main>
                            <div className="container">{children}</div>
                        </main>
                        <Footer />
                    </body>
                </html>
            </AuthProvider>
        </QueryProvider>
    );
};

export default RootLayout;
