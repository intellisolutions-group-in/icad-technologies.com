import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ICAD Technologies",
  description: "Review the Terms and Conditions governing your access and usage of ICAD Technologies' services, proprietary products, and edge infrastructure.",
  openGraph: {
    title: "Terms & Conditions | ICAD Technologies",
    description: "Review the Terms and Conditions governing your access and usage of ICAD Technologies' services, proprietary products, and edge infrastructure.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
