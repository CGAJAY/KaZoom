import { allBooks } from "@/data/booksData";
import { BookDetail } from "@/components/BookDetail";

export default async function BookPage({
    params,
}: {
    params: { id: string } | Promise<{ id: string }>;
}) {
    const resolved = await Promise.resolve(params);
    const id = decodeURIComponent(resolved.id).trim();

    const book = allBooks.find((b) => String(b.id) === id);

    if (!book) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-[#fbfbf7] px-6">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Book not found
                    </h1>
                    <p className="text-slate-600">
                        The story you're looking for may have moved or doesn’t
                        exist.
                    </p>
                    <p className="text-xs text-slate-500">Requested ID: {id}</p>
                </div>
            </section>
        );
    }

    return <BookDetail book={book} />;
}
