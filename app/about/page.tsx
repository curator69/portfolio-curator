"use client";

import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";

const Tech = ({ text }: { text: string }) => (
  <span className="text-emerald-400 hover:underline underline-offset-2">
    {text}
  </span>
);

export default function Page() {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="mb-8 sm:mb-12 md:mb-16">
        <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
          I am a passionate Frontend Engineer with a strong foundation in modern
          web technologies, specializing in <Tech text="React" />,{" "}
          <Tech text="Next.js" />, <Tech text="TypeScript" />, and{" "}
          <Tech text="Tailwind CSS" />. With hands-on experience in building
          scalable, user-centric applications, I'm driven to create responsive
          and optimized web solutions. I also enjoy diving into full stack
          development with <Tech text="Node.js" /> and <Tech text="Golang" />,
          bringing a well-rounded approach to building web applications.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
          Beyond frontend development, I have worked extensively with libraries
          and frameworks such as <Tech text="Vue.js" />, <Tech text="Nuxt.js" />
          , and <Tech text="Three.js" />, allowing me to bring creativity and
          functionality into interactive UI designs. My goal is to continuously
          learn and integrate cutting-edge tools and practices to deliver
          high-quality, maintainable code.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
          Always curious and motivated by problem-solving, I thrive in
          environments where innovation meets technology.
        </p>
      </div>

      <Experience />
      <Skills />
    </div>
  );
}
