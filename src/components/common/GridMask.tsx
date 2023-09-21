import * as React from 'react';

import clsxm from '@/utils/clsxm';

interface GridMaskProps {
  className?: string;
  columnColor?: string;
  disableContainer?: boolean;
}

const GridMask: React.FC<GridMaskProps> = (props) => {
  return (
    <div
      className={clsxm([
        'grid-layout fixed inset-0 z-[10000000000] h-screen w-screen border border-[red]',
        !props.disableContainer && 'container',
        props.className,
      ])}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className='h-full opacity-10'
          style={{
            backgroundColor: props.columnColor || 'red',
          }}
        ></div>
      ))}
    </div>
  );
};

export default GridMask;
