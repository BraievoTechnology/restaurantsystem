import React from "react";
import MainButton from "../maincomponents/Button";

const ChefSection = ({ "data-id": dataId }: { "data-id"?: string }) => {
  return (
    <section
      data-id={dataId}
      className="relative w-full px-4 overflow-hidden text-white py-26 min-h-auto "
    >
      <div className="grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2">
        {/* Text Content */}
        <div className="flex flex-col items-center w-full space-y-6 text-center md:items-center md:text-center">
          {/* Subheading */}
          <p className="text-[20px] sm:text-[24px] md:text-[28px] uppercase tracking-[0.25em] font-light">
            Delight in every bite
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-[75px] font-bold font-['Poppins'] leading-tight">
            Our Chef <br className="hidden sm:block" /> Recommend
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-[22px] font-['Rasa'] max-w-md text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Button */}
          <div className="pt-4">
            <MainButton text="VIEW MENU" ariaLabel="View Menu" href="/menu" />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]">
          <img
            src="/images/chefsection.png"
            alt="Chef's recommended dish"
            className="object-cover w-full h-full overflow-visible transition-transform duration-300 transform rounded-lg hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
