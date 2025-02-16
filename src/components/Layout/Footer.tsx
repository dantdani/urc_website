import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#A51C30] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">Harvard URC Rover</h4>
            <p className="text-md">
              Pioneering innovation in robotics and research. Our mission is to
              push the boundaries of exploration and technology.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
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

          {/* Contact & Social Media */}
          <div className="w-full md:w-1/3">
            <h5 className="text-xl font-bold mb-2">Connect With Us</h5>
            <p className="text-sm mb-4">
              Harvard University, Cambridge, MA<br />
              Email: rover@harvard.edu<br />
              Phone: +1 (617) 495-1000
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/harvardurc/" passHref>
                <span className="hover:text-gray-400 cursor-pointer">
                  <FaInstagram className="w-6 h-6" />
                </span>
              </Link>
              <Link href="https://twitter.com/HarvardURC" passHref>
                <span className="hover:text-gray-400 cursor-pointer">
                  <FaTwitter className="w-6 h-6" />
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
