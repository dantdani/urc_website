// components/NavBar.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/harvard_seas_logo.png"
              alt="Harvard SEAS Logo"
              width={250}
              height={250}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <Link
            href="/"
            className="text-gray-800 hover:text-[#A51C30] mx-3 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-[#A51C30] mx-3 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-[#A51C30] mx-3 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
