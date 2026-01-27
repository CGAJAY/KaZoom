"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, BookOpen } from "lucide-react";
import { allBooks } from "@/data/booksData";
import type { Book } from "@/data/booksData";

const Header = () => {
    const pathname = usePathname();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Book[] | null>(null);

    const links = useMemo(
        () => [
            { href: "/about", label: "About" },
            { href: "/books", label: "Books" },
            { href: "/contact", label: "Contact" },
        ],
        [],
    );

    const isActive = (href: string) =>
        pathname === href
            ? "text-emerald-700 font-semibold"
            : "text-slate-600 hover:text-slate-900";

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        if (value.trim().length > 1) {
            const filtered = allBooks.filter(
                (book) =>
                    book.title.toLowerCase().includes(value) ||
                    book.author.toLowerCase().includes(value),
            );
            setResults(filtered.length > 0 ? filtered : []);
        } else {
            setResults(null);
        }
    };

    const clearSearch = () => {
        setQuery("");
        setResults(null);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fbfbf7]/80 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-3">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    {/* Brand */}
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2"
                            aria-label="Go to homepage"
                            onClick={clearSearch}>
                            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 transition group-hover:scale-[1.02]">
                                <BookOpen className="h-5 w-5" />
                            </span>

                            <div className="leading-tight">
                                <p className="text-lg font-extrabold tracking-tight text-slate-900">
                                    Shelf
                                    <span className="text-emerald-700">
                                        Spark
                                    </span>
                                </p>
                                <p className="text-xs text-slate-500 -mt-0.5">
                                    Discover • Read • Grow
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:max-w-xl">
                        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-200">
                            <Search className="h-4 w-4 text-slate-500" />
                            <input
                                type="text"
                                value={query}
                                onChange={handleSearch}
                                placeholder="Search by title or author…"
                                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                            />
                            {query.length > 0 && (
                                <button
                                    onClick={clearSearch}
                                    className="rounded-xl px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
                                    type="button">
                                    Clear
                                </button>
                            )}
                        </div>

                        {results !== null && (
                            <div className="absolute mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                                {results.length === 0 ? (
                                    <div className="p-4 text-center">
                                        <p className="text-sm font-medium text-slate-900">
                                            No results found.
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Don’t see it? Request the book.
                                        </p>
                                        <Link
                                            href="mailto:gengacamba@gmail.com?subject=Request%20for%20Book"
                                            className="mt-3 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700">
                                            Request via Email
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="max-h-72 overflow-y-auto">
                                        {results.map((book) => (
                                            <Link
                                                key={book.id}
                                                href={`/books/${book.id}`}
                                                className="block px-4 py-3 hover:bg-emerald-50"
                                                onClick={clearSearch}>
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {book.title}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    {book.author}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Nav */}
                    <nav className="flex items-center justify-center gap-2 md:gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-xl px-3 py-2 text-sm transition ${isActive(
                                    link.href,
                                )} ${pathname === link.href ? "bg-emerald-50" : "hover:bg-slate-100"}`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export { Header };
