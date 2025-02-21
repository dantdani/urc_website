"use client";
import Image from "next/image";
import React from "react";

const sponsorLogos = [
  "/images/sponsors/sponsor1.png",
  "/images/sponsors/sponsor2.png",
  "/images/sponsors/sponsor3.png",
  "/images/sponsors/sponsor4.png",
];

const Sponsors: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {sponsorLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Image
                src={logo}
                alt={`Sponsor ${idx + 1}`}
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
