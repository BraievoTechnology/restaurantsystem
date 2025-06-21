"use client";

import React from "react";
import { SectionTitle } from "../maincomponents/SectionTitle";

interface GallerySectionProps {
  dataId?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="relative w-full min-h-screen px-4 py-16 overflow-hidden text-white"
    >
      <div className="mb-16 text-center">
        <SectionTitle title="A Taste of Our Space" />
      </div>
      <div className="max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8">
        <div className="grid gap-4 mt-10 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="relative flex h-[632px] flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="relative w-full h-full">
                <img
                  src="/images/gallery1.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] hover:scale-105 transition-transform duration-300 "
                />
              </div>
            </div>
            <div className="absolute rounded-lg shadow-sm pointer-events-none inset-px ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="relative w-full h-full">
                <img
                  src="/images/gallery2.png"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-105 "
                />
              </div>
            </div>
            <div className="absolute rounded-lg shadow-sm pointer-events-none inset-px ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="relative w-full h-full">
                <img
                  src="/images/gallery3.png"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-105 "
                />
              </div>
            </div>

            <div className="absolute rounded-lg shadow-sm pointer-events-none inset-px ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute bg-white rounded-lg inset-px max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="relative w-full min-h-120 grow">
                <img
                  src="/images/gallery4.png"
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-105 "
                />
              </div>
            </div>
            <div className="absolute rounded-lg shadow-sm pointer-events-none inset-px ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
