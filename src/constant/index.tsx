import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"; // Importing icons

export type MenuItem = {
  id: number;
  image: string;
  category1: string;
  gallery: [];
};

// Static data outside of component to avoid unnecessary re-creation on each render
export const Menu: MenuItem[] = [
  {
    id: 1,
    image: "1.png",
    category1: "ad-films",
    gallery: ["15.png", "16.png", "17.png", "18.png"],
  },
  {
    id: 2,
    image: "music1.jpg",
    category1: "music-videos",
    gallery: ["1-1.jpg", "1.png", "2-1.jpg"],
  },
  {
    id: 3,
    image: "7.png",
    category1: "short-films",
    gallery: ["1-1.jpg", "1.png", "2-1.jpg"],
  },
  {
    id: 4,
    image: "web2.jpg",
    category1: "web-shows",
    gallery: ["1-1.jpg", "1.png", "2-1.jpg"],
  },
  {
    id: 5,
    image: "talk1.jpg",
    category1: "talk-shows",
    gallery: ["11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg"],
  },
  {
    id: 6,
    image: "docs-1.png",
    category1: "Documentaries",
    gallery: ["19.png", "20.png", "21.png", "22.png"],
  },
  {
    id: 7,
    image: "movie1.jpg",
    category1: "movies",
    gallery: ["23.jpeg", "24.jpeg", "25.jpeg", "26.jped"],
  },
];


export const data = [
  {
    id: 1,
    image: "1-1.webp", // Assuming images are inside the 'public/images' folder
    link: "https://www.sensationzperformingarts.com/",
    name: "Performing and Arts",
    screenshot: "arts.png", // Assuming screenshots are in the 'public/images' folder
  },
  {
    id: 2,
    image: "2-1.webp",
    link: "https://sensationzdigital.com/",
    name: "Sensationz Digital",
    screenshot: "digital.png",
  },
  {
    id: 3,
    image: "3-1.webp",
    link: "https://thebollywoodfaces.com/",
    name: "The Bollywood Faces",
    screenshot: "bollywoodfaces.png",
  },
  {
    id: 4,
    image: "4-1.webp",
    link: "https://sensationzproductions.com/",
    name: "Sensationz Production",
    screenshot: "production.png",
  },
];

export const navItems = [
  {
    name: "Home",
    link: "home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },

  {
    name: "Experience",
    link: "experience",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },

  {
    name: "Portfolio",
    link: "portfolio",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
