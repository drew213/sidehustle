import React from 'react';
import AuthenticatedLayout from '@/layouts/auth/authenticated-layout';
import { Head } from '@inertiajs/react';

export default function AboutUs() {
  return (
    <AuthenticatedLayout>
      <Head title="About Us">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen w-full px-6 py-12 text-white bg-base-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* About Section */}
          <section
            id="about"
            className="rounded-xl bg-[#9BA8AB] p-8 shadow-lg space-y-6"
          >
            <h1 className="text-5xl font-bold font-mono">About Us</h1>
            <p>
              At <strong>ServiceHub "S3RVHUB"</strong>, we are passionate about connecting communities
              with the best available and local service providers. From hairstylists and barbers to
              more niche services like landscaping and tutors, our platform is designed to make it
              easier than ever for people to discover, compare, and book trusted professionals in
              their immediate vicinity.
            </p>
            <p>
              We strongly believe in empowering small businesses by giving them the tools they need
              to thrive in today’s digital economy. From getting started to growing a reliable client
              base, we’re here to help both users and service providers succeed.
            </p>
            <p className="italic text-red-200">
              Whether you're looking for a quick haircut, a long-term tutor, a pool cleaner, or even
              a custom jewelry maker — our promise is to connect you with the best vendor for your
              needs.
            </p>
          </section>

          {/* Mission Section */}
          <section
            id="mission"
            className="rounded-xl bg-[#9BA8AB] p-8 shadow-lg space-y-6"
          >
            <h2 className="text-4xl font-semibold font-mono">Our Mission</h2>
            <p>
              Our mission is bridge the gap between local service providers and their communities by creating a
              seamless, user-friendly platform that fosters trust, transparency and convenience.
            </p>
            <p className="italic text-red-200">
              With a focus on trust, transparency, and user experience, S3RVHUB is committed to
              bridging the gap between service seekers and service providers.
            </p>
            <p>
              We aim to support small businesses by amplifying their visibility with a focus on their immediate
              community, while also providing users with personalised, high quality options at their fingertips.
            </p>
          </section>

          {/* Vision / Future Section */}
          <section
            id="vision"
            className="rounded-xl bg-[#9BA8AB] p-8 shadow-lg space-y-6"
          >
            <h2 className="text-4xl font-semibold font-mono">Our Vision</h2>
            <p>
              We envision a world where finding reliable services is effortless — no matter the
              location, category, or price range. As we grow, we plan to bring in more ML-driven
              recommendations, real-time booking, and vetted reviews to maximize user satisfaction.
            </p>
            <p>
              We envision a future where every small business has the opportunity to shine and every customer
              has the right tools to find and make a decision regarding service providers with ease.
            </p>
          </section>

          <section className="rounded-xl bg-[#9BA8AB] p-8 shadow-lg space-y-6 opacity-60">
            <h2 className="text-4xl font-semibold font-mono text-center">Meet the Team</h2>
            <div className="grid grid-cols-4 gap-8">
              <div className=" bg-red-800 rounded-2xl shadow-md shadow-cyan-500/30 overflow-hidden inset-shadow-amber-500">
                <img src="/s3rvnbg.png"
                className="rounded-2xl"
                alt="team"/>
                <h1 className="py-10 px-4 bg-white text-black rounded-2xl font-mono text-2xl">Name</h1>
              </div>

              <div className=" bg-red-800 rounded-2xl shadow-md shadow-cyan-500/30 overflow-hidden inset-shadow-amber-500">
                <img src="/s3rvnbg.png"
                     className="rounded-2xl"
                     alt="team"/>
                <h1 className="py-10 px-4 bg-white text-black rounded-2xl font-mono text-2xl">Name</h1>
              </div>

              <div className=" bg-red-800 rounded-2xl shadow-md shadow-cyan-500/30 overflow-hidden inset-shadow-amber-500">
                <img src="/s3rvnbg.png"
                     className="rounded-2xl"
                     alt="team"/>
                <h1 className="py-10 px-4 bg-white text-black rounded-2xl font-mono text-2xl">Name</h1>
              </div>

              <div className=" bg-red-800 rounded-2xl shadow-md shadow-cyan-500/30 overflow-hidden inset-shadow-amber-500">
                <img src="/s3rvnbg.png"
                     className="rounded-2xl"
                     alt="team"/>
                <h1 className="py-10 px-4 bg-white text-black rounded-2xl font-mono text-2xl">Name</h1>
              </div>

            </div>
          </section>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
