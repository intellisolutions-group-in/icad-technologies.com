"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Synchronize Lenis scrolling with ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Integrate Lenis RAF loop with GSAP ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // Disable lag smoothing for instant response
    gsap.ticker.lagSmoothing(0);

    // Watch for size changes on the document body to update Lenis and ScrollTrigger
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  return <>{children}</>;
}
