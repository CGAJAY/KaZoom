"use client";

import Image from "next/image";
import Link from "next/link";
import { allBooks } from "@/data/booksData";

const Categories = () => {
    // Extract unique categories from allBooks
    const uniqueCategories = Array.from(
        new Set(allBooks.map((book) => book.category))
    ).slice(0, 6); // Limit to first six categories

    // Map each category to one representative book's image
    const categoryImages = uniqueCategories.reduce((acc, category) => {
        const book = allBooks.find((b) => b.category === category);
        acc[category] = book?.image ?? "/categories/default.jpeg"; // Fallback if no image found
        return acc;
    }, {} as Record<string, string>);

    return (
        <section className="px-6 py-12 md:px-16 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">View All Categories</h3>
            <div
                className="
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-4 
                lg:grid-cols-6 
                gap-4 
                sm:gap-6 
                lg:gap-8
            ">
                {uniqueCategories.map((category) => (
                    <Link
                        key={category}
                        href={`/categories/${category.toLowerCase()}`}
                        className="group text-center flex flex-col items-center cursor-pointer">
                        <div
                            className="
                                w-full 
                                aspect-[3/4] 
                                rounded-2xl 
                                bg-white 
                                shadow-sm 
                                ring-2 
                                ring-gray-200 
                                overflow-hidden 
                                transition 
                                group-hover:ring-purple-400
                            ">
                            <Image
                                src={categoryImages[category]}
                                alt={category}
                                width={300}
                                height={400}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-700">
                            {category}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export { Categories };
