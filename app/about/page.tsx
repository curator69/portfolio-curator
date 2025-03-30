"use client";

import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";

export default function Page() {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="mb-16">
        <p className="text-xl mb-6">
          I am a passionate Frontend Engineer with a strong foundation in modern
          web technologies, specializing in React, Next.js, TypeScript, and
          Tailwind CSS. With hands-on experience in building scalable,
          user-centric applications, I'm driven to create responsive and
          optimized web solutions. I also enjoy diving into full stack
          development with Node.js and Golang, bringing a well-rounded approach
          to building web applications.
        </p>
        <p className="text-xl mb-6">
          Beyond frontend development, I have worked extensively with libraries
          and frameworks such as Vue.js, Nuxt.js, and Three.js, allowing me to
          bring creativity and functionality into interactive UI designs. My
          goal is to continuously learn and integrate cutting-edge tools and
          practices to deliver high-quality, maintainable code.
        </p>
        <p className="text-xl mb-6">
          Always curious and motivated by problem-solving, I thrive in
          environments where innovation meets technology.
        </p>
      </div>

      <Experience />
      <Skills />
    </div>
  );
}
