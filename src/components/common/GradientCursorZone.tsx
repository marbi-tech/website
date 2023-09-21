'use client';

import * as React from 'react';

import clsxm from '@/utils/clsxm';

interface GradientCursorZoneProps {
  className?: string;
  children?: React.ReactNode;
  cursorClassName?: string;
  cursorColor?: string;
}

const GradientCursorZone: React.FC<GradientCursorZoneProps> = (props) => {
  const gradientCursorRef = React.useRef<HTMLSpanElement>(null);
  const gradientCursorContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (gradientCursorRef.current && gradientCursorContainerRef.current) {
          const { left, top, width, height } =
            gradientCursorContainerRef.current.getBoundingClientRect();

          const clampedX = clampValue(e.clientX - left, 0, width);
          const clampedY = clampValue(e.clientY - top, 0, height);

          gradientCursorRef.current.style.left = `${clampedX}px`;
          gradientCursorRef.current.style.top = `${clampedY}px`;
        }
      });
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={gradientCursorContainerRef}
      className={clsxm(['relative isolate overflow-hidden', props.className])}
    >
      {props.children}
      {/* CURSOR */}
      <GradientCursor
        ref={gradientCursorRef}
        style={{
          background: props.cursorColor || '#1e1a64',
        }}
        className={clsxm([
          'pointer-events-none absolute -z-10 -translate-x-1/2 -translate-y-1/2',
          'left-full top-full',
          props.cursorClassName,
        ])}
      />
    </div>
  );
};

const GradientCursor = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithRef<'span'>
>(({ style, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      style={{
        borderRadius: 700,
        filter: 'blur(200px)',
        willChange: 'left,top,transform,opacity',
        WebkitTransition:
          'left 200ms ease-out,top 200ms ease-out,opacity 100ms ease-out,transform 200ms ease-out,scale 200ms ease-out',
        transition:
          'left 200ms ease-out,top 200ms ease-out,opacity 200ms ease-out,transform 200ms ease-out,scale 200ms ease-out',
        ...style,
      }}
      className={clsxm(['h-[34.625rem] w-[34.625rem]', className])}
      {...props}
    ></span>
  );
});

//? utility to clamp the value
const clampValue = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export default GradientCursorZone;
