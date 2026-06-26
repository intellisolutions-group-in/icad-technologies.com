import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ICAD Technologies",
  description: "Discover ICAD Technologies' legacy, architectural methodologies, core engineering pillars, and operational presence across India.",
  openGraph: {
    title: "About Us | ICAD Technologies",
    description: "Discover ICAD Technologies' legacy, architectural methodologies, core engineering pillars, and operational presence across India.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
