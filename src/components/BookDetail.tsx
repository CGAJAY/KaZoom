import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Book } from "@/data/booksData";

interface BookDetailProps {
    book: Book;
}

const BookDetail = ({ book }: BookDetailProps) => {
    return (
        <section className="relative bg-[#fbfbf7] px-6 py-14 md:px-16">
            {/* soft background glow */}
            <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Book Image */}
                <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-emerald-50 ring-1 ring-slate-200 shadow-sm">
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Book Details */}
                <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                        <BookOpen className="h-4 w-4" />
                        Featured Story
                    </div>

                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
                        {book.title}
                    </h1>

                    <p className="text-slate-500 mb-4">by {book.author}</p>

                    <p className="text-slate-600 leading-relaxed mb-8">
                        {book.description ??
                            "No description available for this book yet."}
                    </p>

                    <Link
                        href={`mailto:matthewhiatt30@outlook.com?subject=Requesting "${book.title}"&body=Hello, I would like to request a copy of "${book.title}".`}
                        className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                        Request this Book
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { BookDetail };
