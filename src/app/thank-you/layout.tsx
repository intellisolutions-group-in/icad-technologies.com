import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiry Received | Thank You | ICAD Technologies",
  description: "Thank you for your inquiry. An ICAD Technologies solutions architect will be in touch shortly to review your enterprise scale requirements.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Inquiry Received | Thank You | ICAD Technologies",
    description: "Thank you for your inquiry. An ICAD Technologies solutions architect will be in touch shortly to review your enterprise scale requirements.",
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
