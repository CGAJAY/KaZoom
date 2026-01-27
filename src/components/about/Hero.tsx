"use client";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#fbfbf7] py-20 px-6 md:px-12">
            {/* soft background glow */}
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative max-w-6xl mx-auto text-center md:text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                    Welcome to{" "}
                    <span className="text-emerald-700">ShelfSpark</span>
                    {" — "}Where Stories Help Young Minds Grow
                </h1>

                <p className="text-lg text-slate-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">
                    ShelfSpark is a joyful digital library designed for kids —
                    blending imagination, learning, and adventure into stories
                    they love. We make reading exciting, safe, and meaningful
                    anytime, anywhere.
                </p>
            </div>
        </section>
    );
};

export { Hero };
