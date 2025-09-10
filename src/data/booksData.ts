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
    {
        id: 11,
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        category: "Classic",
        image: "/wild-things.jpeg",
        description:
            "Max’s wild imagination takes him to the land of the Wild Things, where he becomes king.",
        downloadLink: "#",
    },
    {
        id: 12,
        title: "Goodnight Moon",
        author: "Margaret Wise Brown",
        category: "Picture Book",
        image: "/goodnight-moon.jpeg",
        description:
            "A soothing bedtime story that has lulled generations of children to sleep.",
        downloadLink: "#",
    },
    {
        id: 13,
        title: "Green Eggs and Ham",
        author: "Dr. Seuss",
        category: "Early Readers",
        image: "/green-eggs.jpeg",
        description:
            "Sam-I-Am is determined to get his friend to try green eggs and ham in this fun rhyming classic.",
        downloadLink: "#",
    },
    {
        id: 14,
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        category: "Picture Book",
        image: "/hungry-caterpillar.jpeg",
        description:
            "Follow a tiny caterpillar as he eats his way through the week and transforms into a butterfly.",
        downloadLink: "#",
    },
    {
        id: 15,
        title: "Winnie-the-Pooh",
        author: "A.A. Milne",
        category: "Classic",
        image: "/winnie-pooh.jpeg",
        description:
            "Join Pooh, Piglet, Tigger, and friends in the Hundred Acre Wood for timeless adventures.",
        downloadLink: "#",
    },
    {
        id: 16,
        title: "Harry Potter and the Sorcerer’s Stone",
        author: "J.K. Rowling",
        category: "Fantasy",
        image: "/harry-potter.jpeg",
        description:
            "The beginning of the magical journey of Harry Potter at Hogwarts School of Witchcraft and Wizardry.",
        downloadLink: "#",
    },
    {
        id: 17,
        title: "The Cat in the Hat",
        author: "Dr. Seuss",
        category: "Humor",
        image: "/cat-in-hat.png",
        description:
            "A mischievous cat brings chaos and fun on a rainy day in this rhyming adventure.",
        downloadLink: "#",
    },
    {
        id: 18,
        title: "Charlie and the Chocolate Factory",
        author: "Roald Dahl",
        category: "Fantasy",
        image: "/chocolate-factory.jpeg",
        description:
            "Charlie Bucket wins a golden ticket to explore Willy Wonka’s magical chocolate factory.",
        downloadLink: "#",
    },
    {
        id: 19,
        title: "Coraline",
        author: "Neil Gaiman",
        category: "Fantasy",
        image: "/coraline.jpeg",
        description:
            "Coraline discovers a mysterious alternate world where things aren’t as perfect as they seem.",
        downloadLink: "#",
    },
    {
        id: 20,
        title: "Percy Jackson and the Lightning Thief",
        author: "Rick Riordan",
        category: "Adventure",
        image: "/percy-jackson.jpeg",
        description:
            "Percy discovers he is the son of Poseidon and must recover Zeus’s stolen lightning bolt.",
        downloadLink: "#",
    },
];
