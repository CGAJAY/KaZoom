"use client";

const MissionVision = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
                    Our Mission & Vision
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            To spark curiosity, creativity, and confidence in
                            every child by making reading feel like an
                            adventure. ShelfSpark blends storytelling and
                            learning so kids grow while having fun.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                            Our Vision
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            To build a world where every child has access to
                            inspiring, safe, and meaningful stories — helping
                            them imagine bigger, learn faster, and grow into
                            thoughtful individuals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { MissionVision };
