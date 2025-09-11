"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center space-y-16">
                {/* Heading */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Get in Touch with{" "}
                        <span className=" font-bold text-blue-400">
                            Ka<span className="text-blue-800">Zoom</span>
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                        Have a question or need help with our kids’ eBooks?
                        We’re here to guide you every step of the way!
                    </p>
                </div>

                {/* Contact Row 1 */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm py-8 hover:shadow-lg transition">
                        <Mail className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Email
                        </h3>
                        <p className="text-gray-700 mt-2">
                            gengacamba@gmail.com
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Phone className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Phone
                        </h3>
                        <p className="text-gray-700 mt-2">+254 712 800 431</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <MapPin className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Address
                        </h3>
                        <p className="text-gray-700 mt-2">
                            Kelvin Njue 2nd House, <br />
                            Muthatari Road, Embu, 60100, Kenya
                        </p>
                    </div>
                </div>

                {/* Contact Row 2 */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm py-8 hover:shadow-lg transition">
                        <Mail className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Email
                        </h3>
                        <p className="text-gray-700 mt-2">
                            matthewhiatt30@outlook.com
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Phone className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Phone
                        </h3>
                        <p className="text-gray-700 mt-2">+1 217-617-3120</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <MapPin className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Address
                        </h3>
                        <p className="text-gray-700 mt-2">
                            1201 N KENNEDY DRIVE, <br />
                            PONTIAC, IL 61764, USA
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
