"use client";
import React from "react";
import Link from "next/link";

interface MainButtonProps {
  text?: string;
  href?: string;
  ariaLabel?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  text,
  href,
  ariaLabel,
  onClick,
}) => {
  const sharedClasses =
    "text-sm sm:text-base md:text-lg font-sans text-[#E0D6C8] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] hover:text-white hover:opacity-90 transition-all duration-300 py-2";

  return (
    <div className="relative inline-flex flex-col items-center group">
      <div className="w-30 sm:w-35 md:w-42 h-px bg-[#B08D57] mb-2 transform transition-all duration-300 group-hover:translate-y-1" />

      {href ? (
        <Link href={href} aria-label={ariaLabel} className={sharedClasses}>
          {text}
        </Link>
      ) : (
        <button
          onClick={onClick}
          aria-label={ariaLabel}
          className={sharedClasses}
        >
          {text}
        </button>
      )}

      <div className="w-30 sm:w-35 md:w-42 h-px bg-[#B08D57] mt-2 transform transition-all duration-300 group-hover:-translate-y-1" />
    </div>
  );
};

export default MainButton;
