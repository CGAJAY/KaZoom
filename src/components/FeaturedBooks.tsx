"use client";

import Image from "next/image";
import Link from "next/link";
import { allBooks } from "@/data/booksData";

const FeaturedBooks = () => {
    const featuredBooks = allBooks.slice(0, 6);

    return (
        <section className="px-6 py-12 md:px-16">
            <h3 className="flex items-center gap-2 text-2xl font-bold  text-blue-400 hover:text-blue-600 transition mb-6">
                Featured Books
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {featuredBooks.map(({ id, title, author, image }) => (
                    <div
                        key={id}
                        className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 flex flex-col items-center text-center hover:ring-blue-400 transition">
                        <div className="h-40 w-28 md:h-44 md:w-32 mb-3 overflow-hidden rounded-lg">
                            <Image
                                src={image}
                                alt={title}
                                width={128}
                                height={176}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <p className="font-semibold text-gray-800 text-sm md:text-base">
                            {title}
                        </p>
                        <p className="text-xs text-gray-500">{author}</p>
                        <Link
                            href={`/books/${id}`}
                            className="mt-3 inline-block bg-blue-500 text-white text-xs md:text-sm px-3 py-1 rounded-lg hover:bg-blue-600 transition">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { FeaturedBooks };
