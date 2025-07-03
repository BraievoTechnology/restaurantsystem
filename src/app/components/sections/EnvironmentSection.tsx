"use client";

import React from "react";
import { SectionTitle } from "../maincomponents/SectionTitle";
import GreenPalm from "../maincomponents/GreenPalm";

interface EnvironmentSectionProps {
  dataId?: string;
}

const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="relative w-full min-h-auto px-4 py-6 overflow-hidden text-white bg-[#0B1517]"
    >
      {/* Decorative Palm */}
      <div data-aos="fade-left">
        <div className="relative">
          <GreenPalm
            position="right"
            rotate={200}
            className="top-0 hidden md:block"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="px-4 mt-10 mb-6 sm:mt-16 sm:mb-8">
          <SectionTitle title="Our Environment" />
        </div>

        {/* Description */}
        <p className="font-['Rasa'] text-base sm:text-lg md:text-[22px] leading-relaxed max-w-3xl mx-auto mb-10 px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/Envirement.png"
            alt="Our Restaurant Environment"
            className="rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] w-full max-w-[1200px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
