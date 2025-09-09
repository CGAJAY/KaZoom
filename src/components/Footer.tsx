import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-blue-200 px-6 py-12 md:px-16 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h4 className="font-bold mb-2">Ebook Masters</h4>
                    <p>
                        Your trusted online library. Discover thousands of
                        EBooks at your fingertips.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Quick Links</h4>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/books">Books</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Contact</h4>
                    <ul className="space-y-1">
                        <li>
                            <a href="mailto:joycembizi79@gmail.com">
                                joycembizi79@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+254712800431">254 105026746</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center border-t border-gray-300 pt-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} Ebook Masters. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export { Footer };
