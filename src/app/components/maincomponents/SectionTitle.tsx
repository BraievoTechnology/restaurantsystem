"use client";
import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
  "data-id"?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "",
  "data-id": dataId,
}) => {
  return (
    <div data-aos="flip-up">
      <div
        className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4  mb-6 sm:mb-8 ${className}`}
        data-id={dataId}
      >
        <div className="h-[1px] bg-[#68573A] flex-1 min-w-[40px] max-w-[171px]" />
        <h2
          className="text-center text-5xl text-[#CA9C5E] px-2 break-words"
          style={{
            fontFamily: "Adamina, serif",
            // fontSize: "clamp(1.25rem, 4vw, 2.25rem)",
          }}
        >
          {title}
        </h2>
        <div className="h-[1px] bg-[#68573A] flex-1 min-w-[40px] max-w-[171px]" />
      </div>
    </div>
  );
};
