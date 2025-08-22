"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#f1ebf9] p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Choose Your Brain Food
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-purple-700">
                Discover thousands of e-books at your fingertips. Read, learn,
                and grow anytime, anywhere with our online library.
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Business / Health & Beauty / History / Novel
            </p>
            <Link
                href="/shop"
                className="inline-block mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                Explore More
            </Link>
        </section>
    );
};

export { Hero };
