"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center space-y-10">
                {/* Heading */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                        Have a request or need assistance with an eBook? We’re
                        here to help you find exactly what you’re looking for!
                    </p>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Mail className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Email
                        </h3>
                        <p className="text-gray-700 mt-2">
                            gengacamba@gmail.com
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Phone className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Phone
                        </h3>
                        <p className="text-gray-700 mt-2">+254 105026746</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <MapPin className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Address
                        </h3>
                        <p className="text-gray-700 mt-2">
                            Kelvin Njue, Sea wave plaza, <br />
                            Malindi Road, Mtwapa, 80109, Kenya
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
