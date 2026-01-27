"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { allBooks } from "@/data/booksData";
import type { Book } from "@/data/booksData";

type FeaturedBooksProps = {
    title?: string;
    subtitle?: string;
    count?: number;
    ctaHref?: string;
    ctaLabel?: string;
};

/** Safely resolve a cover image from different possible data shapes */
const getCoverSrc = (book: Book): string | null => {
    const b = book as unknown as {
        coverImage?: string;
        cover?: string;
        image?: string;
        thumbnail?: string;
        poster?: string;
    };

    return (
        b.coverImage ?? b.cover ?? b.image ?? b.thumbnail ?? b.poster ?? null
    );
};

const FeaturedBooks = ({
    title = "Popular With Young Readers",
    subtitle = "A quick starter pack of fun stories + smart learning — hand-picked for curious minds.",
    count = 8,
    ctaHref = "/books",
    ctaLabel = "View all books",
}: FeaturedBooksProps) => {
    const featured = useMemo(() => {
        const n = Math.max(1, count);
        return allBooks.slice(0, n);
    }, [count]);

    return (
        <section className="relative bg-[#fbfbf7] px-6 py-14 md:py-20">
            {/* subtle background glow */}
            <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                            <Sparkles className="h-4 w-4" />
                            Featured Picks
                        </div>

                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                            {title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-slate-600">
                            {subtitle}
                        </p>
                    </div>

                    <Link
                        href={ctaHref}
                        className="hidden items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:inline-flex">
                        {ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {featured.map((book) => {
                        const coverSrc = getCoverSrc(book);
                        const description =
                            (book as unknown as { description?: string })
                                .description ?? "";

                        return (
                            <Link
                                key={book.id}
                                href={`/books/${book.id}`}
                                className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                {/* Cover */}
                                <div className="relative overflow-hidden rounded-2xl bg-emerald-50">
                                    {coverSrc ? (
                                        <img
                                            src={coverSrc}
                                            alt={`${book.title} cover`}
                                            className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="flex h-44 w-full flex-col items-center justify-center gap-2 px-4 text-center">
                                            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                                                <BookOpen className="h-5 w-5" />
                                            </span>
                                            <p className="text-sm font-semibold text-slate-900 line-clamp-2">
                                                {book.title}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Cover coming soon
                                            </p>
                                        </div>
                                    )}

                                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-200/60" />
                                </div>

                                {/* Meta */}
                                <div className="mt-4">
                                    <p className="line-clamp-1 text-sm font-extrabold text-slate-900">
                                        {book.title}
                                    </p>
                                    <p className="mt-1 line-clamp-1 text-xs font-medium text-slate-500">
                                        {book.author}
                                    </p>

                                    {description ? (
                                        <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                                            {description}
                                        </p>
                                    ) : (
                                        <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                                            A fun read made for curious young
                                            minds — tap to explore.
                                        </p>
                                    )}

                                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                                        Read more
                                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-10 flex justify-center md:hidden">
                    <Link
                        href={ctaHref}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700">
                        {ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { FeaturedBooks };
