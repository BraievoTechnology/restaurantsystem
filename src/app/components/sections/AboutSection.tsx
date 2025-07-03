"use client";

import React from "react";
import { SectionTitle } from "../maincomponents/SectionTitle";
import ParmLeaf from "../maincomponents/ParmLeaf";

interface AboutSectionProps {
  dataId?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="relative min-h-auto w-full px-4 py-6 text-white bg-[#0B1517]"
    >
      {/* Decorative Leaf Top Right */}
      <div data-aos="fade-left">
        <div className="relative z-20">
          <ParmLeaf
            position="right"
            rotate={-10}
            className="hidden md:block top-[-400px]"
          />
        </div>
      </div>

      {/* Other Decorative Leaves - Desktop Only */}
      <img
        src="/images/double leaves.png"
        alt=""
        className="absolute hidden md:block bottom-0 right-[55px] w-[100px]"
      />
      <img
        src="/images/single leaves.png"
        alt=""
        className="absolute hidden md:block top-[85px] left-[34px] w-14 rotate-12"
      />
      <img
        src="/images/single leaves.png"
        alt=""
        className="absolute hidden md:block -rotate-45 top-1/2 right-[10px] w-18"
      />
      <img
        src="/images/single leaves.png"
        alt=""
        className="absolute hidden md:block bottom-[80px] left-[30px] w-14 rotate-6"
      />

      {/* Section Content */}
      <div className="max-w-6xl mx-auto mt-10">
        {/* Section Title */}
        <div className="px-4 mb-12 text-center">
          <SectionTitle title="Restar A Culinary Oasis For Those Who Seek The Extraordinary" />
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left Image Column */}
          <div className="relative w-full md:w-[45%] h-auto md:h-[600px] order-2 md:order-1 flex flex-col md:block items-center gap-6">
            <img
              src="/images/aboutimage1.png"
              alt="Culinary dish"
              className="relative md:absolute top-0 md:left-[-25%] md:translate-x-0 w-[100%] sm:w-[70%] md:w-[60%] rounded-lg shadow-lg z-30"
            />
            <img
              src="/images/aboutimage2.png"
              alt="Food presentation"
              className="relative md:absolute top-[35%] md:left-[20%] md:translate-x-0 w-[100%] sm:w-[70%] md:w-[60%] rounded-lg shadow-md z-20"
            />

            {/* Decorative Leaf - Hidden on Mobile */}
            <img
              src="/images/single leaves.png"
              alt=""
              className="hidden md:block absolute w-40 h-auto top-5 right-[35px]"
            />
          </div>

          {/* Right Text Column */}
          <div className="w-full md:w-[55%] space-y-6 md:pl-[5%] order-1 md:order-2">
            {/* About Story */}
            <div className="relative p-4 border-b-2 rounded-sm sm:p-6 border-white/20">
              <img
                src="/images/Single leaves.png"
                alt=""
                className="absolute hidden md:block w-20 h-auto rotate-45 -left-[32px] top-[65px]"
              />
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-rasa mb-3">
                About Our Story
              </h3>
              <p className="text-gray-300 text-base sm:text-lg md:text-[22px] font-rasa">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Timeline Info */}
            <div className="flex flex-col justify-between gap-6 p-4 border-b-2 rounded-sm sm:flex-row sm:p-6 border-white/20">
              <div className="w-full sm:w-1/2">
                <h4 className="text-2xl sm:text-3xl md:text-[40px] font-rasa mb-2">
                  1996
                </h4>
                <p className="text-gray-300 text-base sm:text-lg md:text-[22px] font-rasa">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <h4 className="text-2xl sm:text-3xl md:text-[40px] font-rasa mb-2">
                  2025
                </h4>
                <p className="text-gray-300 text-base sm:text-lg md:text-[22px] font-rasa">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="relative px-4 sm:px-6">
              <h4 className="text-2xl sm:text-3xl md:text-[40px] font-rasa mb-3">
                Josyphy
              </h4>
              <img
                src="/images/signature.png"
                alt="Signature"
                className="w-auto h-[50px] sm:h-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
