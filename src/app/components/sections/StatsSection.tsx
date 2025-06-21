"use client";
import React from "react";

const statsData = [
  {
    value: "2k",
    label: "Our Daily Order",
  },
  {
    value: "7",
    label: "Specialist Chef",
  },
  {
    value: "80",
    label: "Our Menu & Dish",
  },
  {
    value: "20",
    label: "Our Members",
  },
];

export const StatsSection = () => {
  return (
    <section className="w-full h-[362px] bg-[#0B1517] border-[15px] border-[#68573A] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-[256px]">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-[#CA9C5E] font-['Adamina'] text-6xl md:text-9xl">
              {stat.value}
            </h3>
            <p className="text-white font-['Poppins'] text-sm mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
