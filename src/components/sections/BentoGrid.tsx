"use client";

import React, { useRef } from "react";
import * as LucideIcons from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface BentoGridItem {
  title: string;
  desc: string;
  cols: number;
  bgClass?: string;
  textClass?: string;
  imageUrl?: string;
  imageAlt?: string;
  icon?: string; // Material symbols string or Lucide name
}

interface BentoGridProps {
  title?: string;
  subtitle?: string;
  items: BentoGridItem[];
  className?: string;
}

export default function BentoGrid({
  title,
  subtitle,
  items,
  className = "",
}: BentoGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".bento-card");
    if (!cards || cards.length === 0) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  // Helper to map column span
  const getColSpan = (cols: number) => {
    switch (cols) {
      case 12:
        return "col-span-12";
      case 8:
        return "col-span-12 md:col-span-8";
      case 7:
        return "col-span-12 lg:col-span-7";
      case 6:
        return "col-span-12 md:col-span-6";
      case 5:
        return "col-span-12 lg:col-span-5";
      case 4:
        return "col-span-12 md:col-span-4";
      default:
        return "col-span-12 md:col-span-4";
    }
  };

  return (
    <section 
      ref={containerRef}
      className={`py-xl px-margin-mobile md:px-margin-desktop ${
        /\bbg-/.test(className) ? "" : "bg-surface-container"
      } ${className}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {(title || subtitle) && (
          <div className="mb-lg text-center max-w-2xl mx-auto space-y-sm">
            {title && (
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85">
                {subtitle}
              </p>
            )}
          </div>
        )}
 
        <div className="grid grid-cols-12 gap-gutter auto-rows-auto">
          {items.map((item, idx) => {
            const spanClass = getColSpan(item.cols);
            const isDark = item.bgClass ? (/(?:^|\s)bg-(primary|secondary)(?:\/|\s|$)/.test(item.bgClass)) : false;
 
            return (
              <div
                key={idx}
                className={`bento-card ${spanClass} ${
                  item.bgClass || "bg-surface"
                } rounded border border-outline p-md md:p-lg flex flex-col justify-between overflow-hidden relative group shadow-none hover:border-foreground/40 hover:-translate-y-0.5 transition-all duration-200 min-h-[250px] dark:bg-primary-container dark:border-primary-fixed-dim/20`}
              >
                {/* Background image if exists */}
                {item.imageUrl && (
                  <div className="absolute inset-0 opacity-100 transition-opacity duration-500 pointer-events-none z-0">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt || item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  </div>
                )}

                {/* Card Icon */}
                {item.icon && !item.imageUrl && (
                  <div className="mb-md text-secondary shrink-0">
                    {/* Render Lucide Icon if exists in dynamic list, else fallback to standard block */}
                    {React.createElement(
                      (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[item.icon] || LucideIcons.HelpCircle,
                      { className: "w-8 h-8 text-secondary dark:text-secondary-fixed" }
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <h3
                    className={`text-headline-md font-headline-md mb-xs ${
                      item.imageUrl || isDark ? "text-white" : "text-primary dark:text-on-primary"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-body-md ${
                      item.imageUrl || isDark
                        ? "text-white/80"
                        : "text-on-surface-variant dark:text-on-primary-container/85"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
