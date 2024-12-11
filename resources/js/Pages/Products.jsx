import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AppLayout from "../Layouts/AppLayout";

const Products = ({ products, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const filterProducts = () => {
        Inertia.get("/products", { category: selectedCategory });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

            {/* Filter Form */}
            <div className="mb-8">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        filterProducts();
                    }}
                    className="flex justify-center space-x-4"
                >
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        className="py-2 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Filter
                    </button>
                </form>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xl font-bold text-indigo-600">
                                    ${product.price}
                                </span>
                                <button className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Assign the layout
Products.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Products;
