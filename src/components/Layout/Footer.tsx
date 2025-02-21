import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#A51C30] text-white py-10">
      <div className="container mx-auto px-4">
        {/* 
          Using a flex layout with three columns.
          Each column is full-width on mobile and 1/3 on medium+ screens.
        */}
        <div className="flex flex-wrap">
          {/* Left Column: About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">Harvard URC Rover</h4>
            <p className="text-md">
              Pioneering innovation in robotics and research. Our mission is to
              push the boundaries of exploration and technology.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
            {/* 
              We center this column as a whole, 
              but the text inside is left-aligned.
            */}
            <div className="text-left">
              <h5 className="text-xl font-bold mb-2">Quick Links</h5>
              <ul>
                <li className="mb-2">
                  <Link href="/">
                    <span className="hover:underline cursor-pointer">Home</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/about">
                    <span className="hover:underline cursor-pointer">About Us</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/projects">
                    <span className="hover:underline cursor-pointer">Projects</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact">
                    <span className="hover:underline cursor-pointer">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact & Social Media */}
          <div className="w-full md:w-1/3 text-right">
            <h5 className="text-xl font-bold mb-2">Connect With Us</h5>
            <p className="text-sm mb-4">
              Harvard University, Cambridge, MA<br />
              Email: harvarduroverteam@gmail.com<br />
              Phone: +1 (617) 495-1000
            </p>
            {/* Icons aligned to the right */}
            <div className="flex justify-end space-x-4">
              <Link href="https://www.instagram.com/harvardurc/" passHref>
                <span className="hover:text-gray-400 cursor-pointer">
                  <FaInstagram className="w-6 h-6" />
                </span>
              </Link>

              <Link href="https://twitter.com/HarvardURC" passHref>
                <span className="hover:text-gray-400 cursor-pointer">
                  <Image
                    src="/images/x_logo.png"
                    alt="X"
                    width={24}
                    height={24}
                  />
                </span>
              </Link>

              <Link href="https://www.linkedin.com/school/harvard-university/" passHref>
                <span className="hover:text-gray-400 cursor-pointer">
                  <FaLinkedin className="w-6 h-6" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-4 text-center text-sm">
          © {new Date().getFullYear()} Harvard URC Rover Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
