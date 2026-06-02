import Link from "next/link";
import Monogram from "@/components/home/Monogram";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rushikesh Portfolio",
  description:
    "Explore Rushikesh's professional and personal projects — from travel platforms and mapping tools to open-source Go APIs and React apps.",
  alternates: {
    canonical: "https://portfolio-curator.vercel.app/projects",
  },
};

export default function Page() {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="flex items-center gap-4 mb-10">
        <Link href="/" aria-label="Go to home">
          <Monogram letter="R" size="md" animated={false} />
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      <ProjectsGrid />
    </div>
  );
}
