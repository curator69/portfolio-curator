import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Rushikesh | Portfolio",
  description:
    "Professional portfolio showcasing my work, skills, and experience as a developer",
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "projects",
    "Software Engineer",
  ],
  authors: [{ name: "Rushikesh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-curator.vercel.app/",
    title: "Rushikesh | Portfolio",
    description:
      "Professional portfolio showcasing my work, skills, and experience as a Software Engineer",
    siteName: "Rushikesh Portfolio",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rushikesh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh | Portfolio",
    description:
      "Professional portfolio showcasing my work, skills, and experience as a Software Engineer",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
