import Link from "next/link";
import Image from "next/image";
import { allBooks } from "@/data/booksData";

export default function CategoryPage({ params }: { params: { name: string } }) {
    const categoryName = decodeURIComponent(params.name);
    const books = allBooks.filter(
        (book) => book.category?.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <section className="px-6 py-12 md:px-16 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                Category: {categoryName}
            </h1>
            {books.length === 0 ? (
                <p className="text-gray-600">
                    No books available in this category.
                </p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {books.map(({ id, title, author, image }) => (
                        <Link
                            key={id}
                            href={`/books/${id}`}
                            className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-4 flex flex-col items-center text-center hover:ring-purple-400 transition">
                            <div className="h-40 w-28 md:h-44 md:w-32 mb-3 overflow-hidden rounded-lg">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={128}
                                    height={176}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <p className="font-semibold text-gray-800 text-sm md:text-base">
                                {title}
                            </p>
                            <p className="text-xs text-gray-500">{author}</p>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
