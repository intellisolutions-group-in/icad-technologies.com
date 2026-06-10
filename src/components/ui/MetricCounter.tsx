"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MetricCounterProps {
  value: string; // E.g. "35" or "99.99" or "300"
  prefix?: string; // E.g. "-" or "+" or "$"
  suffix?: string; // E.g. "%" or "+" or "x"
  className?: string;
}

export default function MetricCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: MetricCounterProps) {
  const hasNumbers = /[\d.]+/.test(value);

  if (!hasNumbers) {
    return <span className={className}>{value}</span>;
  }

  return (
    <AnimatedMetricCounter
      value={value}
      prefix={prefix}
      suffix={suffix}
      className={className}
    />
  );
}

function AnimatedMetricCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: MetricCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayVal, setDisplayVal] = useState("0");

  useGSAP(() => {
    // Extract negative sign
    const isNegative = value.startsWith("-");
    const absValue = isNegative ? value.slice(1) : value;

    // Match numeric part
    const numericMatch = absValue.match(/[\d.]+/);
    const numericPart = numericMatch ? numericMatch[0] : "";
    
    if (!numericPart) {
      setDisplayVal(value);
      return;
    }

    const numericIndex = absValue.indexOf(numericPart);
    const parsedPrefix = (isNegative ? "-" : "") + absValue.slice(0, numericIndex);
    const parsedSuffix = absValue.slice(numericIndex + numericPart.length);

    const target = parseFloat(numericPart);
    if (isNaN(target)) {
      setDisplayVal(value);
      return;
    }

    const isFloat = numericPart.includes(".");
    const decimalPlaces = isFloat ? (numericPart.split(".")[1] || "").length : 0;

    const counterObj = { val: 0 };

    gsap.to(counterObj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        let formattedNum = "";
        if (isFloat) {
          formattedNum = counterObj.val.toFixed(decimalPlaces);
        } else {
          formattedNum = Math.floor(counterObj.val).toString();
        }
        setDisplayVal(`${parsedPrefix}${formattedNum}${parsedSuffix}`);
      },
    });
  }, { scope: elementRef });

  return (
    <span ref={elementRef} className={className}>
      {displayVal}
    </span>
  );
}
