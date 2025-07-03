import Image from "next/image";
import React from "react";

interface ParmLeafProps {
  position: "left" | "right";
  rotate?: number; // degrees of rotation
  className?: string;
}

const ParmLeaf: React.FC<ParmLeafProps> = ({
  position,
  rotate = 0,
  className,
}) => {
  const positionClasses =
    position === "left"
      ? "left-25 transform -translate-x-1/2"
      : "right-25 transform translate-x-1/2";

  return (
    <div
      className={`absolute top-0  ${positionClasses} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <Image
        src="/images/palm leaf.png"
        alt="Parm Leaf Decoration"
        width={700}
        height={0}
        className="object-contain "
      />
    </div>
  );
};

export default ParmLeaf;
