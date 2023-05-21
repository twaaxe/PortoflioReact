import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


//liste des services que je propose

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React  Developer",
        icon: mobile,
    },
    {
        title: "UX Design",
        icon: backend,
    }

];


//technologies acquises
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Vite",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "MySql",
        icon: docker,
    },
];

//experiences professionelles
{/*const experiences = [
    {
        title: "Etudes de Technologie de l'Informatique",
        company_name: "Ephec Louvain-La-Neuve",
        icon: starbucks,
        iconBg: "#383E56",
        date: "2016-2017",
        points: [
            "Conception de sites Web (débutant; HTML, CSS)",
            "Infrastructure réseau de base",
            "Introduction aux base de données et aux système de gestion de base de données",
        ],
    },
    {
        title: " Formation HTML5 et CSS3",
        company_name: "OpenClassrooms",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Aout 2020",
        points: [
            "Structurer une page web en HTML",
            "Mettre en forme et organiser les éléments d' une page web en CSS",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Adapter une page pour la rendre responsive",
        ],
    },
    {
        title: "Formation développeur web",
        company_name: "Udemy",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Fevrier 2021",
        points: [
            "Conception de sites web",
            "Dynamisation de sites web (JavaScript, Jquery)",
            "Framework (Bootsrtap, Bootsnipp) ",
            "WordPress",
            "Mise en relation d'un site web avec une base de données "
        ],
    },
    {
        title: "Web Developer",
        company_name: "INTEC Bruxelles",
        icon: shopify,
        iconBg: "#383E56",
        date: "2022-2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];*/}

const experiences = [
    {
        title: "Web Developer",
        company_name: "INTEC Brussels",
        icon: shopify,
        iconBg: "#383E56",
        date: "2022-2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
            "Implementing responsive design and ensuring cross-browser compatibility",
            "Participating in code reviews and providing constructive feedback to other developers",
        ],
    },
    {
        title: "Web Developer Training",
        company_name: "Udemy",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "February 2021",
        points: [
            "Web design",
            "Dynamic web development (JavaScript, jQuery)",
            "Frameworks (Bootstrap, Bootsnipp)",
            "WordPress",
            "Connecting a website to a database",
        ],
    },
    {
        title: "HTML5 and CSS3 Training",
        company_name: "OpenClassrooms",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "August 2020",
        points: [
            "Structuring a web page in HTML",
            "Styling and organizing elements of a web page in CSS",
            "Implementing responsive design and ensuring cross-browser compatibility",
            "Adapting a page to make it responsive",
        ],
    },
    {
        title: "Computer Technology Studies",
        company_name: "Ephec Louvain-La-Neuve",
        icon: starbucks,
        iconBg: "#383E56",
        date: "2016-2017",
        points: [
            "Web design (beginner; HTML, CSS)",
            "Basic network infrastructure",
            "Introduction to databases and database management systems",
        ],
    },
];


const testimonials = [
    {
        testimonial:
            "Nothing to render yet",
        name: "...",
        designation: "...",
        company: "...",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    }
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };