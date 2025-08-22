export interface Book {
    id: number;
    title: string;
    author: string;
    category: string;
    image: string;
    description: string;
    downloadLink: string;
}

export const allBooks: Book[] = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        image: "/atomic.webp",
        description:
            "A revolutionary guide to building good habits and breaking bad ones.",
        downloadLink: "#",
    },
    {
        id: 2,
        title: "Deep Work",
        author: "Cal Newport",
        category: "Productivity",
        image: "/deep.jpeg",
        description:
            "Learn how to focus without distraction to produce high-quality work.",
        downloadLink: "#",
    },
    {
        id: 3,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        category: "Spiritual",
        image: "/now.jpeg",
        description: "Unlock the power of living in the present moment.",
        downloadLink: "#",
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        image: "/rich.jpeg",
        description:
            "Discover the difference between working for money and making money work for you.",
        downloadLink: "#",
    },
    {
        id: 5,
        title: "Educated",
        author: "Tara Westover",
        category: "Biography",
        image: "/educated.jpeg",
        description:
            "A memoir about a young woman who grows up in a survivalist family and seeks education.",
        downloadLink: "#",
    },
    {
        id: 6,
        title: "Thinking Fast and Slow",
        author: "Daniel Kahneman",
        category: "Psychology",
        image: "/thinking.jpeg",
        description: "Understand the two systems that drive the way we think.",
        downloadLink: "#",
    },
    {
        id: 7,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        category: "Self-Help",
        image: "/subtle.jpeg",
        description:
            "A counterintuitive approach to living a good life by caring less.",
        downloadLink: "#",
    },
    {
        id: 8,
        title: "Start With Why",
        author: "Simon Sinek",
        category: "Leadership",
        image: "/why.jpeg",
        description:
            "Learn why some people and organizations are more innovative and successful than others.",
        downloadLink: "#",
    },
    {
        id: 9,
        title: "Can't Hurt Me",
        author: "David Goggins",
        category: "Motivation",
        image: "/goggins.jpeg",
        description:
            "Master your mind and defy the odds with lessons from an ex-Navy SEAL.",
        downloadLink: "#",
    },
    {
        id: 10,
        title: "The 4-Hour Work Week",
        author: "Tim Ferriss",
        category: "Business",
        image: "/4hour.jpeg",
        description: "Escape the 9-5, live anywhere, and join the new rich.",
        downloadLink: "#",
    },
    {
        id: 11,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        category: "History",
        image: "/sapiens.jpeg",
        description:
            "Explore the history of humankind from the Stone Age to the modern era.",
        downloadLink: "#",
    },
    {
        id: 12,
        title: "Dune",
        author: "Frank Herbert",
        category: "Science Fiction",
        image: "/dune.jpeg",
        description:
            "An epic science fiction saga set on the desert planet Arrakis.",
        downloadLink: "#",
    },
    {
        id: 13,
        title: "The Lean Startup",
        author: "Eric Ries",
        category: "Business",
        image: "/lean.jpeg",
        description:
            "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
        downloadLink: "#",
    },
    {
        id: 14,
        title: "Zero to One",
        author: "Peter Thiel",
        category: "Startup",
        image: "/zero.png",
        description: "Notes on startups, or how to build the future.",
        downloadLink: "#",
    },
    {
        id: 15,
        title: "The Intelligent Investor",
        author: "Benjamin Graham",
        category: "Finance",
        image: "/investor.png",
        description: "The definitive book on value investing.",
        downloadLink: "#",
    },
    {
        id: 16,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        category: "Biography",
        image: "/jobs.jpeg",
        description: "A biography of the iconic Apple co-founder.",
        downloadLink: "#",
    },
    {
        id: 17,
        title: "Meditations",
        author: "Marcus Aurelius",
        category: "Philosophy",
        image: "/meditations.jpeg",
        description:
            "Thoughts and ideas from the Roman emperor on life and virtue.",
        downloadLink: "#",
    },
    {
        id: 18,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        category: "Psychology",
        image: "/meaning.jpeg",
        description:
            "An exploration of purpose and survival during the Holocaust.",
        downloadLink: "#",
    },
    {
        id: 19,
        title: "Hooked",
        author: "Nir Eyal",
        category: "Product Design",
        image: "/hooked.png",
        description:
            "How to build habit-forming products that keep users engaged.",
        downloadLink: "#",
    },
    {
        id: 20,
        title: "The Art of War",
        author: "Sun Tzu",
        category: "Strategy",
        image: "/artofwar.jpeg",
        description:
            "Classic strategies for warfare, leadership, and business.",
        downloadLink: "#",
    },
];
