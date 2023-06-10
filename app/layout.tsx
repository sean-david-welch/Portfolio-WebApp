import Header from './components/Header';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import AuthProvider from './AuthProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
};

export default RootLayout;
