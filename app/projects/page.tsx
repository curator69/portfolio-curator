"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Monogram from "@/components/home/Monogram";

export default function Page() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="flex items-center gap-4 mb-10">
        <Monogram letter="R" size="md" animated={false} />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      <div className="space-y-12 sm:space-y-16 md:space-y-24 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Project card */}
            <div
              className={`
              relative border border-gray-800 rounded-lg overflow-hidden
              transition-all duration-500 ease-out
              ${activeProject === index ? "transform-gpu -translate-y-2" : ""}
            `}
            >
              {/* Project content */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
                  {/* Left side - Project info */}
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-emerald-400">
                      {project.name}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="mb-4 sm:mb-6 md:mb-8">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-3 sm:gap-4 mt-auto">
                      <Link
                        href={project.demo_link}
                        target="_blank"
                        className="group relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 overflow-hidden rounded-lg bg-transparent text-xs sm:text-sm md:text-base"
                      >
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-emerald-600 to-emerald-400 group-hover:opacity-100 opacity-70"></span>
                        <span className="relative text-black font-medium">
                          Live Demo
                        </span>
                      </Link>

                      <Link
                        href={project.code_link}
                        target="_blank"
                        className="group relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 overflow-hidden rounded-lg border border-gray-700 text-xs sm:text-sm md:text-base"
                      >
                        <span className="absolute inset-0 w-0 bg-gray-800 transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative text-white font-medium">
                          View Code
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Right side - Project image if available */}
                  {project.image && (
                    <div className="w-full md:w-2/5 relative h-[150px] sm:h-[175px] md:h-[200px] lg:h-auto rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="object-cover"
                        fill
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Animated border */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 sm:h-1 bg-emerald-400 transition-all duration-700 ease-in-out`}
                style={{
                  width: activeProject === index ? "100%" : "0%",
                }}
              ></div>
            </div>

            {/* Project number */}
            <div className="absolute -left-2 sm:-left-3 md:-left-4 -top-6 sm:-top-8 md:-top-10 text-4xl sm:text-6xl md:text-8xl font-bold text-gray-800 opacity-50 select-none">
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
