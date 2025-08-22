"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const Header = () => {
    const pathname = usePathname();

    const links = [
        { href: "/about", label: "About" },
        { href: "/shop", label: "Shop" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href: string) =>
        pathname === href
            ? "font-bold text-purple-700 underline underline-offset-4 decoration-purple-700"
            : "hover:text-purple-700";

    return (
        <header className="w-full bg-white shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Top Row: Logo and Nav */}
            <div className="flex items-center justify-between w-full md:w-auto mb-2 md:mb-0">
                <Link href="/" className="text-2xl font-bold text-purple-700">
                    BookShelf
                </Link>
                <nav className="flex gap-6 text-gray-600 md:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={isActive(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-1/2 md:flex items-center justify-center mb-2 md:mb-0">
                <div className="flex w-full overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search books, authors, novels"
                        className="flex-1 p-2 focus:outline-none border border-purple-300 rounded-2xl focus:border-purple-500"
                    />
                    <button className="bg-purple-100 text-black px-4 border border-purple-300 rounded-full ml-2 hover:bg-purple-500 hover:text-white">
                        <Search className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Navigation for desktop */}
            <nav className="hidden md:flex gap-6 text-gray-600">
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
