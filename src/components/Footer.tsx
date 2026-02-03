import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-900 px-6 py-12 md:px-16 text-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Brand Info */}
                <div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                        Shelf<span className="text-emerald-400">Spark</span>
                    </h4>
                    <p className="text-slate-400">
                        A joyful digital library where stories spark
                        imagination, learning feels like play, and young minds
                        grow through magical reading adventures.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                        Quick Links
                    </h4>
                    <ul className="space-y-1 text-slate-400">
                        <li>
                            <Link href="/" className="hover:text-emerald-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-emerald-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/books"
                                className="hover:text-emerald-400">
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-emerald-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                        Contact
                    </h4>
                    <ul className="space-y-1 text-slate-400">
                        <li>
                            <a
                                href="mailto:matthewhiatt30@outlook.com"
                                className="hover:text-emerald-400">
                                laynales@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+12176173120"
                                className="hover:text-emerald-400">
                                +1 217-617-3120
                            </a>
                        </li>
                        <li>
                            12524 GAKERE RD AMANI, <br />
                            COURT HSE NO B70
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center border-t border-slate-700 pt-4">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} ShelfSpark. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export { Footer };
