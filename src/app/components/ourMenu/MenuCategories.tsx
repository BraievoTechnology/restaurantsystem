import React from "react";
interface MenuCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}
const MenuCategories: React.FC<MenuCategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = [
    "All Menu",
    "Salads",
    "Sandwiches",
    "Soups",
    "Beverages",
    "Desserts",
  ];
  return (
    <div className="w-full bg-[#0B1517] py-8 relative ">
      {/* Decorative Leaves Right - Hidden on mobile */}

      <div className="absolute hidden transform -translate-y-1/2 -right-50 top-1/2 md:block">
        <div data-aos="fade-left">
          <img
            src="/images/FoodPlate.png"
            alt=""
            className="w-[500px] h-auto"
          />
        </div>
      </div>

      {/* Top line */}
      <div className="w-full h-[1px] bg-[#68573A] mb-8" />
      {/* Categories */}
      <div className="relative z-10 max-w-6xl px-4 mx-auto overflow-x-auto">
        <div className="flex items-center justify-start gap-8 flex-nowrap md:flex-wrap md:gap-16 min-w-max md:min-w-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base md:text-lg whitespace-nowrap tracking-wider transition-colors duration-300 font-serif
                ${
                  activeCategory === category
                    ? "text-[#C8A97E]"
                    : "text-white hover:text-[#C8A97E]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Bottom line */}
      <div className="w-full h-[1px] bg-[#68573A] mt-8" />
    </div>
  );
};
export default MenuCategories;
