import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Technology Services & Solutions | ICAD Technologies",
  description: "Explore ICAD Technologies' services: Web/Mobile Development, Custom ERP/CRM Solutions, AI/ML Integrations, Cloud Infrastructure, Cybersecurity, and Managed Edge Hosting.",
  openGraph: {
    title: "Enterprise Technology Services & Solutions | ICAD Technologies",
    description: "Explore ICAD Technologies' services: Web/Mobile Development, Custom ERP/CRM Solutions, AI/ML Integrations, Cloud Infrastructure, Cybersecurity, and Managed Edge Hosting.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
