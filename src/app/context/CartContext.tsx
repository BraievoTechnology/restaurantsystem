import React, { useState, createContext, useContext } from 'react'
interface CartItem {
    name: string
    price: string
    quantity: number
    portion: string
}
interface CartContextType {
    items: CartItem[]
    isOpen: boolean
    addItem: (
        name: string,
        price: string,
        portion: string,
        quantity: number,
    ) => void
    removeItem: (name: string) => void
    toggleCart: () => void
    itemCount: number
}
const CartContext = createContext<CartContextType | undefined>(undefined)
export const CartProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const addItem = (
        name: string,
        price: string,
        portion: string,
        quantity: number = 1,
    ) => {
        setItems((current) => {
            const existing = current.find(
                (item) => item.name === name && item.portion === portion,
            )
            if (existing) {
                return current.map((item) =>
                    item.name === name && item.portion === portion
                        ? {
                            ...item,
                            quantity: item.quantity + quantity,
                        }
                        : item,
                )
            }
            return [
                ...current,
                {
                    name,
                    price,
                    portion,
                    quantity,
                },
            ]
        })
    }
    const removeItem = (name: string) => {
        setItems((current) => current.filter((item) => item.name !== name))
    }
    const toggleCart = () => setIsOpen(!isOpen)
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    return (
        <CartContext.Provider
            value={{
                items,
                isOpen,
                addItem,
                removeItem,
                toggleCart,
                itemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
