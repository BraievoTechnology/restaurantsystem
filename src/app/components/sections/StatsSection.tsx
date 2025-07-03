"use client";

import React from "react";
import TropicalLeaves from "../maincomponents/TropicalLeaves";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  { value: 2000, suffix: "+", label: "Our Daily Order" },
  { value: 7, label: "Specialist Chef" },
  { value: 80, label: "Our Menu & Dish" },
  { value: 20, label: "Our Members" },
];

export const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-auto w-full px-4 py-6 text-white bg-[#0B1517]"
    >
      {/* Decorative Leaves */}
      <div data-aos="fade-right">
        <TropicalLeaves
          position="left"
          rotate={0}
          className="top-[-130px] hidden md:block"
        />
      </div>

      {/* Stats Container */}
      <div className="w-full bg-[#0B1517] border-[15px] border-[#68573A] py-25 px-4 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-10 md:flex-row md:gap-32">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center min-w-[120px]">
              <h3 className="text-[#CA9C5E] font-['Adamina'] text-4xl sm:text-5xl md:text-7xl">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=","
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-white font-['Poppins'] text-sm sm:text-base mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
