"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  dataId?: string;
}

const Header: React.FC<HeaderProps> = ({ dataId }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add this callback to close the mobile menu
  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      data-id={dataId}
      className="fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-4 mx-auto sm:px-6 md:px-16 max-w-8xl py-7">
        <div className="text-xl font-bold text-white">Logo</div>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/menu" label="Our Menu" />
          {/* <NavLink href="/reservation" label="Reservation" /> */}
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="px-4 pb-4 space-y-4 text-white">
          <NavLink href="/" label="Home" onClick={handleNavLinkClick} />
          <NavLink href="/about" label="About" onClick={handleNavLinkClick} />
          <NavLink href="/menu" label="Our Menu" onClick={handleNavLinkClick} />
          {/* <NavLink href="/reservation" label="Reservation" onClick={handleNavLinkClick} /> */}
          <NavLink
            href="/contact"
            label="Contact"
            onClick={handleNavLinkClick}
          />
        </div>
      )}
    </header>
  );
};

// ⬇️ Updated NavLink component to accept onClick
const NavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="text-[18px] text-white group relative block"
    onClick={onClick}
  >
    {label}
    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
  </Link>
);

export default Header;
