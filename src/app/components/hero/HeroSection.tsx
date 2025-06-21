"use client";
import React from "react";
import HeroButtons from "../hero/HeroButtons";

interface HeroProps {
  dataId?: string;
}

const HeroSection: React.FC<HeroProps> = ({ dataId }) => {
  return (
    <div
      data-id={dataId}
      className="relative w-full min-h-screen flex items-center justify-center border-[1px] border-[#68573A]"
      style={{
        backgroundImage: `url('/images/background image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 px-4 text-center text-white">
        <p className="text-[32px] font-inter ">MORE FLAVOR FOR LESS</p>
        <h1 className="text-6xl md:text-[150px] tracking-[16px] font-poppins mb-[32px]">
          Taste The
          <br />
          Difference
        </h1>
        <p className="font-[rasa] text-[20px] md:text-20px max-w-2xl mx-auto mb-[32px] tracking-[2px]">
          When the going gets tough, the tough get grilling. Bringing heat to
          your meat. No one can compete with our meat
        </p>
        <div className="relative inline-block group">
          <HeroButtons />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
