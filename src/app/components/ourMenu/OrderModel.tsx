import React, { useState } from "react";
import { X as XIcon, ChevronDown as ChevronDownIcon } from "lucide-react";
interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    description: string;
    price: string;
    image?: string;
  };
  onAddToCart: (portion: string, quantity: number) => void;
}
const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  item,
  onAddToCart,
}) => {
  const [selectedPortion, setSelectedPortion] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [showIngredients, setShowIngredients] = useState(false);
  const portions = [
    {
      size: "Small",
      persons: "One Person",
    },
    {
      size: "Medium",
      persons: "Six Persons",
    },
    {
      size: "Large",
      persons: "Ten Persons",
    },
  ];
  const handlePlaceOrder = () => {
    onAddToCart(selectedPortion, quantity);
    onClose();
  };
  if (!isOpen) return null;
  const ingredients = [
    "Fresh premium ingredients",
    "Locally sourced produce",
    "House-made sauces and dressings",
    "Artisanal bread and garnishes",
    "Seasonal herbs and spices",
  ];
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[#0B2A2F]/70 backdrop-blur-md text-white rounded-xl w-full max-w-lg overflow-hidden relative border border-white/10 shadow-xl">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 p-1.5 hover:bg-white/10 rounded-full transition-colors z-10"
          >
            <XIcon size={20} />
          </button>
          {item.image && (
            <div className="relative w-full h-40 px-4 pt-4 md:h-48 md:px-6 md:pt-6">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-[1] mx-4 md:mx-6 mt-4 md:mt-6 rounded-2xl" />
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          )}
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl text-center font-serif text-[#C8A97E] mb-2 md:mb-3">
              {item.name}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-center text-gray-200 md:text-base md:mb-6">
              {item.description}
            </p>
            <div className="mb-4 md:mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg text-[#C8A97E] mb-2 md:mb-3">
                  Ingredients :
                </h3>
                <button
                  onClick={() => setShowIngredients(!showIngredients)}
                  className="md:hidden flex items-center gap-2 text-xs text-[#C8A97E]"
                >
                  {showIngredients ? "Show Less" : "See More"}
                  <ChevronDownIcon
                    size={14}
                    className={`transition-transform duration-300 ${
                      showIngredients ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <ul
                className={`space-y-1.5 md:space-y-2 transition-all duration-300 md:h-auto ${
                  showIngredients
                    ? "h-auto opacity-100"
                    : "h-0 opacity-0 md:opacity-100"
                } overflow-hidden`}
              >
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <span className="w-1.5 h-1.5 bg-[#C8A97E] rounded-full mr-2" />
                    <span className="text-xs md:text-sm">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4 md:mb-6">
              <h3 className="text-base md:text-lg text-[#C8A97E] mb-2 md:mb-3">
                Select Portion :
              </h3>
              <div className="flex gap-2 md:gap-3">
                {portions.map(({ size, persons }) => (
                  <button
                    key={size}
                    onClick={() => setSelectedPortion(size)}
                    className={`flex-1 rounded-lg p-2 transition-all duration-300 ${
                      selectedPortion === size
                        ? "bg-[#C8A97E] text-[#0B2A2F]"
                        : "bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-xs font-medium md:text-sm">
                      {size}
                      <span
                        className={`text-[10px] md:text-xs ml-1 ${
                          selectedPortion === size
                            ? "text-[#0B2A2F]/70"
                            : "text-gray-400"
                        }`}
                      >
                        ({persons})
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4 md:mb-6">
              <h3 className="text-base md:text-lg text-[#C8A97E] mb-2 md:mb-3">
                Select Qty :
              </h3>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#C8A97E] transition-all text-xs md:text-sm"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num} className="bg-[#0B2A2F]">
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-lg md:text-xl font-serif text-center text-[#C8A97E]">
                {item.price}
              </div>
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-[#C8A97E] hover:bg-[#B69A6F] text-[#0B2A2F] py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base font-medium"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderModal;
