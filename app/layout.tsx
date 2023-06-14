import Header from './components/Header';
import Footer from './components/Footer';
import { Raleway } from 'next/font/google';
import AuthProvider from './AuthProvider';
import './styles/globals.css';

const raleway = Raleway({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <html lang="en" className={raleway.className}>
                <body className=" min-h-screen overflow-x-hidden  text-white">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
};

export default RootLayout;
