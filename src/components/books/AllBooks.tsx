"use client";

import Image from "next/image";
import Link from "next/link";
import { allBooks } from "@/data/booksData";

const AllBooks = () => {
    return (
        <section className="px-6 py-12 md:px-16">
            <h3 className="text-2xl font-bold mb-6">All Books</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {allBooks.map(({ id, title, author, image }) => (
                    <Link
                        key={id}
                        href={`/books/${id}`}
                        className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 flex flex-col items-center text-center hover:ring-purple-400 transition cursor-pointer">
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
                    </Link>
                ))}
            </div>
        </section>
    );
};

export { AllBooks };
