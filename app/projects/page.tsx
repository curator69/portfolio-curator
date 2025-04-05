"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className="space-y-24 max-w-5xl mx-auto">
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
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left side - Project info */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-emerald-400">
                      {project.name}
                    </h2>

                    <p className="text-gray-300 mb-6 text-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      <Link
                        href={project.demo_link}
                        target="_blank"
                        className="group relative px-6 py-2 overflow-hidden rounded-lg bg-transparent"
                      >
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-emerald-600 to-emerald-400 group-hover:opacity-100 opacity-70"></span>
                        <span className="relative text-black font-medium">
                          Live Demo
                        </span>
                      </Link>

                      <Link
                        href={project.code_link}
                        target="_blank"
                        className="group relative px-6 py-2 overflow-hidden rounded-lg border border-gray-700"
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
                    <div className="w-full md:w-2/5 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
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
                className={`absolute bottom-0 left-0 h-1 bg-emerald-400 transition-all duration-700 ease-in-out`}
                style={{
                  width: activeProject === index ? "100%" : "0%",
                }}
              ></div>
            </div>

            {/* Project number */}
            <div className="absolute -left-4 -top-10 text-8xl font-bold text-gray-800 opacity-50 select-none">
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
