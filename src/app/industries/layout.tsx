import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Verticals & Sector Specializations | ICAD Technologies",
  description: "Learn how ICAD Technologies tailors enterprise tech frameworks for key sectors: Financial Services (FinTech), Smart IoT Manufacturing, Logistics, and Compliant Healthcare Networks.",
  openGraph: {
    title: "Industry Verticals & Sector Specializations | ICAD Technologies",
    description: "Learn how ICAD Technologies tailors enterprise tech frameworks for key sectors: Financial Services (FinTech), Smart IoT Manufacturing, Logistics, and Compliant Healthcare Networks.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
