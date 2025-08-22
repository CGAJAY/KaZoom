import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
export default function Home() {
    return (
        <div className="bg-[#f8f6fc] min-h-screen text-gray-800">
            <Header />
            <Hero />
            {/* <Categories /> */}
            {/* <FeaturedBooks /> */}
            {/* <Footer /> */}
        </div>
    );
}
