import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-blue-600 px-6 py-12 md:px-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Brand Info */}
                <div>
                    <h4 className="font-bold text-xl mb-2">
                        KaZoom Kids Books, Inc
                    </h4>
                    <p className="text-blue-100">
                        Inspiring young imaginations with fun, learning, and
                        endless adventures — one eBook at a time.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-xl mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-blue-100">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/books" className="hover:underline">
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-bold text-xl mb-2">Contact</h4>
                    <ul className="space-y-1 text-blue-100">
                        <li>
                            <a
                                href="mailto:matthewhiatt30@outlook.com"
                                className="hover:underline">
                                matthewhiatt30@outlook.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+12176173120"
                                className="hover:underline">
                                +1 217-617-3120
                            </a>
                        </li>
                        <li>
                            1201 N KENNEDY DRIVE, <br />
                            PONTIAC, IL 61764, USA
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center border-t border-blue-400 pt-4">
                <p className="text-sm text-blue-100">
                    © {new Date().getFullYear()} KaZoom Kids Books, Inc. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export { Footer };
