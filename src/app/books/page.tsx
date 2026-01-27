import { AllBooks } from "@/components/books/AllBooks";

const BooksPage = () => {
    return (
        <main className="min-h-screen bg-[#fbfbf7]">
            <section className="relative overflow-hidden px-6 md:px-16 py-14 md:py-18">
                {/* soft glow */}
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />

                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                        📚 ShelfSpark Library
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Explore Our Book Collection
                    </h1>

                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Discover fun stories, learning adventures, and books
                        kids can&apos;t stop talking about — curated for curious
                        young minds.
                    </p>
                </div>
            </section>

            <AllBooks />
        </main>
    );
};

export default BooksPage;
