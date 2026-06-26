import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ICAD Technologies",
  description: "Learn how ICAD Technologies handles, protects, and governs your corporate data and intellectual assets in our zero-trust ecosystem.",
  openGraph: {
    title: "Privacy Policy | ICAD Technologies",
    description: "Learn how ICAD Technologies handles, protects, and governs your corporate data and intellectual assets in our zero-trust ecosystem.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
