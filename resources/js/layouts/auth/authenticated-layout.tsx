import Footer from '@/components/App/Footer';
import Navbar from '@/components/App/Navbar';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthenticatedLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <Navbar />
            <div>
                <div className="space-y-2 text-center">
                    <h1 className="text-xl font-medium">{title}</h1>
                    <p className="text-muted-foreground text-center text-sm">{description}</p>
                </div>
                {children}
            </div>
            <Footer />
        </div>
    );
}
