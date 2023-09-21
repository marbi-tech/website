import * as React from 'react';

import clsxm from '@/utils/clsxm';

interface pageProps {
  className?: string;
}

const Page: React.FC<pageProps> = (props) => {
  return <div className={clsxm(['', props.className])}>page</div>;
};

export default Page;
