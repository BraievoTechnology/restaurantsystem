"use client";

import React, { useEffect, useState } from "react";

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
        isScrolled ? " backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-16 mx-auto max-w-8xl py-7">
        <div className="text-xl font-bold text-white">Logo</div>
        <nav className="flex gap-8">
          {["Home", "Our menu", "Order now", "Reservation", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative text-[18px] text-white"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
