"use client";

const MissionVision = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
                    Our Mission & Vision
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            To ignite curiosity and creativity in every child by
                            making reading fun, accessible, and full of
                            adventure. KaZoom bridges learning and play through
                            engaging eBooks and interactive stories.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            To become the go-to platform for children worldwide,
                            where imagination meets learning. We envision a
                            world where every child has easy access to stories
                            that educate, entertain, and inspire growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { MissionVision };
