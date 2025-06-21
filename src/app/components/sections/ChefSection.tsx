import React from "react";
import MainButton from "../maincomponents/Button";

const ChefSection = ({ "data-id": dataId }: { "data-id"?: string }) => {
  return (
    <section
      data-id={dataId}
      className="w-full min-h-screen bg-[#0B1517] mt-[50px] text-white py-16 px-4 relative overflow-hidden"
    >
      <div className="grid items-center gap-20 mx-auto max-w-7xl md:grid-cols-2">
        {/* Text Content */}
        <div className="flex flex-col items-center w-full space-y-6 text-center">
          {/* Subheading */}
          <p className="text-[28px] uppercase tracking-[0.25em] text-white font-light">
            Delight in every bite
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-[75px] font-bold font-['Poppins'] leading-tight">
            Our Chef <br /> Recommend
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-[22px] font-['Rasa'] max-w-md text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Button with Gold Lines */}
          <div className="pt-4 space-y-2">
            <MainButton text="VIEW MENU" ariaLabel="View Menu" />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-[800px] h-[800px]">
          <img
            src="/images/chefsection.png"
            alt="Chef's recommended dish with tropical leaves decoration"
            className="w-[800px] h-[800px] rounded-lg transform hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
