'use client';

import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({ 
  children, 
  className,
  delay = 0,
  direction = 'up',
  ...props 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  };
  
  const animateVariants = {
    hidden: directionVariants[direction],
    visible: { 
      y: 0, 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut'
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animateVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}


