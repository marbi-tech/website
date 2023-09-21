import * as React from 'react';

import clsxm from '@/utils/clsxm';

const Times: React.FC<React.ComponentProps<'svg'>> = ({
  className,
  ...restProps
}) => {
  return (
    <svg
      viewBox='0 0 27 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsxm(['h-6 w-6', className])}
      {...restProps}
    >
      <path
        d='M1 25.8301L25.8301 1'
        stroke='currentColor'
        strokeWidth='1.87821'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M25.8301 25.8301L1 1'
        stroke='currentColor'
        strokeWidth='1.87821'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export { Times };
