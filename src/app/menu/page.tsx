"use client";
import React, { useState } from "react";
import MenuCategories from "@/app/components/ourmenu/MenuCategories";
import MenuHero from "@/app/components/ourmenu/MenuHero";
import MenuSection from "@/app/components/ourmenu/MenuSection";
import { CartProvider } from "@/app/context/CartContext";
import Cart from "@/app/components/ourmenu/Cart";
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All Menu");
  return (
    <div className="w-full min-h-screen bg-[#0B1517] text-white">
      <CartProvider>
        <MenuHero />

        <MenuCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Cart />
        <MenuSection category={activeCategory} />
      </CartProvider>
    </div>
  );
};
export default Menu;
