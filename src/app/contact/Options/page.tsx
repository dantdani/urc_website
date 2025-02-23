import React from 'react';
import Link from "next/link";

export default function Options() {
    return (
        
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="flex items-center justify-center h-screen w-full bg-red-950">
            
        <div className="bg-white p-10 rounded-2xl shadow-lg w-3/4 md:w-1/2 lg:w-1/3 text-center">
            {/* Header Div */}
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-700">I AM A POTENTIAL...</h2>
            </div>
            <div className="flex gap-x-4">
                <Link
                    href="/contact/Sponsor"
                    >
                    <button className="w-full bg-red-900 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition mt-4" >
                    Sponsorer
                    </button>
                </Link>
                <Link
                    href = "https://forms.gle/u689rQBwMp65BJY46"
                    >
                    <button className="w-full bg-red-800 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-green-600 transition mt-4">
                    Comper
                    </button>
                </Link>
            </div>
        </div>
        </div>
        </section>
    );
}