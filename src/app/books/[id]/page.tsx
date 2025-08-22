import { allBooks } from "@/data/booksData";
import { BookDetail } from "@/components/BookDetail";

export default async function BookPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params; // Await the params object
    const book = allBooks.find((b) => b.id.toString() === id);

    if (!book) {
        return (
            <div className="px-6 py-12 text-center">
                <h1 className="text-2xl font-bold">Book not found</h1>
            </div>
        );
    }

    return <BookDetail book={book} />;
}
