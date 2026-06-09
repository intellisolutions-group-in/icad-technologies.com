import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white" | "neumorphic" | "neumorphic-orange" | "neumorphic-dark";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-mono font-bold uppercase tracking-[0.12em] transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none rounded-full";

  const variants = {
    primary: "bg-primary text-on-primary hover:bg-secondary hover:text-white dark:bg-on-primary dark:text-primary dark:hover:bg-secondary dark:hover:text-white hover:scale-[1.05] active:scale-[0.95]",
    secondary: "bg-secondary text-on-secondary hover:bg-secondary/95 hover:scale-[1.05] active:scale-[0.95]",
    outline: "border border-outline bg-transparent text-primary hover:bg-primary hover:text-on-primary dark:text-on-primary dark:hover:bg-on-primary dark:hover:text-primary hover:scale-[1.05] active:scale-[0.95]",
    ghost: "text-on-surface hover:text-secondary dark:text-on-primary hover:scale-[1.05] active:scale-[0.95]",
    white: "bg-white text-primary hover:bg-secondary hover:text-white hover:scale-[1.05] active:scale-[0.95]",
    neumorphic: "neumorphic-btn-raised",
    "neumorphic-orange": "neumorphic-orange-raised",
    "neumorphic-dark": "neumorphic-btn-dark-raised"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[10px] h-8",
    md: "px-4 py-2 text-[11px] h-9",
    lg: "px-5 py-2.5 text-[12px] h-10"
  };

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
