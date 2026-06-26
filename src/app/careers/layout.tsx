import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Engineering Team | ICAD Technologies",
  description: "Explore opportunities in software engineering, cloud architecture, cybersecurity, and data analytics. Build high-performance solutions with ICAD Technologies.",
  openGraph: {
    title: "Careers | Join Our Engineering Team | ICAD Technologies",
    description: "Explore opportunities in software engineering, cloud architecture, cybersecurity, and data analytics. Build high-performance solutions with ICAD Technologies.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
