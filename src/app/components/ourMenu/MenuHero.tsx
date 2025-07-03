"use client";
import React from "react";
const MenuHero = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 ">
        <img
          src="https://uploadthingy.s3.us-west-1.amazonaws.com/1BquaZAiNvnQBbzyYiLjAJ/ChatGPT_Image_May_30%2C_2025%2C_09_19_02_PM_1.png"
          alt="Elegant food spread"
          className="object-cover w-full h-full opacity-75"
        />
      </div>
      <div data-aos="fade-down">
        <div className="relative z-10 px-8 py-6 text-center rounded-lg ">
          <h1 className="text-[80px] font-normal drop-shadow-lg font-sans tracking-[20px]">
            Our Menu
          </h1>
        </div>
      </div>
    </div>
  );
};
export default MenuHero;
