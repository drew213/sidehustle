import HeroText from '@/components/Core/HeroText';
import List from '@/components/Core/List';
import StackedBusiness from '@/components/Core/StackedBusiness';
import AuthenticatedLayout from '@/layouts/auth/authenticated-layout';
import { Head } from '@inertiajs/react';
import ChangingHeader from '@/components/Core/ChangingHeader';
import ReviewComponent from '@/components/Core/ReviewComponent';

//import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm';

export default function Welcome() {
    return (
        <AuthenticatedLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 pb-20 text-white sm:justify-between lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="relative min-h-screen min-w-[95vw]">
                    <div className="absolute inset-0 z-0 bg-[url('/serv.png')] bg-cover bg-center bg-no-repeat" />
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 text-white">
                        <header className="text-center">
                            <ChangingHeader />
                        </header>
                    </div>
                </div>

                <section className="py-20 px-4">
                    <div className="hero bg-grey-200 min-h-[300px] text-white">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="/austin-ramsey-rbi4q0-b-8g-unsplash.jpg" className="max-w-[200px] rounded-lg shadow-2xl" alt="Stock" />
                            <img src="/ayesha-asif-xowck-dy3kI-unsplash.jpg" className="max-w-[200px] rounded-lg shadow-2xl" alt="Stock" />
                            <img src="/bailey-mahon-2b6K4uy0Hbc-unsplash.jpg" className="max-w-[200px] rounded-lg shadow-2xl" alt="Stock" />

                            <div>
                                <h1 className="text-5xl font-bold">
                                    <HeroText />
                                </h1>
                                <p className="py-6">
                                    Welcome to SideHustl, a revolutionary platform that aims to improve all aspects of your business from - customer
                                    interactions to sales and management and mentoring.
                                </p>
                                <button className="btn btn-primary" onClick={() => (window.location.href = route('register'))}>
                                    List Your Business
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
              <section className="py-20 px-4 bg-[#0a0a0a]">
                <div className="container mx-auto max-w-5xl">
                  <StackedBusiness />
                </div>
              </section>

                <section className="py-20 px-4">
                    <List />
                </section>

              <section className="py-20 px-4">
                <ReviewComponent />
              </section>
            </div>
        </AuthenticatedLayout>
    );
}
