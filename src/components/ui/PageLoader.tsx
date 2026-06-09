"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useGSAP(() => {
    if (!pathRef.current || !containerRef.current) return;

    // Lock scrolling on load
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const curveValue = "M 0 0 L 100 0 L 100 100 Q 50 85 0 100 Z";
    const finalValue = "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z";

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scrolling
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        setIsDone(true);
      },
    });

    const progressObj = { value: 0 };

    // 1. Animate loading progress bar and counter
    tl.to(progressObj, {
      value: 100,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        const val = Math.round(progressObj.value);
        if (textRef.current) {
          textRef.current.innerText = `${val}%`;
        }
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${val}%`;
        }
      },
    });

    // 2. Fade out progress elements
    tl.to(
      contentRef.current,
      {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "+=0.1"
    );

    // 3. Morph SVG curtain
    tl.to(pathRef.current, {
      attr: { d: curveValue },
      duration: 0.6,
      ease: "power2.in",
    });

    tl.to(pathRef.current, {
      attr: { d: finalValue },
      duration: 0.7,
      ease: "power2.out",
    });

    // 4. Fade out overlay wrapper
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
      },
      "-=0.3"
    );
  }, { scope: containerRef });

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent"
    >
      {/* SVG Curtain Wiping Up */}
      <svg
        className="absolute inset-0 w-full h-full fill-background"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z"
          className="transition-all duration-300"
        />
      </svg>

      {/* Progress content overlay */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center select-none text-center"
      >
        <span className="font-mono text-label-sm uppercase tracking-[0.2em] text-secondary mb-4 animate-pulse">
          Initializing System
        </span>
        <span
          ref={textRef}
          className="text-8xl md:text-9xl font-black font-display tracking-tighter text-primary select-none tabular-nums"
        >
          0%
        </span>
        <div className="w-56 h-[2px] bg-outline mt-6 relative overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-secondary w-0 transition-all duration-75"
          />
        </div>
      </div>
    </div>
  );
}
