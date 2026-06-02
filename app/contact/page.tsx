import Link from "next/link";
import Monogram from "@/components/home/Monogram";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rushikesh Portfolio",
  description:
    "Get in touch with Rushikesh. Available for freelance work and open to new opportunities.",
  alternates: {
    canonical: "https://portfolio-curator.vercel.app/contact",
  },
};

export default function Page() {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" aria-label="Go to home">
          <Monogram letter="R" size="md" animated={false} />
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent">
          Contact
        </h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left side - Contact form */}
          <ContactForm />

          {/* Right side - Contact info */}
          <div>
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 inline-block relative">
              Connect
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-400"></span>
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
              I&apos;m currently available for freelance work and open to discussing
              new opportunities. Feel free to reach out if you have a project in
              mind or just want to connect.
            </p>

            <div className="space-y-4 md:space-y-8">
              <div className="flex items-start space-x-4 md:space-x-6 p-3 md:p-4 rounded-lg border border-gray-800 hover:border-emerald-500/30 transition-colors">
                <div className="bg-gray-800 p-3 md:p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:rushikeshkhillari10@gmail.com"
                    className="text-sm md:text-base text-gray-400 hover:text-emerald-400 transition-colors break-all"
                  >
                    rushikeshkhillari10@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6 p-3 md:p-4 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-colors">
                <div className="bg-gray-800 p-3 md:p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    Social Media
                  </h3>
                  <div className="flex flex-wrap gap-3 md:gap-4 mt-1 md:mt-2">
                    <Link
                      href="https://github.com/curator69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" aria-hidden="true"></span>
                      GitHub
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/rushikesh-k-3a3977153/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" aria-hidden="true"></span>
                      LinkedIn
                    </Link>
                    <Link
                      href="https://x.com/curator142"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" aria-hidden="true"></span>
                      Twitter
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6 p-3 md:p-4 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-colors">
                <div className="bg-gray-800 p-3 md:p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    Location
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    Remote / Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
