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
        title: "The Magic Treehouse",
        author: "Mary Pope Osborne",
        category: "Adventure",
        image: "/magic-treehouse.jpeg",
        description:
            "Join Jack and Annie as they travel through time in their magical treehouse.",
        downloadLink: "#",
    },
    {
        id: 2,
        title: "Pete the Cat and His Four Groovy Buttons",
        author: "James Dean",
        category: "Early Readers",
        image: "/pete-cat.jpeg",
        description:
            "Pete the Cat loves his four groovy buttons – until they pop off one by one!",
        downloadLink: "#",
    },
    {
        id: 3,
        title: "The Day the Crayons Quit",
        author: "Drew Daywalt",
        category: "Humor",
        image: "/crayons-quit.jpeg",
        description:
            "A hilarious story of crayons going on strike and leaving colorful complaints.",
        downloadLink: "#",
    },
    {
        id: 4,
        title: "The Pigeon Wants a Puppy!",
        author: "Mo Willems",
        category: "Picture Book",
        image: "/pigeon-puppy.jpeg",
        description:
            "The pigeon thinks he wants a puppy… but is he ready for the responsibility?",
        downloadLink: "#",
    },
    {
        id: 5,
        title: "Dog Man: A Tale of Two Kitties",
        author: "Dav Pilkey",
        category: "Comics & Graphic Novels",
        image: "/dog-man.jpeg",
        description:
            "Dog Man is back with a hilarious and heroic adventure to save the day!",
        downloadLink: "#",
    },
    {
        id: 6,
        title: "Charlotte’s Web",
        author: "E.B. White",
        category: "Classic",
        image: "/charlottes-web.jpeg",
        description:
            "The timeless story of friendship between a pig named Wilbur and a wise spider, Charlotte.",
        downloadLink: "#",
    },
    {
        id: 7,
        title: "The Bad Guys",
        author: "Aaron Blabey",
        category: "Comedy",
        image: "/bad-guys.jpeg",
        description:
            "They look like bad guys, but can they turn good? Hilarious adventures await!",
        downloadLink: "#",
    },
    {
        id: 8,
        title: "Captain Underpants",
        author: "Dav Pilkey",
        category: "Comedy",
        image: "/captain-underpants.jpeg",
        description:
            "Follow George and Harold as they unleash their underwear-clad superhero.",
        downloadLink: "#",
    },
    {
        id: 9,
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        category: "Middle Grade",
        image: "/wimpy-kid.jpeg",
        description:
            "Greg Heffley chronicles the misadventures of his awkward middle school life.",
        downloadLink: "#",
    },
    {
        id: 10,
        title: "Matilda",
        author: "Roald Dahl",
        category: "Fantasy",
        image: "/matilda.jpeg",
        description:
            "Meet Matilda, a brilliant little girl with a love of reading and a touch of magic.",
        downloadLink: "#",
    },
];
