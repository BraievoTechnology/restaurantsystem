import Card from "../maincomponents/Card";
import { SectionTitle } from "../maincomponents/SectionTitle";

interface FoodCategoriesProps {
  dataId?: string;
}

const FoodCategories: React.FC<FoodCategoriesProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="relative flex flex-col w-full min-h-screen px-4 py-16 overflow-hidden text-white"
    >
      {/* Title Section fixed at the top */}
      <div className="text-center mt-[128px] mb-16">
        <SectionTitle title="Restar A Culinary Oasis For Those Who Seek The Extraordinary" />
      </div>

      {/* Cards section centered vertically and horizontally */}
      <div className="flex items-center justify-center flex-1">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <Card
            image="/images/FoodCategory1.png"
            title="Breakfast Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
          <Card
            image="/images/FoodCategory2.png"
            title="Lunch Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
          <Card
            image="/images/FoodCategory3.png"
            title="Dinner Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
          <Card
            image="/images/FoodCategory4.png"
            title="Desert Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
          <Card
            image="/images/FoodCategory4.png"
            title="Desert Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
