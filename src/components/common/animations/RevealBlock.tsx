'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Map API "type" vaules to JSX tag names
enum TagMap {
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'span',
  'div',
}

// RevealBlock
// Handles the deconstruction of each word and character to setup for the
// individual character animations
interface RevealBlockProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  type: keyof typeof TagMap;
  delay?: number;
}

const RevealBlock: React.FC<RevealBlockProps> = ({
  children,
  type,
  delay,
  ...rest
}: React.PropsWithChildren<RevealBlockProps>) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      opacity: 0,
      rotateX: '270deg',
      translateY: '180px',
    },
    visible: {
      opacity: 1,
      rotateX: '360deg',
      translateY: '0px',
      transition: {
        duration: 0.6,
        ease: [0.455, 0.03, 0.515, 0.955],
        delay: delay || 0.1,
      },
    },
  };

  // Get the tag name from tagMap
  const Tag = type;

  return (
    <Tag {...rest}>
      <motion.span
        style={{ display: 'inline-block' }}
        initial='hidden'
        animate='visible'
        variants={item}
      >
        {children}
      </motion.span>
    </Tag>
  );
};

export default RevealBlock;
