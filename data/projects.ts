import { StaticImageData } from "next/image";
import oldPortfolio from "../public/images/old-portfolio.png";
import aiDiscussion from "../public/images/ai-discussion.png";
import xcamper from "../public/images/xcamper.png";
import neckermann from "../public/images/neckermann.png";

type Project = {
  name: string;
  image?: StaticImageData;
  description: string;
  technologies: string[];
  code_link?: string;
  demo_link?: string;
  in_progress?: boolean;
  type?: "Professional" | "Personal";
};

export const projects: Project[] = [
  {
    name: "xCamper",
    image: xcamper,
    description:
      "XCamper is a platform for sharing camping vehicles, allowing owners to earn extra income while enabling more people to experience the joy of camping and outdoor adventures. The platform promotes sustainable consumption by utilizing idle vehicles and making camping more accessible to everyone.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "WebSockets",
    ],
    demo_link: "https://xcamper.com/about",
    type: "Professional",
  },
  {
    name: "Neckermann",
    image: neckermann,
    description:
      "A comprehensive travel booking platform enabling seamless hotel reservations, flight bookings, and customizable vacation packages, featuring an intuitive seat selection system for optimal travel experience and convenience",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "WebSockets",
      "Google Maps API",
    ],
    demo_link: "neckermanntravel.co.uk",
    type: "Professional",
  },
  {
    name: "Roamy",
    description:
      "An immersive event booking platform that puts the power in your hands. From electrifying concerts to adrenaline-pumping sports events, discover, book, and create unforgettable experiences. Take control with customizable event creation tools and smart sharing features that let you decide who gets exclusive access to your events.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "WebSockets",
    ],
    type: "Professional",
  },
  {
    name: "Mapp",
    description:
      "A sophisticated mapping solution for construction enterprises that revolutionizes site management by integrating geospatial visualization with comprehensive documentation. Features an innovative timeline slider that brings construction projects to life across the cityscape, offering real-time insights into site locations, operational schedules, and project documentation in an intuitive, interactive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongDB", "NestJs"],
    type: "Professional",
  },
  {
    name: "Snippetbox",
    description:
      "Snippetbox is a web application built in Go that allows users to paste, share, and view text snippets — similar to services like Pastebin or GitHub Gists. It is designed with simplicity, security, and scalability in mind, leveraging Go's performance and MySQL for data storage.",
    technologies: ["Go", "MySQL", "HTML", "CSS", "JavaScript"],
    code_link: "https://github.com/curator69/snippetbox",
    type: "Personal",
  },
  {
    name: "Greenlight API",
    description:
      "Greenlight API is a JSON-based RESTful API for managing movie information, inspired by the Open Movie Database API. This project is built with Go and uses PostgreSQL as the database for storing movie details, user authentication, and more.",
    technologies: ["Go", "PostgreSQL", "HTML", "CSS", "JavaScript", "Docker"],
    code_link: "https://github.com/curator69/snippetbox",
    type: "Personal",
  },
  {
    name: "React recursion file tree example",
    description:
      "This is a simple React application that demonstrates how to create a recursive file tree structure using React and Tailwind CSS. It's a great starting point for anyone looking to learn how to build a file tree in React.",
    technologies: ["React", "Tailwind CSS"],
    code_link: "https://github.com/curator69/react-recursion-file-tree-example",
    demo_link: "https://react-recursion-file-tree-example.vercel.app/",
    type: "Personal",
  },
  {
    name: "RSS aggregator",
    description:
      "An RSS aggregator is a web application that collects and displays content from various RSS feeds in one place. This project is built with React and Tailwind CSS, and it allows users to subscribe to multiple RSS feeds and view the latest articles from each feed.",
    technologies: [
      "Golang",
      "Chi",
      "sql",
      "React",
      "Tailwind CSS",
      "Docker",
      "Kubernetes",
    ],
    code_link: "https://github.com/curator69/rssagg",
    type: "Personal",
  },
  {
    name: "Ticketing",
    description:
      "A ticketing system built with Golang and Chi. It allows users to create, view, and manage tickets. It also includes authentication and authorization features.",
    technologies: ["Golang", "Chi", "postgresql"],
    code_link: "https://github.com/curator69/ticketing",
    type: "Personal",
  },
  {
    name: "AI Discussion",
    image: aiDiscussion,
    description:
      "The AI Discussion Arena is a dynamic platform where users can spark intellectual debates by selecting two AI models (like GPT-4, Claude 2, PaLM 2, or Llama 2) to engage in real-time discussions on user-chosen topics, featuring a sleek interface with dark/light themes, profile management, and an immersive chat experience that showcases AI-to-AI interactions on complex subjects ranging from consciousness to cryptocurrency.",
    technologies: ["NextJs", "Tailwind CSS", "NodeJs", "Next.js", "OpenAI"],
    code_link: "https://github.com/curator69/ai-discussion-frontend",
    type: "Personal",
    in_progress: true,
  },
  {
    name: "Old Portfolio",
    image: oldPortfolio,
    description:
      "My old portfolio website built with React and Tailwind CSS. It showcases my skills, projects, and experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Three Fiber",
      "Three.js",
    ],
    code_link: "https://github.com/curator69/portfolioV2",
    demo_link: "https://portfolio-v2-curator69.vercel.app/",
    type: "Personal",
  },
];
