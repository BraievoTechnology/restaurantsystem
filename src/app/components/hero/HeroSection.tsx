"use client";

import React from "react";
import HeroButtons from "./HeroButtons";

interface HeroProps {
  dataId?: string;
}

const HeroSection: React.FC<HeroProps> = ({ dataId }) => {
  return (
    <div
      data-id={dataId}
      className="relative z-0 w-full min-h-screen flex items-center justify-center border-[1px] border-[#68573A] px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url('/images/background-image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0 z-0 bg-black/40" />
      <div className="relative z-10 text-center text-white max-w-[1200px] mx-auto px-2 sm:px-4">
        <div data-aos="fade-down" className="break-words">
          <p className="mb-4 text-lg sm:text-xl md:text-2xl font-inter">
            MORE FLAVOR FOR LESS
          </p>
          <h1 className="text-[70px] sm:text-[60px] md:text-[120px] leading-tight tracking-wide font-poppins mb-6 break-words">
            Taste The <br />
            Difference
          </h1>
          <p className="font-[rasa] text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-6 tracking-wide px-2">
            When the going gets tough, the tough get grilling. Bringing heat to
            your meat. No one can compete with our meat.
          </p>
        </div>
        <div className="relative inline-block group">
          <HeroButtons />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
