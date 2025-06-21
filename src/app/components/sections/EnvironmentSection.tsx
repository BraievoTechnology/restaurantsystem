"use client";

import React from "react";
import { SectionTitle } from "../maincomponents/SectionTitle";

interface EnvironmentSectionProps {
  dataId?: string;
}

const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="w-full min-h-screen bg-[#0B1517] text-white py-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="mt-[64px]">
          <SectionTitle title="Our Environment" />
        </div>

        {/* Description */}
        <p className="font-['Rasa'] text-lg md:text-[22px] max-w-3xl mx-auto mb-12  mt-[-64px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Image */}
        <div className="flex justify-center ">
          <img
            src="/images/Envirement.png"
            alt="Our Restaurant Environment"
            className="rounded-[40px] w-full max-w-[1200px] hover:scale-105 transition-transform duration-300  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
