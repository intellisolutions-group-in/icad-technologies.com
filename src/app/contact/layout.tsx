import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Solutions Architects | ICAD Technologies",
  description: "Reach out to ICAD Technologies' legal, talent acquisition, or technical departments. Speak to a solutions architect about cloud, security, or enterprise development.",
  openGraph: {
    title: "Contact Our Solutions Architects | ICAD Technologies",
    description: "Reach out to ICAD Technologies' legal, talent acquisition, or technical departments. Speak to a solutions architect about cloud, security, or enterprise development.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
