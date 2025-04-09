import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/layouts/auth/authenticated-layout';
import HeroText from '@/components/Core/HeroText';

export default function Welcome() {
    return (
        <AuthenticatedLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="hero bg-grey-200 min-h-[300px] text-white">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt="Stock"
                        />
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt="Stock"
                        />
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt="Stock"
                        />

                        <div>
                            <h1 className="text-5xl font-bold">
                                <HeroText />
                            </h1>
                            <p className="py-6">
                                Welcome to SideHustl, a revolutionary platform that aims to improve all aspects of your business from - customer
                                interations to sales and management and mentoring.
                            </p>
                            <button className="btn btn-primary" onClick={() => (window.location.href = route('register'))}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </AuthenticatedLayout>
    );
}
