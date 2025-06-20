import React, { useState } from 'react'
import {useCart} from "@/app/context/CartContext";
import OrderModal from "@/app/components/ourMenu/OrderModel";

interface MenuItemProps {
    name: string
    description: string
    price: string
    image?: string
}
const MenuItem: React.FC<MenuItemProps> = ({
                                               name,
                                               description,
                                               price,
                                               image,
                                           }) => {
    const { addItem } = useCart()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const handleAddToCart = (portion: string, quantity: number) => {
        setIsAdding(true)
        addItem(name, price, portion, quantity)
        setTimeout(() => {
            setIsAdding(false)
        }, 1000)
    }
    return (
        <>
            <div className="w-full h-auto min-h-[400px] md:min-h-[450px] bg-[#112225] rounded-tl-[60px] md:rounded-tl-[100px] rounded-br-[60px] md:rounded-br-[100px] flex flex-col items-center justify-between p-4 md:p-6 text-center relative transition-all duration-300 ease-in-out hover:bg-[#1E2F33] hover:shadow-2xl hover:scale-[1.02]">
                {/* Image Container */}
                <div className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 w-[160px] md:w-[200px] aspect-square">
                    {image && (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    )}
                </div>
                {/* Content Container */}
                <div className="flex flex-col h-full w-full pt-24 md:pt-28">
                    {/* Title & Description */}
                    <div className="flex-grow">
                        <h3 className="text-white text-xl md:text-2xl mb-2 font-serif line-clamp-2">
                            {name}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed px-2 line-clamp-3">
                            {description}
                        </p>
                    </div>
                    {/* Price and Order Button */}
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="text-[#C8A97E] text-lg md:text-xl">{price}</div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            disabled={isAdding}
                            className={`w-full bg-[#68573A] hover:bg-[#7A6544] text-white px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden ${isAdding ? 'pointer-events-none' : ''}`}
                        >
              <span
                  className={`inline-block transition-transform duration-300 ${isAdding ? '-translate-y-10' : 'translate-y-0'}`}
              >
                Order Now
              </span>
                            <span
                                className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ${isAdding ? 'translate-y-0' : 'translate-y-10'}`}
                            >
                Added! ✓
              </span>
                        </button>
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
    )
}
export default MenuItem
