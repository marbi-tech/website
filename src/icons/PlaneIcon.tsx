import * as React from 'react';

import clsxm from '@/utils/clsxm';

const PlaneIcon: React.FC<React.ComponentProps<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      className={clsxm(['h-6 w-6', className])}
      {...props}
    >
      <path
        fill='currentColor'
        d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z'
      />
    </svg>
  );
};

export { PlaneIcon };
