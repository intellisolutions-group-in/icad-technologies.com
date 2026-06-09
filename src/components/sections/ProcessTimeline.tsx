"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessTimeline({
  title = "Transparent Agile Methodology",
  subtitle,
  steps,
  className = "",
}: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // 1. Animate the vertical timeline line growing from top to bottom
    const line = containerRef.current?.querySelector(".timeline-line");
    const track = containerRef.current?.querySelector(".timeline-track");
    if (line && track) {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: track,
            start: "top 75%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      );
    }

    // 2. Animate each step row (dot scales up, text fades/slides in like a zipper)
    const rows = containerRef.current?.querySelectorAll(".timeline-row");
    if (rows) {
      rows.forEach((row) => {
        const dot = row.querySelector(".timeline-dot");
        const text = row.querySelector(".timeline-text");
        const isRowEven = row.classList.contains("md:flex-row-reverse");

        const scrollTriggerConfig = {
          trigger: row,
          start: "top 85%",
          toggleActions: "play none none none",
        };

        // Desktop Zipper Animation
        mm.add("(min-width: 768px)", () => {
          const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

          if (dot) {
            tl.fromTo(
              dot,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
          }

          if (text) {
            // Zipper effect: even rows (text on right) slide from right, odd rows (text on left) slide from left
            const xStart = isRowEven ? 80 : -80;
            tl.fromTo(
              text,
              { opacity: 0, x: xStart },
              { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
              "-=0.3"
            );
          }
        });

        // Mobile Fade-Up Animation
        mm.add("(max-width: 767px)", () => {
          const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

          if (dot) {
            tl.fromTo(
              dot,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
          }

          if (text) {
            tl.fromTo(
              text,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
              "-=0.3"
            );
          }
        });
      });
    }

    return () => {
      mm.revert();
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={`py-xl px-margin-mobile md:px-margin-desktop bg-surface ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-xl space-y-sm">
          <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="timeline-track relative pl-sm md:pl-0">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-[23px] top-0 bottom-0 w-[2px] bg-outline/80 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-xl">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`timeline-row relative flex flex-col md:flex-row items-start md:items-center gap-md ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right Text Content */}
                  <div
                    className={`timeline-text flex-1 pl-12 ${
                      isEven 
                        ? "md:text-right md:pl-[80px] md:pr-0" 
                        : "md:text-left md:pl-0 md:pr-[80px]"
                    }`}
                  >
                    <h4 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-xs">
                      {step.title}
                    </h4>
                    <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Number Dot */}
                  <div className="timeline-dot absolute left-[3px] md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-headline-md shrink-0 border-4 border-surface shadow-sm">
                    {step.step}
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
