"use client";

const MissionVision = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
                    What Drives Us Forward
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            We aim to simplify access to quality reading
                            material for learners, researchers, and enthusiasts,
                            bridging the gap between curiosity and
                            transformation.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            To redefine how the world interacts with books by
                            creating an ecosystem where knowledge is shared,
                            creativity is nurtured, and every reader feels at
                            home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { MissionVision };
