"use client";
import React from "react";
import Image from "next/image";

const sponsors = [
  { name: "Bolt Depot", logo: "/images/BD-logo.webp" },
  { name: "Maxon", logo: "/images/maxon_logo.webp" },
  { name: "Rock West Composites", logo: "/images/RWC_logo.webp" },
  { name: "Harmonic Drive", logo: "/images/HD_logo.webp" },
  { name: "GoBuilda", logo: "/images/GB_logo.webp" },
  { name: "OnlineMetals", logo: "/images/OM_logo.webp" },
];

const SponsorsGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#A51C30]">
          Our Sponsors
        </h2>

        {/* Exactly 3 columns, 2 rows (since there are 6 sponsors) */}
        <div className="grid grid-cols-3 gap-8 place-items-center">
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="relative w-full h-32">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsGrid;
