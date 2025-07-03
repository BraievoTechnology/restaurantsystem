import Card from "../maincomponents/Card";
import ChefAnimate from "../maincomponents/ChefAnimate";

import ParmLeaf from "../maincomponents/ParmLeaf";
import { SectionTitle } from "../maincomponents/SectionTitle";

interface FoodCategoriesProps {
  dataId?: string;
}

const FoodCategories: React.FC<FoodCategoriesProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="relative flex flex-col w-full px-4 py-6 text-white min-h-auto"
    >
      <div data-aos="fade-right">
        <div className="relative">
          <ParmLeaf
            position="left"
            rotate={170}
            className="top-[-200px] hidden md:block"
          />
        </div>
      </div>

      {/* Title Section fixed at the top */}
      <div className="text-center mt-[128px] mb-36">
        <SectionTitle title="Restar A Culinary Oasis For Those Who Seek The Extraordinary" />
      </div>

      {/* Cards section centered vertically and horizontally */}
      <div className="flex items-center justify-center flex-1">
        <div className="grid grid-cols-1 gap-38 sm:grid-cols-2 sm:gap-18 lg:grid-cols-5">
          <Card
            image="/images/FoodCategory1.png"
            title="Breakfast Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="VIEW MENU"
            href="/menu"
          />
          <Card
            image="/images/FoodCategory2.png"
            title="Lunch Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="VIEW MENU"
            href="/menu"
          />
          <Card
            image="/images/FoodCategory3.png"
            title="Dinner Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="VIEW MENU"
            href="/menu"
          />
          <Card
            image="/images/FoodCategory4.png"
            title="Desert Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="VIEW MENU"
            href="/menu"
          />
          <Card
            image="/images/FoodCategory4.png"
            title="Desert Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="VIEW MENU"
            href="/menu"
          />
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
