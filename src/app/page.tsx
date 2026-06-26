import type { Metadata } from "next";
import HomeClientPage from "./HomeClientPage";

export const metadata: Metadata = {
  title: "ICAD Technologies | Global Excellence in Tech Consulting",
  description: "Strategic tech consulting, cloud transformation, zero-trust cybersecurity, custom software engineering, and AI solutions for enterprise leaders.",
  openGraph: {
    title: "ICAD Technologies | Global Excellence in Tech Consulting",
    description: "Strategic tech consulting, cloud transformation, zero-trust cybersecurity, custom software engineering, and AI solutions for enterprise leaders.",
  },
};

export default function Page() {
  return <HomeClientPage />;
}
