"use client";

import React from "react";
import { SectionTitle } from "../maincomponents/SectionTitle";
import GreenPalm from "../maincomponents/GreenPalm";

interface GallerySectionProps {
  dataId?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="relative w-full min-h-screen px-4 py-16 overflow-hidden text-white"
    >
      <div data-aos="fade-right">
        <GreenPalm
          position="left"
          rotate={0}
          className="top-0 hidden md:block"
        />
      </div>

      {/* Section Title */}
      <div className="mb-16 text-center">
        <SectionTitle title="A Taste of Our Space" />
      </div>

      <div className="max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-4 mt-10  sm:grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 sm:mt-16">
          {/* Image 1 */}
          <div className="relative lg:row-span-2">
            <div className="relative flex h-[250px] sm:h-[300px] lg:h-[632px] flex-col overflow-hidden rounded-lg lg:rounded-l-[calc(2rem+1px)]">
              <img
                src="/images/gallery1.png"
                alt=""
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <div className="relative flex h-[250px] sm:h-[300px] lg:h-full flex-col overflow-hidden rounded-lg">
              <img
                src="/images/gallery2.png"
                alt=""
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative lg:col-start-2 lg:row-start-2">
            <div className="relative flex h-[250px] sm:h-[300px] lg:h-full flex-col overflow-hidden rounded-lg">
              <img
                src="/images/gallery3.png"
                alt=""
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative lg:row-span-2">
            <div className="relative flex h-[250px] sm:h-[300px] lg:min-h-[632px] flex-col overflow-hidden rounded-lg lg:rounded-r-[calc(2rem+1px)]">
              <img
                src="/images/gallery4.png"
                alt=""
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
