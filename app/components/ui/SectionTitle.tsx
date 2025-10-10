'use client';

import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = true, 
  className,
  ...props 
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        'mb-12',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E6E6E6] mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-[#B3B3B3] max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
