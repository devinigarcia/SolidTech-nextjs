'use client';

import { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionWrapper({ 
  children, 
  className,
  background = 'white',
  padding = 'lg',
  ...props 
}: SectionWrapperProps) {
  const backgroundClasses = {
    white: 'bg-background-surface',
    gray: 'bg-background-secondary',
    gradient: 'gradient-bg',
    dark: 'bg-background-primary text-text-primary',
  };
  
  const paddingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20 lg:py-24',
    xl: 'py-20 md:py-24 lg:py-32',
  };
  
  return (
    <section
      className={clsx(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
