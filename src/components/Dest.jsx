import React from 'react';

function ProductBox() {
    const products = [
        { name: "New York", price: 600, rating: 4, image: "new-york.avif", about: "American City" },
        { name: "Abu Dhabi", price: 600, rating: 3, image: "Burj-al-arab.png", about: "Arab Emarates City" },
        { name: "Riyadh", price: 600, rating: 5, image: "riyadh.jpg", about: "Saudi Arabiya City" },
        { name: "Sydney", price: 600, rating: 4, image: "sidney.jpg", about: "Australian City" },
        { name: "Manchester", price: 600, rating: 4, image: "manchister.jpg", about: "England City" },
        { name: "Tokyo", price: 500, rating: 3, image: "tokyo.webp", about: "Japan City" }
    ];

    return (
        <div className="container mx-auto p-4 lg:px-16 md:px-10 pt-20 mt-20">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-3xl sm:text-4xl font-semibold my-2 sm:my-0">Popular Destinations</h1>
                <span className="text-blue-500 text-base sm:text-sm hover:underline cursor-pointer">View More</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="border-box border-2 space-y-4 shadow-lg">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                        <span className='text-[12px] px-4 text-gray-500'>{product.about}</span>
                        <p className='px-4'>{product.name}</p>
                        <p className='px-4'>
                            <span>${product.price} Per Person</span> |{' '}
                            <span className="flex items-center">
                                {Array.from({ length: product.rating }, (_, i) => (
                                    <span key={i} className="text-yellow-400">&#9733;</span>
                                ))}
                                {Array.from({ length: 5 - product.rating }, (_, i) => (
                                    <span key={i} className="text-gray-400">&#9733;</span>
                                ))}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductBox;
