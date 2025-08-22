"use client";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 text-center">
                        Discover, Learn & Grow with Ebook Masters
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Dive into a collection of curated digital books designed
                        to inspire, educate, and connect readers globally.
                        Experience seamless access to knowledge—anytime,
                        anywhere.
                    </p>
                </div>
            </div>
        </section>
    );
};

export { Hero };
