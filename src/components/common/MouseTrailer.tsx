'use client';

import * as React from 'react';

import clsxm from '@/utils/clsxm';

interface MouseTrailerProps extends React.ComponentPropsWithRef<'span'> {
  className?: string;
  children?: React.ReactNode;
}

const MouseTrailer: React.FC<MouseTrailerProps> = (props) => {
  const cursorRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span
      ref={cursorRef}
      style={{
        willChange: 'left,top,transform,opacity',
        WebkitTransition:
          'left 200ms ease-out,top 200ms ease-out,opacity 100ms ease-out,transform 200ms ease-out,scale 200ms ease-out',
        transition:
          'left 200ms ease-out,top 200ms ease-out,opacity 200ms ease-out,transform 200ms ease-out,scale 200ms ease-out',
      }}
      className={clsxm([
        'pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2',
        'h-10 w-10 rounded-full border border-blue-500',
        'backdrop-hue-rotate-180 backdrop-invert backdrop-filter ',
        props.className,
      ])}
      {...props}
    ></span>
  );
};

export default MouseTrailer;
