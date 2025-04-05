"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");

  // Track mouse position for the custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  // Generate random positions for background elements
  const generateRandomElements = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animationDuration: Math.random() * 20 + 10,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  };

  const backgroundElements = generateRandomElements(15);
  return (
    <div className="bg-black text-white min-h-screen p-8 overflow-hidden relative">
      {/* Custom cursor */}
      <div
        className="fixed w-24 h-24 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          background: activeField
            ? "rgba(52, 211, 153, 0.8)"
            : "rgba(255, 255, 255, 0.2)",
          transition: "background 0.3s ease, width 0.3s ease, height 0.3s ease",
        }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
            {cursorText}
          </span>
        )}
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full bg-emerald-500"
            style={{
              width: `${el.size}px`,
              height: `${el.size}px`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              opacity: el.opacity,
              animation: `float ${el.animationDuration}s infinite alternate ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Contact
        </h1>
        <div className="max-w-6xl mx-auto">
          {/* Main content area */}
          <div
            ref={formRef}
            className="relative backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden"
            onMouseEnter={() => setCursorText("CONTACT")}
            onMouseLeave={() => setCursorText("")}
          >
            {/* Glowing orb */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              {/* Left side - Contact form */}
              <div>
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center py-16">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/20"></div>
                      <div className="relative bg-emerald-500/30 p-6 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mt-8 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 text-center max-w-sm">
                      Thanks for reaching out. I'll get back to you as soon as
                      possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <h2 className="text-3xl font-bold mb-8 inline-block relative">
                      Let's Talk
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-400"></span>
                    </h2>

                    <div className="space-y-6">
                      <div
                        className="relative group"
                        onMouseEnter={() => setCursorText("TYPE")}
                        onMouseLeave={() => setCursorText("")}
                      >
                        <label className="absolute left-3 -top-3 bg-black px-2 text-xs text-gray-500 transition-all group-focus-within:text-emerald-400">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField("name")}
                          onBlur={() => setActiveField(null)}
                          required
                          className="w-full bg-black/50 border border-gray-800 rounded-lg py-4 px-4 focus:outline-none focus:border-emerald-400 transition-colors"
                        />
                      </div>
                      <div
                        className="relative group"
                        onMouseEnter={() => setCursorText("TYPE")}
                        onMouseLeave={() => setCursorText("")}
                      >
                        <label className="absolute left-3 -top-3 bg-black px-2 text-xs text-gray-500 transition-all group-focus-within:text-emerald-400">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField("email")}
                          onBlur={() => setActiveField(null)}
                          required
                          className="w-full bg-black/50 border border-gray-800 rounded-lg py-4 px-4 focus:outline-none focus:border-emerald-400 transition-colors"
                        />
                      </div>

                      <div
                        className="relative group"
                        onMouseEnter={() => setCursorText("TYPE")}
                        onMouseLeave={() => setCursorText("")}
                      >
                        <label className="absolute left-3 -top-3 bg-black px-2 text-xs text-gray-500 transition-all group-focus-within:text-emerald-400">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField("message")}
                          onBlur={() => setActiveField(null)}
                          required
                          rows={5}
                          className="w-full bg-black/50 border border-gray-800 rounded-lg py-4 px-4 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden px-8 py-4 rounded-lg bg-transparent text-white font-medium"
                      onMouseEnter={() => setCursorText("SEND")}
                      onMouseLeave={() => setCursorText("")}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600"></span>
                      <span className="absolute inset-0 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      <span className="absolute inset-0 border border-white/20 rounded-lg"></span>
                      <span className="relative flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
              {/* Right side - Contact info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-8 inline-block relative">
                    Connect
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-400"></span>
                  </h2>

                  <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                    I'm currently available for freelance work and open to
                    discussing new opportunities. Feel free to reach out if you
                    have a project in mind or just want to connect.
                  </p>
                  <div className="space-y-8">
                    <div
                      className="group flex items-start space-x-6 p-4 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
                      onMouseEnter={() => setCursorText("EMAIL")}
                      onMouseLeave={() => setCursorText("")}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md group-hover:bg-emerald-500/40 transition-colors"></div>
                        <div className="relative bg-black p-4 rounded-full border border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white group-hover:text-emerald-400 transition-colors">
                          Email
                        </h3>
                        <a
                          href="mailto:rushikeshkhillari10@gmail.com"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          rushikeshkhillari10@gmail.com
                        </a>
                      </div>
                    </div>
                    <div
                      className="group flex items-start space-x-6 p-4 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
                      onMouseEnter={() => setCursorText("SOCIAL")}
                      onMouseLeave={() => setCursorText("")}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:bg-blue-500/40 transition-colors"></div>
                        <div className="relative bg-black p-4 rounded-full border border-blue-500/30 group-hover:border-blue-500/60 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                          Social Media
                        </h3>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <Link
                            href="https://github.com/curator69"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                          >
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                            GitHub
                          </Link>
                          <Link
                            href="https://www.linkedin.com/in/rushikesh-k-3a3977153/"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            LinkedIn
                          </Link>
                          <Link
                            href="https://x.com/curator142"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            Twitter
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="group flex items-start space-x-6 p-4 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
                      onMouseEnter={() => setCursorText("LOCATION")}
                      onMouseLeave={() => setCursorText("")}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:bg-purple-500/40 transition-colors"></div>
                        <div className="relative bg-black p-4 rounded-full border border-purple-500/30 group-hover:border-purple-500/60 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
                          Location
                        </h3>
                        <p className="text-gray-400">Remote / Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="hidden lg:block relative h-48 mt-12">
                  <div className="absolute right-0 bottom-0 w-64 h-32 border-r-2 border-b-2 border-emerald-400/30"></div>
                  <div className="absolute right-8 bottom-8 w-16 h-16 border-r-2 border-b-2 border-emerald-400/60"></div>
                  <div className="absolute right-16 bottom-16 w-4 h-4 bg-emerald-400/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
