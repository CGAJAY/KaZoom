"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid3X3 } from "lucide-react";
import { allBooks } from "@/data/booksData";

const Categories = () => {
    const uniqueCategories = Array.from(
        new Set(allBooks.map((book) => book.category)),
    ).slice(0, 6);

    const categoryImages = uniqueCategories.reduce(
        (acc, category) => {
            const book = allBooks.find((b) => b.category === category);
            acc[category] = book?.image ?? "/categories/default.jpeg";
            return acc;
        },
        {} as Record<string, string>,
    );

    return (
        <section className="relative bg-[#fbfbf7] px-6 py-14 md:px-16 md:py-20">
            {/* glow */}
            <div className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                            <Grid3X3 className="h-4 w-4" />
                            Browse by Category
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                            Explore Categories
                        </h2>
                        <p className="mt-2 max-w-2xl text-slate-600">
                            Pick a theme your child loves — stories, learning,
                            adventures, and more.
                        </p>
                    </div>

                    <Link
                        href="/categories"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                        View all categories
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
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
            </div>
        </section>
    );
};

export { Categories };
