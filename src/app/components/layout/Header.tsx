"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  dataId?: string;
}

const Header: React.FC<HeaderProps> = ({ dataId }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-id={dataId}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-16 mx-auto max-w-8xl py-7">
        <div className="text-xl font-bold text-white">Logo</div>
        <nav className="flex gap-8">
          <Link href="/" className="text-[18px] text-white group relative">
            Home
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/about" className="text-[18px] text-white group relative">
            About
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/menu" className="text-[18px] text-white group relative">
            Our Menu
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/reservation"
            className="text-[18px] text-white group relative"
          >
            Reservation
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="text-[18px] text-white group relative"
          >
            Contact
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
