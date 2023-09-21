import * as React from 'react';

import clsxm from '@/utils/clsxm';

const QuoteIcon: React.FC<React.ComponentProps<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 43 28'
      fill='none'
      className={clsxm('h-7 w-11', className)}
      {...props}
    >
      <path
        d='M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z'
        fill='url(#paint0_linear_171429_2783)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_171429_2783'
          x1='28.8615'
          y1='-24.7969'
          x2='41.7939'
          y2='24.1471'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.00887753' stopColor='#DEEBFA' />
          <stop offset='0.4204' stopColor='#9DBEF0' />
          <stop offset='0.5512' stopColor='#72BBFE' />
          <stop offset='1' stopColor='#57A0F6' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { QuoteIcon };
