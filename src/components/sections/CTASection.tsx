import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

export default function CTASection({
  title = "Ready to Lead the Next Digital Frontier?",
  description = "Contact our enterprise strategy team today for a confidential assessment of your technology roadmap.",
  primaryBtnText = "Book a Consultation",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Learn More",
  secondaryBtnLink = "/about",
}: CTASectionProps) {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-primary relative overflow-hidden">
      {/* Skewed Red Brand Highlight Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-15 skew-x-[-20deg] translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 py-lg space-y-md">
        <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-primary">
          {title}
        </h2>
        <p className="text-body-lg text-on-primary opacity-80 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          {primaryBtnText && (
            <Magnetic>
              <Link href={primaryBtnLink}>
                <Button variant="neumorphic-orange" size="lg" className="w-full sm:w-auto px-xl">
                  {primaryBtnText}
                </Button>
              </Link>
            </Magnetic>
          )}
          {secondaryBtnText && (
            <Magnetic>
              <Link href={secondaryBtnLink}>
                <Button variant="neumorphic-dark" size="lg" className="w-full sm:w-auto px-xl">
                  {secondaryBtnText}
                </Button>
              </Link>
            </Magnetic>
          )}
        </div>
      </div>
    </section>
  );
}
