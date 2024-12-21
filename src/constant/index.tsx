import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"; // Importing icons

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
