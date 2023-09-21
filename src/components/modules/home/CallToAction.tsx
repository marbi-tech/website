import React from 'react';

import { texts } from '@/constants/constants';
import GradientCursorZone from '@/components/common/GradientCursorZone';
import ContactButton from '@/components/common/ContactButton';

const CallToAction = () => {
  return (
    <GradientCursorZone className='container my-10 flex flex-col items-center justify-center gap-8 bg-[#000033] py-8 text-center xs:rounded-lg lg:py-16'>
      <h1 className='px-8 font-manrope text-[1.5rem] text-white lg:px-20 lg:text-[2.5rem]'>
        {texts.cta.title}
      </h1>
      <ContactButton>Let&#39;s Talk</ContactButton>
    </GradientCursorZone>
  );
};

export default CallToAction;
