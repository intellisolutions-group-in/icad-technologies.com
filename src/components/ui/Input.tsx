import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-xs w-full">
        {label && (
          <label className="block text-label-sm font-label-sm text-on-surface-variant dark:text-on-primary-container/80">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-md py-3 rounded-lg border-2 bg-white text-on-surface border-surface-container focus:border-primary focus:ring-0 outline-none transition-all dark:bg-primary-container dark:text-on-primary dark:border-primary-fixed-dim/20 ${
            error ? "border-error focus:border-error" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-label-sm text-error">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-xs w-full">
        {label && (
          <label className="block text-label-sm font-label-sm text-on-surface-variant dark:text-on-primary-container/80">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full p-md rounded-xl border-2 bg-white text-on-surface border-surface-container focus:border-primary focus:ring-0 outline-none resize-none transition-all dark:bg-primary-container dark:text-on-primary dark:border-primary-fixed-dim/20 ${
            error ? "border-error focus:border-error" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-label-sm text-error">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
