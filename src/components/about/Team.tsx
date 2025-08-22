"use client";

import Image from "next/image";

const Team = () => {
    const teamMembers = [
        {
            name: "Kelvin Njue",
            role: "Chief Visionary Officer",
            img: "/kelvin.jpg",
        },
        { name: "Sarah Lee", role: "Content Strategist", img: "/sarah.jpg" },
        {
            name: "Mark Smith",
            role: "Principal Engineer",
            img: "/potrait.jpg",
        },
    ];

    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center space-y-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    The Minds Behind Ebook Masters
                </h2>
                <p className="max-w-2xl mx-auto text-gray-700">
                    Our passionate team brings together expertise in technology,
                    publishing, and digital experiences to deliver an
                    ever-growing library of inspiration.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={112}
                                    height={112}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Team };
