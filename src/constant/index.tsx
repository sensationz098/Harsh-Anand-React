import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"; // Importing icons

export type MenuItem = {
  id: number;
  image: string;
  category1: string;
  gallery: string[];
  heading: string;
  content: string;
};

// Static data outside of component to avoid unnecessary re-creation on each render
export const Menu: MenuItem[] = [
  {
    id: 0,
    image: "",
    category1: "All",
    gallery: [""],
    heading: "",
    content: "",
  },
  {
    id: 1,
    image: "1.png",
    category1: "Ad Films",
    gallery: ["15.png", "16.png", "17.png", "18.png"],
    heading: "Ad Films Directed by Me",
    content:
      "I have directed ad films that combine creativity with brand messaging to leave a lasting impact. My approach focuses on storytelling that resonates with audiences while aligning with the client’s vision. Through each project, I strive to create visually compelling and memorable advertisements.",
  },
  {
    id: 2,
    image: "music1.jpg",
    category1: "Music",
    gallery: ["23.jpg", "24.jpg", "25.jpg", "26.jpg", "nit.jpg", ""],
    heading: "Music Videos Directed by Me",
    content:
      "I have directed documentaries for CORD, including Bal Vihar, Disability, Social Injustice, and Changing Women Lives. Each project focuses on raising awareness about social challenges and the power of community-driven change. My goal is to spotlight inspiring stories that drive meaningful impact.",
  },
  {
    id: 3,
    image: "7.png",
    category1: "Short Films",
    gallery: [
      "51.jpg",
      "50.png",
      "52.jpg",
      "53.jpg",
      "54.jpg",
      "55.jpg",
      "56.jpg",
      "57.jpg",
      "exp.jpg",
      "ank.jpg",
      "pres.jpg",
      "ghar.png",
    ],
    heading: "Short Films Directed by Me",
    content:
      "Explore diverse human experiences with nuanced storytelling. *Avaidh* stars Hitesh Tejwani, while *A Night in a Lockdown* features Gulshan Pandey. *Deserved* with Manoj Bakshi and *Ab Yeh Hi Mera Ghar Hai* starring Banwari Lal Jhol delve into themes of identity, struggle, and acceptance.",
  },
  {
    id: 4,
    image: "web2.jpg",
    category1: "Web Shows",
    gallery: ["112.jpg", "web2.jpg"],
    heading: "Web Series Directed by Me",
    content:
      "Directed web series like Love Lust Loyalty and Pre Wedding Honeymoon. My storytelling delves into the complexities of relationships, emotions, and personal journeys. I strive to create engaging narratives that connect with audiences more deeply.",
  },
  {
    id: 5,
    image: "talk1.jpg",
    category1: "Talk Shows",
    gallery: ["11.jpg", "12.jpg", "13.jpg", "14.jpg"],
    heading: "Talk Shows Directed by Me",
    content:
      "I have directed talk shows that foster engaging conversations on diverse topics. I focus on creating dynamic content that resonates with audiences while highlighting thought-provoking insights. Each talk show aims to inspire dialogue and connect people through meaningful discussions.",
  },
  {
    id: 6,
    image: "docs-1.png",
    category1: "Documentaries",
    gallery: ["19.png", "20.png", "21.png", "22.png"],
    heading: "Documentaries Directed by Me",
    content:
      "I have directed documentaries for CORD, including Bal Vihar, Disability, Social Injustice, and Changing Women Lives. Each project focuses on raising awareness about social challenges and the power of community-driven change. My goal is to spotlight inspiring stories that drive meaningful impact.",
  },

  {
    id: 7,
    image: "media4.png",
    category1: "Media",
    gallery: ["media.png", "media2.png", "media3.png", "media4.png"],
    heading: "Media Coverage",
    content:
      "My work has received recognition across various media platforms, with features and reviews highlighting the impact and relevance of my projects. It’s rewarding to see how my storytelling resonates with both audiences and critics.",
  },
  {
    id: 8,
    image: "movie1.jpg",
    category1: "Movies",
    gallery: ["movie1.jpg"],
    heading: "Movies Directed by Me",
    content:
      "I directed the feature film Love and Rajniti starring Ravi Kishan. My work focuses on blending powerful storytelling with complex emotions and real-world themes. I strive to create impactful cinema that resonates with audiences on multiple levels.",
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
