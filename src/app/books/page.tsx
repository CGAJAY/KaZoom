import { AllBooks } from "@/components/books/AllBooks";

const BooksPage = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="px-6 md:px-16 py-12 bg-gradient-to-r from-blue-100 to-blue-200">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                    Explore Our Book Collection
                </h1>
                <p className="text-gray-600 mt-2 text-center">
                    Discover your next favorite read from our curated
                    collection.
                </p>
            </section>

            <AllBooks />
        </main>
    );
};

export default BooksPage;
