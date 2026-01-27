"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#fbfbf7] px-6 py-16 md:py-24">
            {/* subtle background glow */}
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative mx-auto max-w-5xl text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                    ✨ Stories Kids Love
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
                    Where Young Minds{" "}
                    <span className="text-emerald-700">Discover Magic</span>{" "}
                    Through Books
                </h1>

                {/* Subtext */}
                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
                    Fun stories, smart learning, and exciting adventures — all
                    in one safe and delightful digital library built just for
                    kids.
                </p>

                {/* Tags */}
                <p className="mt-4 text-sm font-medium text-slate-500">
                    Stories • Learning • Imagination • Growth
                </p>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/books"
                        className="rounded-2xl bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                        Explore Books
                    </Link>

                    <Link
                        href="/categories"
                        className="rounded-2xl border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                        Browse Categories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { Hero };
