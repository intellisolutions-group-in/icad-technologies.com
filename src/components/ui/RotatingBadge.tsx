"use client";

import React from "react";

interface RotatingBadgeProps {
  text?: string; // E.g. "• STRATEGIC PARTNERSHIP • ENTERPRISE OUTREACH •"
  centerText?: string; // E.g. "ICAD"
  size?: number; // E.g. 140
  className?: string;
}

export default function RotatingBadge({
  text = "• EXCELLENCE IN ENGINEERING • TARGETED SOLUTIONS •",
  centerText = "ICAD",
  size = 140,
  className = "",
}: RotatingBadgeProps) {
  // Unique ID for the text curve so multiple badges don't conflict
  const pathId = React.useId().replace(/:/g, "-");

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Rotating outer text */}
      <svg
        className="w-full h-full absolute animate-spin-slow pointer-events-none"
        viewBox="0 0 100 100"
      >
        <path
          id={pathId}
          d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0"
          fill="transparent"
        />
        <text className="text-[7.5px] font-bold uppercase tracking-[0.24em] fill-primary dark:fill-on-primary">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Static center element */}
      <div className="text-xl md:text-2xl font-bold font-display text-primary dark:text-on-primary text-center leading-none mt-[2px]">
        {centerText}
      </div>
    </div>
  );
}
