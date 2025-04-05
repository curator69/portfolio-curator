import oldPortfolio from "../public/images/old-portfolio.png";

export const projects = [
  {
    name: "Snippetbox",
    description:
      "Snippetbox is a web application built in Go that allows users to paste, share, and view text snippets — similar to services like Pastebin or GitHub Gists. It is designed with simplicity, security, and scalability in mind, leveraging Go's performance and MySQL for data storage.",
    technologies: ["Go", "MySQL", "HTML", "CSS", "JavaScript"],
    code_link: "https://github.com/curator69/snippetbox",
    demo_link: "https://13.233.101.20:4000/",
  },
  {
    name: "Greenlight API",
    description:
      "Greenlight API is a JSON-based RESTful API for managing movie information, inspired by the Open Movie Database API. This project is built with Go and uses PostgreSQL as the database for storing movie details, user authentication, and more.",
    technologies: ["Go", "PostgreSQL", "HTML", "CSS", "JavaScript", "Docker"],
    code_link: "https://github.com/curator69/snippetbox",
    demo_link: "https://13.233.101.20:4000/",
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
  },
];
