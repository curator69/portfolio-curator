import Home from "@/components/home/Home";
import { defaultMetadata } from "@/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Home | Portfolio",
  alternates: {
    canonical: "https://portfolio-curator.vercel.app/",
  },
};

export default function Page() {
  return <Home />;
}
