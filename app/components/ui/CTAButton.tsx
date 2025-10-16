"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  textColor?: string;
  style?: React.CSSProperties;
}

export default function CTAButton({
  children,
  onClick,
  variant = "primary",
  size = "lg",
  className = "",
  textColor,
  style,
}: CTAButtonProps) {
  const baseClasses =
    "font-neue font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden";

  const variantClasses = {
    primary: "text-black font-bold transition-all duration-300",
    secondary:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
  };

  const sizeClasses = {
    sm: "text-sm px-6 py-3",
    md: "text-base px-7 py-3.5",
    lg: "text-lg px-8 py-4",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{
        ...(variant === "primary"
          ? {
              background: "linear-gradient(135deg, #FDB927, #FFB600)",
              boxShadow: "0 4px 15px rgba(253, 185, 39, 0.4)",
              borderRadius: "9999px",
              fontWeight: "600",
              transition: "all 0.3s ease-in-out",
            }
          : {}),
        ...style,
      }}
    >
      <span
        className="relative z-10"
        style={{
          color: textColor || (variant === "primary" ? "black" : "white"),
        }}
      >
        {children}
      </span>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
    </motion.button>
  );
}
