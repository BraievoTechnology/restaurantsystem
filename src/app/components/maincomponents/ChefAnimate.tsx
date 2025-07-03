import Image from "next/image";
import React from "react";

interface ChefAnimateProps {
  position: "left" | "right";
  rotate?: number; // degrees of rotation
  className?: string;
}

const ChefAnimate: React.FC<ChefAnimateProps> = ({
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
        src="/images/Chef.gif"
        alt="chef GIF"
        width={300}
        height={0}
        className="object-contain "
      />
    </div>
  );
};

export default ChefAnimate;
