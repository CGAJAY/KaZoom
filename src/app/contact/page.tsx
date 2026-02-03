"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section className="relative overflow-hidden bg-[#fbfbf7] py-20 px-6 md:px-12">
            {/* background glow */}
            <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative max-w-6xl mx-auto text-center space-y-16">
                {/* Heading */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Get in Touch with{" "}
                        <span className="text-emerald-700">ShelfSpark</span>
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Questions about our stories or need help getting
                        started? We’re here to make your child’s reading journey
                        joyful and easy.
                    </p>
                </div>

                {/* Contact Row 1 */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Mail className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900">
                            Email
                        </h3>
                        <p className="text-slate-600 mt-2">
                            laynales@gmail.com
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Phone className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900">
                            Phone
                        </h3>
                        <p className="text-slate-600 mt-2">+254 712 800 431</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <MapPin className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900">
                            Address
                        </h3>
                        <p className="text-slate-600 mt-2">
                            12524 GAKERE RD AMANI, <br />
                            COURT HSE NO B70
                        </p>
                    </div>
                </div>

                {/* Contact Row 2 */}
                {/* <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Mail className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900">
                            Email
                        </h3>
                        <p className="text-slate-600 mt-2">
                            matthewhiatt30@outlook.com
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <Phone className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900">
                            Phone
                        </h3>
                        <p className="text-slate-600 mt-2">+1 217-617-3120</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
                        <MapPin className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900">
                            Address
                        </h3>
                        <p className="text-slate-600 mt-2">
                            1201 N KENNEDY DRIVE, <br />
                            PONTIAC, IL 61764, USA
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Contact;
