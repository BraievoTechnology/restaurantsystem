import Link from "next/link";
import React from "react";

import { X as XIcon, ShoppingCart as CartIcon } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
const Cart = () => {
  const { items, isOpen, toggleCart, removeItem, itemCount } = useCart();
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);
  return (
    <>
      {/* Floating Cart Button - Only show when items exist */}
      {itemCount > 0 && (
        <button
          onClick={toggleCart}
          className={`fixed right-0 bottom-20 md:bottom-32 z-50 bg-[#68573A] hover:bg-[#7A6544] text-white p-3 md:p-4 shadow-lg transition-all duration-300 flex items-center gap-2 rounded-l-full ${
            isOpen
              ? "translate-x-[100vw] md:translate-x-[400px]"
              : "translate-x-0"
          }`}
        >
          <CartIcon size={20} className="md:w-6 md:h-6" />
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#C8A97E] text-white text-xs w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        </button>
      )}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleCart}
        />
      )}
      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#112225] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-[#68573A]">
            <h2 className="font-serif text-xl md:text-2xl">Your Order</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-[#1E2F33] rounded-full transition-colors"
            >
              <XIcon size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto md:p-6">
            {items.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center py-3 border-b border-[#68573A] gap-3 md:gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-sm md:text-base">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400 md:text-sm">
                        {item.portion} • {item.price} x {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-[#C8A97E] hover:text-[#68573A] transition-colors text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 md:p-6 border-t border-[#68573A]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg md:text-xl">Total</span>
                <span className="font-serif text-lg md:text-xl">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Link href="/payment">
                <button className="w-full bg-[#68573A] hover:bg-[#7A6544] py-3 rounded-lg transition-colors text-sm md:text-base font-medium">
                  Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
