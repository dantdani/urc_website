// components/Hero.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl text-center">
        {/* Title */}
        <h1 className="mt-6 text-5xl font-bold text-[#A51C30]">
          Harvard Undergraduate Rover Team
        </h1>

        {/* Subtitle/Intro */}
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to the official website of the Harvard Undergraduate Rover Team (HURT)! Join us on our mission to design, build, and compete in the{' '}
          <a
            href="https://urc.marssociety.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#A51C30] hover:text-[#8E1A28] transition-colors"
          >
            University Rover Challenge
          </a>.
        </p>

        {/* Call to Action Button */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#A51C30] py-3 px-6 text-white hover:bg-[#8E1A28] transition-colors"
          >
            Join Our Team
          </Link>
        </div>

        {/* Images Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Rover Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/FullRover.jpeg"
              alt="CAD Rendering of the Rover"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Team Photos */}
          <div className="flex flex-col gap-8">
            <Image
              src="/images/team_photo1.jpeg"
              alt="Team Photo 1"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/team_photo2.jpg"
              alt="Team Photo 2"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-12">
          <Link
            href="/about"
            className="inline-block rounded-lg bg-[#A51C30] py-3 px-6 text-white hover:bg-[#8E1A28] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
