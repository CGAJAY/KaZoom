"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { allBooks } from "@/data/booksData";

const AllBooks = () => {
    return (
        <section className="px-6 py-12 md:px-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                            All Books
                        </h3>
                        <p className="mt-2 text-slate-600">
                            Browse the full ShelfSpark collection — tap a book
                            to explore.
                        </p>
                    </div>

                    <div className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                        <BookOpen className="h-4 w-4" />
                        {allBooks.length} titles available
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {allBooks.map(({ id, title, author, image }) => (
                        <Link
                            key={id}
                            href={`/books/${id}`}
                            className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            {/* Cover */}
                            <div className="relative overflow-hidden rounded-2xl bg-emerald-50">
                                <div className="h-44 w-full">
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={500}
                                        height={700}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-200/60" />
                            </div>

                            {/* Text */}
                            <div className="mt-4">
                                <p className="line-clamp-1 text-sm font-extrabold text-slate-900">
                                    {title}
                                </p>
                                <p className="mt-1 line-clamp-1 text-xs font-medium text-slate-500">
                                    {author}
                                </p>

                                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                                    View details
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { AllBooks };
