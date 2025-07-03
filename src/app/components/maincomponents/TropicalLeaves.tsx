// components/LeafDecoration.tsx

import Image from "next/image";
import React from "react";

interface TropicalLeavesProps {
  position: "left" | "right";
  rotate?: number; // degrees of rotation
  className?: string;
}

const TropicalLeaves: React.FC<TropicalLeavesProps> = ({
  position,
  rotate = 0,
  className,
}) => {
  const positionClasses =
    position === "left"
      ? "left-5 transform -translate-x-1/2"
      : "right-0 transform translate-x-1/2";

  return (
    <div
      className={`absolute top-0 z-10 ${positionClasses} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <Image
        src="/images/tropical leaves.png"
        alt="Leaf Decoration"
        width={400}
        height={150}
        className="object-contain"
      />
    </div>
  );
};

export default TropicalLeaves;
