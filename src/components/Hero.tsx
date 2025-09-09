"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#e6f7ff] p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Books That Spark Young Imaginations!
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-blue-700">
                A magical world of kids&apos; eBooks — fun stories, smart
                learning, and endless adventures — all in one place!
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Kids Books / Stories / Learning / Adventures
            </p>
            <Link
                href="/books"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Explore More
            </Link>
        </section>
    );
};

export { Hero };
