"use client";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedBooks } from "@/components/FeaturedBooks";
export default function Home() {
    return (
        <div className="bg-[#f8f6fc] min-h-screen text-gray-800">
            <Hero />
            <Categories />
            <FeaturedBooks />
        </div>
    );
}
