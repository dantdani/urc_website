import React from "react";
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer";

import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <h1>Layout</h1>
      {children}
      <Footer />
    </div>
  );
};