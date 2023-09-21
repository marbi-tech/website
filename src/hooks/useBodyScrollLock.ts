'use client';
import { useEffect } from 'react';

//? USE: This hook prevents scroll of document
//? ARG: takes a boolean value to trigger scroll lock

const useBodyScrollLock = (flag: boolean) => {
  useEffect(() => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');

    if (!body || !html) return;

    if (flag && body && html) {
      body.style.overflowY = 'hidden';
      html.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
      html.style.overflowY = 'auto';
    }

    return () => {
      body.style.overflowY = 'auto';
      html.style.overflowY = 'auto';
    };
  }, [flag]);
};

export default useBodyScrollLock;
