import { texts } from '@/constants/constants';
import { WORK_METHODOLOGY } from '@/constants/homePage';

import React from 'react';

interface WorkCardProps {
  Illustration: React.ComponentType<React.ComponentProps<'svg'>>;
  heading: string;
  description: string;
}

const Methodology = () => {
  return (
    <section className='container my-20 md:my-28 lg:my-40'>
      <h1 className='text-center text-[1.5rem] font-bold md:text-left md:text-[2rem] lg:text-[2.3rem]'>
        Work Methodology
      </h1>

      {/* Work Methodology Cards */}
      <div className='mt-12 flex flex-col items-center justify-center gap-y-12 '>
        {WORK_METHODOLOGY.cards.map((method) => (
          <WorkCard
            key={method.id}
            Illustration={method.Illustration}
            heading={method.title}
            description={method.paragraph}
          />
        ))}
      </div>

      {/* Web APPs section */}
      <div className='mt-[10rem] hidden flex-col  items-center justify-center md:flex md:flex-row md:justify-between md:gap-6 lg:gap-8'>
        {texts.works.map((work) => (
          <React.Fragment key={work.id}>
            <h1 className='flex items-center text-2xl font-bold'>
              {work.name}
            </h1>

            <span className='inline-block h-full w-[0.0108rem] bg-black-30 text-transparent last:hidden'>
              |
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const WorkCard: React.FC<WorkCardProps> = ({
  Illustration,
  heading,
  description,
}) => {
  return (
    <div className='flex  flex-col items-center justify-start  md:flex-row lg:max-w-[50rem]'>
      {/* Image Section */}
      <div className='relative mb-8 h-[12.5rem] w-[12.5rem] shrink-0 overflow-hidden rounded-full border border-black-4 lg:mb-0'>
        <Illustration width={200} height={200} />
      </div>
      {/* Text Section */}
      <div className='md:ml-[2rem]'>
        <h1 className='heading_card text-center font-semibold md:text-start'>
          {heading}
        </h1>
        <p className='paragraph_card mt-[0.5rem] text-justify lg:text-start'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Methodology;
