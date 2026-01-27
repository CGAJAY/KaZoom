"use client";

import Image from "next/image";
import Link from "next/link";
import { Grid3X3 } from "lucide-react";
import { allBooks } from "@/data/booksData";

const CategoriesPage = () => {
    const uniqueCategories = Array.from(
        new Set(allBooks.map((book) => book.category)),
    );

    const categoryImages = uniqueCategories.reduce(
        (acc, category) => {
            const book = allBooks.find((b) => b.category === category);
            acc[category] = book?.image ?? "/categories/default.jpeg";
            return acc;
        },
        {} as Record<string, string>,
    );

    return (
        <main className="min-h-screen bg-[#fbfbf7]">
            {/* top hero */}
            <section className="relative overflow-hidden px-6 py-14 md:px-16 md:py-18">
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                        <Grid3X3 className="h-4 w-4" />
                        ShelfSpark Categories
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        All Categories
                    </h1>

                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                        Choose a category to find the perfect story for every
                        mood and moment.
                    </p>
                </div>
            </section>

            {/* grid */}
            <section className="px-6 pb-14 md:px-16 md:pb-20">
                <div className="mx-auto max-w-6xl grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {uniqueCategories.map((category) => (
                        <Link
                            key={category}
                            href={`/categories/${encodeURIComponent(category.toLowerCase())}`}
                            className="group text-center">
                            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative aspect-[3/4] w-full bg-emerald-50">
                                    <Image
                                        src={categoryImages[category]}
                                        alt={category}
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                                        sizes="(max-width: 768px) 50vw, 16vw"
                                    />
                                </div>
                            </div>

                            <p className="mt-3 line-clamp-1 text-sm font-semibold text-slate-800">
                                {category}
                            </p>
                            <p className="mt-1 text-xs text-emerald-700 opacity-0 transition group-hover:opacity-100">
                                Explore →
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default CategoriesPage;
