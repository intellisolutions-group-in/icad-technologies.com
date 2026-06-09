"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right" | "reveal-words";
  duration?: number;
  delay?: number;
  stagger?: number;
  selector?: string;
  startTrigger?: string;
  className?: string;
}

function getTextFromChildren(children: React.ReactNode): string {
  if (children === null || children === undefined) return "";
  if (typeof children === "string" || typeof children === "number" || typeof children === "boolean") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }
  if (React.isValidElement(children)) {
    return getTextFromChildren((children as React.ReactElement<any>).props.children);
  }
  return "";
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  duration = 0.8,
  delay = 0,
  stagger = 0,
  selector,
  startTrigger = "top 85%",
  className = "",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let targets: any = containerRef.current;
    
    // Default selector for reveal-words is the word span
    const activeSelector = selector || (animation === "reveal-words" ? ".reveal-word" : undefined);
    
    if (activeSelector) {
      targets = containerRef.current?.querySelectorAll(activeSelector);
    }
    
    if (!targets || (targets instanceof NodeList && targets.length === 0)) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: startTrigger,
        toggleActions: "play none none none",
      },
    };

    const activeStagger = stagger || (animation === "reveal-words" ? 0.03 : 0);
    if (activeStagger > 0) {
      toVars.stagger = activeStagger;
    }

    switch (animation) {
      case "reveal-words":
        fromVars.y = 20;
        toVars.y = 0;
        toVars.ease = "power4.out";
        break;
      case "fade-up":
        fromVars.y = 40;
        toVars.y = 0;
        break;
      case "scale-up":
        fromVars.scale = 0.96;
        fromVars.y = 20;
        toVars.scale = 1;
        toVars.y = 0;
        break;
      case "slide-left":
        fromVars.x = 40;
        toVars.x = 0;
        break;
      case "slide-right":
        fromVars.x = -40;
        toVars.x = 0;
        break;
      case "fade-in":
      default:
        break;
    }

    gsap.fromTo(targets, fromVars, toVars);
  }, { scope: containerRef });

  const renderChildren = () => {
    if (animation === "reveal-words") {
      const text = getTextFromChildren(children);
      if (text) {
        return text.split(" ").map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden mr-[0.25em] py-1">
            <span className="reveal-word inline-block origin-bottom">
              {word}
            </span>
          </span>
        ));
      }
    }
    return children;
  };

  return (
    <div ref={containerRef} className={className}>
      {renderChildren()}
    </div>
  );
}
