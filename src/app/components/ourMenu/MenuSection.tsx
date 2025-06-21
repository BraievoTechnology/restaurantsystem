import React from 'react'
import MenuItem from './MenuItem'
interface MenuSectionProps {
    category: string
}
const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
    // Sample menu items for each category
    const menuItems = {
        Salads: [
            {
                name: 'Garden Fresh Salad',
                description:
                    'Mixed greens, cherry tomatoes, cucumber, and carrots with our house vinaigrette.',
                price: '$9.95',
                image:
                    'https://i.ibb.co/ZpRykwwS/Food-Category1.png',
            },
            {
                name: 'Garden Fresh Salad',
                description:
                    'Mixed greens, cherry tomatoes, cucumber, and carrots with our house vinaigrette.',
                price: '$9.95',
                image:
                    'https://i.ibb.co/27S4t8fL/Food-Category2.png',
            },
            {
                name: 'Garden Fresh Salad',
                description:
                    'Mixed greens, cherry tomatoes, cucumber, and carrots with our house vinaigrette.',
                price: '$9.95',
                image:
                    'https://i.ibb.co/4RSmCwRN/Food-Category3.png',
            },
            {
                name: 'Garden Fresh Salad',
                description:
                    'Mixed greens, cherry tomatoes, cucumber, and carrots with our house vinaigrette.',
                price: '$9.95',
                image:
                    'https://i.ibb.co/dsS488dC/Food-Category4.png',
            },         {
                name: 'Garden Fresh Salad',
                description:
                    'Mixed greens, cherry tomatoes, cucumber, and carrots with our house vinaigrette.',
                price: '$9.95',
                image:
                    'https://i.ibb.co/4RSmCwRN/Food-Category3.png',
            },
            {
                name: 'Garden Fresh Salad',
                description:
                    'Mixed greens, cherry tomatoes, cucumber, and carrots with our house vinaigrette.',
                price: '$9.95',
                image:
                    'https://i.ibb.co/ZpRykwwS/Food-Category1.png',
            },

        ],
        Sandwiches: [
            {
                name: 'Club Sandwich',
                description:
                    'Mixed greens, cherry tomatoes, cucumber, and carrots with our house vinaigrette.',
                price: '$12.95',
                image:
                    'https://i.ibb.co/27S4t8fL/Food-Category2.png',
            },
            {
                name: 'Grilled Chicken Sandwich',
                description:
                    'Grilled chicken breast with avocado, lettuce, tomato, and chipotle aioli.',
                price: '$13.95',
                image:
                    'https://i.ibb.co/27S4t8fL/Food-Category2.png',
            },
            {
                name: 'Veggie Wrap',
                description:
                    'Hummus, roasted vegetables, mixed greens, and feta cheese in a spinach wrap.',
                price: '$10.95',
                image:
                    'https://i.ibb.co/dsS488dC/Food-Category4.png',
            },
        ],
        Soups: [
            {
                name: 'Tomato Basil Soup',
                description:
                    'Creamy tomato soup with fresh basil and a touch of cream.',
                price: '$7.95',
                image:
                    'https://i.ibb.co/ZpRykwwS/Food-Category1.png',
            },
            {
                name: 'French Onion Soup',
                description:
                    'Caramelized onions in a rich beef broth topped with croutons and gruyère cheese.',
                price: '$8.95',
                image:
                    'https://i.ibb.co/27S4t8fL/Food-Category2.png',
            },
            {
                name: 'Chicken Noodle Soup',
                description:
                    'Traditional chicken soup with vegetables and egg noodles.',
                price: '$7.95',
                image:
                    'https://i.ibb.co/dsS488dC/Food-Category4.png',
            },
        ],
        Beverages: [
            {
                name: 'Fresh Squeezed Lemonade',
                description: 'Made daily with fresh lemons and a touch of honey.',
                price: '$4.95',
                image:
                    'https://i.ibb.co/ZpRykwwS/Food-Category1.png',
            },
            {
                name: 'Iced Tea',
                description: 'House-brewed black tea, served sweetened or unsweetened.',
                price: '$3.95',
                image:
                    'https://i.ibb.co/dsS488dC/Food-Category4.png',
            },
            {
                name: 'Craft Soda',
                description: 'Locally made sodas in various flavors.',
                price: '$4.50',
                image:
                    'https://i.ibb.co/27S4t8fL/Food-Category2.png',
            },
        ],
        Desserts: [
            {
                name: 'Chocolate Lava Cake',
                description:
                    'Warm chocolate cake with a molten center, served with vanilla ice cream.',
                price: '$8.95',
                image:
                    'https://i.ibb.co/dsS488dC/Food-Category4.png',
            },
            {
                name: 'New York Cheesecake',
                description:
                    'Classic cheesecake with a graham cracker crust and seasonal berry compote.',
                price: '$7.95',
                image:
                    'https://i.ibb.co/ZpRykwwS/Food-Category1.png',
            },
            {
                name: 'Crème Brûlée',
                description:
                    'Rich vanilla custard topped with a layer of hard caramelized sugar.',
                price: '$8.50',
                image:
                    'https://i.ibb.co/dsS488dC/Food-Category4.png',
            },
        ],
    }
    let items = []
    if (category === 'All Menu') {
        items = Object.values(menuItems).flat()
    } else {
        items = menuItems[category as keyof typeof menuItems] || []
    }
    return (
        <section className="w-full min-h-screen text-white pt-32 md:pt-40 px-4 md:px-8 pb-20 relative overflow-hidden">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-24 md:gap-28 max-w-[1600px]">
                    {items.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default MenuSection
