import Image from "next/image";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import FoodCategory from "./components/sections/FoodCategories";
import ChefSection from "./components/sections/ChefSection";
import { StatsSection } from "./components/sections/StatsSection";
import EnvironmentSection from "./components/sections/EnvironmentSection";
import GallerySection from "./components/sections/GallerySection";
import ParmLeaf from "./components/maincomponents/ParmLeaf";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FoodCategory />
      <ChefSection />
      <StatsSection />
      <EnvironmentSection />
      <GallerySection />
    </main>
  );
}
