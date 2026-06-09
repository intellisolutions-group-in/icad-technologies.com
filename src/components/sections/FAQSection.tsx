import React from "react";
import Accordion from "../ui/Accordion";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

export default function FAQSection({
  title = "Technical Specifications FAQ",
  items,
  className = "",
}: FAQSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`py-xl px-margin-mobile md:px-margin-desktop bg-surface-container ${className}`}>
      <div className="max-w-4xl mx-auto space-y-xl">
        <h2 className="text-headline-lg font-headline-lg text-primary text-center dark:text-on-primary">
          {title}
        </h2>
        <div className="space-y-base">
          {items.map((item, idx) => (
            <Accordion key={idx} title={item.q}>
              {item.a}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
