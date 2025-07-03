import Image from "next/image";
import React from "react";

interface GreenPalmProps {
  position: "left" | "right";
  rotate?: number; // degrees of rotation
  className?: string;
}

const GreenPalm: React.FC<GreenPalmProps> = ({
  position,
  rotate = 0,
  className,
}) => {
  const positionClasses =
    position === "left"
      ? "left-20 transform -translate-x-1/2"
      : "right-20 transform translate-x-1/2";

  return (
    <div
      className={`absolute top-0 z-10 ${positionClasses} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <Image
        src="/images/green palm.png"
        alt="Leaf Decoration"
        width={450}
        height={150}
        className="object-contain"
      />
    </div>
  );
};

export default GreenPalm;
