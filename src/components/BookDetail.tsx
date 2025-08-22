import Image from "next/image";
import Link from "next/link";
import { Book } from "@/data/booksData";

interface BookDetailProps {
    book: Book;
}

const BookDetail = ({ book }: BookDetailProps) => {
    return (
        <section className="px-6 py-12 md:px-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Book Image */}
                <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden border-2 border-purple-400">
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw "
                    />
                </div>

                {/* Book Details */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-3">{book.title}</h1>
                    <p className="text-gray-600 mb-3">by {book.author}</p>
                    <p className="text-gray-700 mb-6">
                        {book.description ?? "No description available."}
                    </p>
                    <Link
                        href={`mailto:gengacamba@gmail.com?subject=Requesting "${book.title}"&body=Hello, I would like to request a copy of "${book.title}".`}
                        className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition text-center w-fit">
                        Request this Book
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { BookDetail };
