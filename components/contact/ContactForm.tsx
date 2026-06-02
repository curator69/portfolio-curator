"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center py-8 md:py-16">
        <div className="bg-emerald-500/30 p-4 md:p-6 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-12 md:w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-2">
          Message Sent!
        </h3>
        <p className="text-sm md:text-base text-gray-400 text-center max-w-sm">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8" noValidate>
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 inline-block relative">
        Let&apos;s Talk
        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-400"></span>
      </h2>

      <div className="space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm md:text-base text-gray-400 mb-1 md:mb-2"
          >
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 md:py-3 px-3 md:px-4 focus:outline-none focus:border-emerald-400 transition-colors text-sm md:text-base"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm md:text-base text-gray-400 mb-1 md:mb-2"
          >
            Your Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 md:py-3 px-3 md:px-4 focus:outline-none focus:border-emerald-400 transition-colors text-sm md:text-base"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm md:text-base text-gray-400 mb-1 md:mb-2"
          >
            Your Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 md:py-3 px-3 md:px-4 focus:outline-none focus:border-emerald-400 transition-colors resize-none text-sm md:text-base"
          ></textarea>
        </div>
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg transition-colors duration-200 flex items-center text-sm md:text-base"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
              className="h-4 w-4 md:h-5 md:w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
  );
}
