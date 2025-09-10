"use client";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        Welcome to{" "}
                        <span className=" font-bold text-blue-400">
                            Ka<span className="text-blue-800">Zoom</span>
                        </span>
                        {": "}A World of Kids’ Imagination
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        KaZoom brings stories, learning, and fun together.
                        Explore a magical collection of eBooks crafted to
                        inspire young minds and spark curiosity—anytime,
                        anywhere!
                    </p>
                </div>
            </div>
        </section>
    );
};

export { Hero };
