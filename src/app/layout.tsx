// app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/Layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Harvard Mars Rover',
  description: 'Harvard Mars Rover Challenge Team website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NavBar visible on every page */}
        <NavBar />

        {/* Page content (Hero, etc.) */}
        {children}
      </body>
    </html>
  );
}
