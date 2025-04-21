import React from 'react';
import AuthenticatedLayout from '@/layouts/auth/authenticated-layout';
import { Head } from '@inertiajs/react';
import CategoriesComponent from '@/components/Core/categoriesComponent';

export default function Categories() {

    return (
        <AuthenticatedLayout>
            <Head title="Categories">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet" />
            </Head>

            <div className="min-h-screen min-w-full px-6 py-12 text-white bg-base-200">
                <div className="max-w-7xl mx-auto flex flex-col gap-16">
                    <section
                    id="HairDressers"
                    className="rounded-xl bg-[#9BA8AB] p-8 shadow-lg space-y-6"
                    >
                        <CategoriesComponent />
                    </section>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}

