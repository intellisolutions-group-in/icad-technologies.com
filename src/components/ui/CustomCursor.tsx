"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if device supports hover / coarse pointer (touchscreens)
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const bubble = bubbleRef.current;
    const bubbleText = textRef.current;

    if (!dot || !bubble || !bubbleText) return;

    // Enable custom cursor styles in CSS
    document.documentElement.classList.add("custom-cursor-active");

    // Initial positioning
    gsap.set(dot, { xPercent: -50, yPercent: -50, scale: 1 });
    gsap.set(bubble, { xPercent: -50, yPercent: -140, scale: 0.8, opacity: 0 });

    // GSAP quickTo for high performance tracking
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });

    const xToBubble = gsap.quickTo(bubble, "x", { duration: 0.35, ease: "power3.out" });
    const yToBubble = gsap.quickTo(bubble, "y", { duration: 0.35, ease: "power3.out" });

    let currentText: string | null = null;
    let isHovered = false;
    let isMouseInWindow = false;
    let pauseTimeout: NodeJS.Timeout | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      // Lazy reveal cursor elements on first move if not visible
      if (!isMouseInWindow) {
        isMouseInWindow = true;
        gsap.to(dot, { opacity: 1, duration: 0.2 });
      }

      // Position tracking
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToBubble(e.clientX);
      yToBubble(e.clientY);

      // Clear previous pause timeout
      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
      }

      // Immediately hide the guide bubble when moving
      if (currentText !== null) {
        currentText = null;
        gsap.to(bubble, {
          scale: 0.8,
          opacity: 0,
          duration: 0.2,
          ease: "power3.in",
          overwrite: "auto",
        });
      }

      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Detect interactive elements (links, buttons, inputs, etc.)
      const isInteractive = target.closest(
        "a, button, [role='button'], input, select, textarea, .interactive-hover"
      );

      if (isInteractive) {
        if (!isHovered) {
          isHovered = true;
          gsap.to(dot, {
            scale: 3,
            backgroundColor: "rgba(255, 75, 43, 0.12)",
            border: "1px solid rgba(255, 75, 43, 0.85)",
            duration: 0.25,
            ease: "power2.out",
          });
        }
      } else {
        if (isHovered) {
          isHovered = false;
          gsap.to(dot, {
            scale: 1,
            backgroundColor: "#ff4b2b",
            border: "1px solid rgba(255, 75, 43, 0)",
            duration: 0.25,
            ease: "power2.out",
          });
        }
      }

      // 2. Set timeout to detect pause and show details
      pauseTimeout = setTimeout(() => {
        const checkTarget = e.target as HTMLElement;
        if (!checkTarget) return;

        const guideEl = checkTarget.closest("[data-cursor-guide]");
        const guideText = guideEl ? guideEl.getAttribute("data-cursor-guide") : null;

        if (guideText && guideText.trim() !== "") {
          // Adjust bubble direction if cursor is near the top edge
          const nearTop = e.clientY < 120;
          gsap.to(bubble, {
            yPercent: nearTop ? 60 : -140,
            duration: 0.25,
            ease: "power2.out",
          });

          if (currentText !== guideText) {
            currentText = guideText;
            bubbleText.textContent = guideText;
            gsap.to(bubble, {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "power3.out",
              overwrite: "auto",
            });
          }
        }
      }, 400); // 400ms pause threshold
    };

    const handleMouseLeave = () => {
      isMouseInWindow = false;
      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
      }
      gsap.to([dot, bubble], { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      isMouseInWindow = true;
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Inner Dot Cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#ff4b2b] rounded-full pointer-events-none z-[9999] origin-center opacity-0 transition-opacity duration-200"
        style={{ border: "1px solid rgba(255, 75, 43, 0)" }}
      />

      {/* Floating Tour Guide Text Bubble */}
      <div
        ref={bubbleRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] origin-center opacity-0 scale-75"
      >
        <div className="px-3.5 py-1.5 rounded-xl text-[11px] font-sans font-medium tracking-wide bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-black/5 text-zinc-800 dark:text-zinc-200 max-w-[200px] text-center leading-normal">
          <span ref={textRef} />
        </div>
      </div>
    </>
  );
}
