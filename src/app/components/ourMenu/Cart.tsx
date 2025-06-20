'use client'
import React from 'react'
import { X as XIcon, ShoppingCart as CartIcon } from 'lucide-react'
import {useCart} from "@/app/context/CartContext";
const Cart = () => {
    const { items, isOpen, toggleCart, removeItem, itemCount } = useCart()
    const total = items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''))
        return sum + price * item.quantity
    }, 0)
    return (
        <>
            {/* Floating Cart Button - Only show when items exist */}
            {itemCount > 0 && (
                <button
                    onClick={toggleCart}
                    className={`fixed right-0 bottom-0 z-50 bg-[#68573A] hover:bg-[#7A6544] text-white p-4 rounded-tl-lg rounded-bl-lg shadow-lg transition-all duration-300 flex items-center gap-2 ${isOpen ? 'translate-x-[400px]' : 'translate-x-0'}`}
                >
                    <CartIcon size={24} />
                    <span className="absolute -top-2 -right-2 bg-[#C8A97E] text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
                </button>
            )}
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleCart}
                />
            )}
            {/* Cart Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[400px] bg-[#112225] text-white p-6 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-serif">Your Order</h2>
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-[#1E2F33] rounded-full transition-colors"
                    >
                        <XIcon size={24} />
                    </button>
                </div>
                {items.length === 0 ? (
                    <p className="text-gray-400">Your cart is empty</p>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center py-4 border-b border-[#68573A] gap-4"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-serif">{item.name}</h3>
                                        <p className="text-sm text-gray-400">
                                            {item.price} x {item.quantity}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.name)}
                                        className="text-[#C8A97E] hover:text-[#68573A] transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-[#68573A]">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-serif">Total</span>
                                <span className="text-xl font-serif">${total.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-[#68573A] hover:bg-[#7A6544] py-3 rounded-full transition-colors">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default Cart
