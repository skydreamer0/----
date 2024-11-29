"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  direction = "up", 
  delay = 0,
  className = "" 
}: FadeInProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: -20 },
    right: { x: 20 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{ 
        duration: 0.6,
        delay 
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 