"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-surface rounded border border-outline overflow-hidden transition-all duration-200 dark:bg-primary-container dark:border-primary-fixed-dim/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-md cursor-pointer text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-primary dark:text-on-primary text-body-md md:text-headline-md">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-secondary dark:text-secondary-fixed transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] border-t border-outline/30 opacity-100 p-md" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-on-surface-variant dark:text-on-primary-container/90 text-body-md leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
