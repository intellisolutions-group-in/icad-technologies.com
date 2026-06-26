"use client";

import React from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string; // Classes for the wrapper container (e.g. h-64 w-full, rounded-xl)
  imgClassName?: string; // Classes for the image element itself
  speed?: number; // Kept for backward compatibility
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
}: ParallaxImageProps) {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${imgClassName}`}
      />
    </div>
  );
}
