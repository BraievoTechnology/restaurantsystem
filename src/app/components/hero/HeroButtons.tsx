"use client";
import { useState } from "react";

export default function DualActionButton() {
  const [hoveringRight, setHoveringRight] = useState(false);

  return (
    <div className="inline-flex border-2 border-[#68573A] rounded-md overflow-hidden">
      <button
        onMouseEnter={() => setHoveringRight(false)}
        className={`px-8 py-3 text-sm tracking-widest transition-all duration-300 
          ${
            hoveringRight
              ? "bg-[#0B1517] text-white border-r border-[#68573A]"
              : "bg-[#68573A] text-white"
          }`}
      >
        Reserve A Table
      </button>

      <button
        onMouseEnter={() => setHoveringRight(true)}
        onMouseLeave={() => setHoveringRight(false)}
        className={`px-8 py-3 text-sm tracking-widest transition-all duration-300
          ${hoveringRight ? "bg-[#68573A] " : "bg-[#0B1517]"}`}
      >
        Order Online
      </button>
    </div>
  );
}
