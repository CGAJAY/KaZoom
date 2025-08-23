"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { allBooks } from "@/data/booksData";
import type { Book } from "@/data/booksData"; // <-- Import Book type

const Header = () => {
    const pathname = usePathname();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Book[] | null>(null);

    const links = [
        { href: "/about", label: "About" },
        { href: "/books", label: "Books" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href: string) =>
        pathname === href
            ? "font-bold text-purple-700 underline underline-offset-4 decoration-purple-700"
            : "hover:text-purple-700";

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        if (value.length > 1) {
            const filtered = allBooks.filter(
                (book) =>
                    book.title.toLowerCase().includes(value) ||
                    book.author.toLowerCase().includes(value)
            );
            setResults(filtered.length > 0 ? filtered : []);
        } else {
            setResults(null);
        }
    };

    return (
        <header className="relative w-full bg-white shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between w-full md:w-auto mb-2 md:mb-0">
                <Link href="/" className="text-2xl font-bold text-purple-700">
                    Ebook Masters
                </Link>
            </div>

            <div className="w-full md:w-1/2 relative mb-3 md:mb-0">
                <div className="flex w-full">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search books, authors, novels"
                        className="flex-1 p-2 focus:outline-none border border-purple-300 rounded-2xl focus:border-purple-500"
                    />
                    <button className="bg-purple-100 text-black px-4 border border-purple-300 rounded-full ml-2 hover:bg-purple-500 hover:text-white">
                        <Search className="w-4 h-4" />
                    </button>
                </div>

                {results !== null && (
                    <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-full z-50 max-h-60 overflow-y-auto">
                        {results.length === 0 ? (
                            <div className="p-4 text-center text-gray-600">
                                <p>No book found.</p>
                                <Link
                                    href="mailto:gengacamba@gmail.com?subject=Request%20for%20Book"
                                    className="text-purple-700 underline">
                                    Contact us to request this book
                                </Link>
                            </div>
                        ) : (
                            results.map((book) => (
                                <Link
                                    key={book.id}
                                    href={`/books/${book.id}`}
                                    className="block px-4 py-2 hover:bg-purple-50">
                                    <p className="font-semibold">
                                        {book.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {book.author}
                                    </p>
                                </Link>
                            ))
                        )}
                    </div>
                )}
            </div>

            {/* Navigation - now always visible, stacked on small screens */}
            <nav className="flex justify-center  md:flex-row gap-4 md:gap-6 text-gray-600">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={isActive(link.href)}>
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export { Header };
