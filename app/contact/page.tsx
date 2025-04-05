"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <div className="bg-black text-white p-8 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
        Contact
      </h1>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact form */}
          <div>
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center py-16">
                <div className="bg-emerald-500/30 p-6 rounded-full">
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
                <h3 className="text-3xl font-bold mt-8 mb-2">Message Sent!</h3>
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
                  <div className="relative">
                    <label className="block text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
                >
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
                        className="h-5 w-5 ml-2"
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
                </button>
              </form>
            )}
          </div>

          {/* Right side - Contact info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 inline-block relative">
              Connect
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-400"></span>
            </h2>

            <p className="text-gray-300 mb-12 text-lg">
              I'm currently available for freelance work and open to discussing
              new opportunities. Feel free to reach out if you have a project in
              mind or just want to connect.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-4 rounded-lg border border-gray-800 hover:border-emerald-500/30 transition-colors">
                <div className="bg-gray-800 p-4 rounded-full">
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
                <div>
                  <h3 className="text-xl font-medium text-white">Email</h3>
                  <a
                    href="mailto:rushikeshkhillari10@gmail.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    rushikeshkhillari10@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-4 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="bg-gray-800 p-4 rounded-full">
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
                <div>
                  <h3 className="text-xl font-medium text-white">
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

              <div className="flex items-start space-x-6 p-4 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-colors">
                <div className="bg-gray-800 p-4 rounded-full">
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
                <div>
                  <h3 className="text-xl font-medium text-white">Location</h3>
                  <p className="text-gray-400">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
