'use client';

import { createPortal } from 'react-dom';

import React from 'react';

interface PortalProps {
  children: React.ReactNode;
  rootId?: string;
}

const Portal: React.FC<PortalProps> = (props) => {
  const modalPortalRef = React.useRef<Element | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    modalPortalRef.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && modalPortalRef.current
    ? createPortal(props.children, modalPortalRef.current)
    : null;
};

export default Portal;
