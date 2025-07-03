import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import OrderModal from "@/app/components/ourmenu/OrderModel";
import MainButton from "../maincomponents/Button";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}
const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
}) => {
  const { addItem } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = (portion: string, quantity: number) => {
    setIsAdding(true);
    addItem(name, price, portion, quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <>
      <div className="w-full h-auto min-h-[400px] md:min-h-[450px] bg-[#112225] rounded-tl-[60px] md:rounded-tl-[100px] rounded-br-[60px] md:rounded-br-[100px] flex flex-col items-center justify-between p-4 md:p-6 text-center relative transition-all duration-300 ease-in-out hover:bg-[#1E2F33] hover:shadow-2xl hover:scale-[1.02]">
        {/* Image Container */}
        <div className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 w-[160px] md:w-[200px] aspect-square ">
          {image && (
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full rounded-full"
            />
          )}
        </div>
        {/* Content Container */}
        <div className="flex flex-col w-full h-full pt-24 md:pt-28">
          {/* Title & Description */}
          <div className="flex-grow">
            <h3 className="mb-2 font-serif text-xl text-white md:text-2xl line-clamp-2">
              {name}
            </h3>
            <p className="px-2 text-sm leading-relaxed text-gray-300 md:text-base line-clamp-3">
              {description}
            </p>
          </div>
          {/* Price and Order Button */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="text-[#C8A97E] text-lg md:text-xl">{price}</div>
            <div className="flex justify-center">
              <MainButton
                text={isAdding ? "Added ✓" : "ORDER NOW"}
                onClick={() => !isAdding && setIsModalOpen(true)}
                ariaLabel="Order menu item"
              />
            </div>
          </div>
        </div>
      </div>
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={{
          name,
          description,
          price,
          image,
        }}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};
export default MenuItem;
