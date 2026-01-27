import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Tag, ArrowRight } from "lucide-react";
import { allBooks } from "@/data/booksData";

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ name: string }> | { name: string };
}) {
    // Handle both Promise and normal object
    const resolved = await Promise.resolve(params);
    const categoryName = decodeURIComponent(resolved.name ?? "").trim();

    const books = allBooks.filter(
        (book) =>
            book.category?.toLowerCase().trim() === categoryName.toLowerCase(),
    );

    return (
        <main className="min-h-screen bg-[#fbfbf7]">
            {/* Header */}
            <section className="relative overflow-hidden px-6 py-14 md:px-16 md:py-18">
                <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
                        <ArrowLeft className="h-4 w-4" />
                        Back to categories
                    </Link>

                    <div className="mt-6">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                            <Tag className="h-4 w-4" />
                            Category
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                            {categoryName || "Category"}
                        </h1>

                        <p className="mt-3 text-slate-600 max-w-2xl">
                            Explore all books under{" "}
                            <span className="font-semibold">
                                {categoryName}
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="px-6 pb-14 md:px-16 md:pb-20">
                <div className="mx-auto max-w-6xl">
                    {books.length === 0 ? (
                        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                            <p className="text-lg font-semibold text-slate-900">
                                No books found in this category.
                            </p>
                            <p className="mt-2 text-slate-600">
                                Try another category or browse all books.
                            </p>
                            <div className="mt-6 flex justify-center">
                                <Link
                                    href="/books"
                                    className="rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition">
                                    View All Books
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {books.map(({ id, title, author, image }) => (
                                <Link
                                    key={id}
                                    href={`/books/${id}`}
                                    className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                    <div className="relative overflow-hidden rounded-2xl bg-emerald-50">
                                        <div className="h-44 w-full">
                                            <Image
                                                src={image}
                                                alt={title}
                                                width={500}
                                                height={700}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                            />
                                        </div>
                                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-200/60" />
                                    </div>

                                    <div className="mt-4">
                                        <p className="line-clamp-1 text-sm font-extrabold text-slate-900">
                                            {title}
                                        </p>
                                        <p className="mt-1 line-clamp-1 text-xs font-medium text-slate-500">
                                            {author}
                                        </p>

                                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                                            View details
                                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
