'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-ignore
import { Autoplay } from 'swiper/core';

import clsxm from '@/utils/clsxm';
// Import Swiper styles
import 'swiper/css';
import { TESTIMONIALS } from '@/constants/homePage';
import { StaticImageData } from 'next/image';

interface WorkCardProps {
  className?: string;
  fullName: string;
  statement: string;
  image: StaticImageData | string | null;
}

const Works = () => {
  return (
    <section className='container my-20 md:my-28 lg:my-44'>
      <h1 className='text-center text-[1.5rem] font-bold md:text-left md:text-[2rem] lg:text-[2.3rem]'>
        Our Works
      </h1>

      {/* Work Works Cards */}
      <div className='mt-8'>
        <Swiper
          modules={[Autoplay]}
          containerModifierClass='py-6'
          mousewheel={{
            forceToAxis: true,
          }}
          grabCursor
          autoplay={{
            disableOnInteraction: true,
          }}
          loop
          breakpoints={{
            1: {
              slidesPerView: 1.3,
            },

            768: {
              slidesPerView: 2.3,
              spaceBetween: 30,
            },
            1020: {
              slidesPerView: 3.3,
              spaceBetween: 40,
            },
          }}
        >
          {TESTIMONIALS.map((props, i) => (
            <SwiperSlide key={i} className='pb-8'>
              <WorkCard {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const WorkCard: React.FC<WorkCardProps> = (props) => {
  return (
    <div
      className={clsxm([
        'select-none overflow-hidden rounded-md shadow-lg',
        props.className,
      ])}
    >
      {/* //?  foreground  */}
      <div className='bg-white'>
        <div className='aspect-h-9 aspect-w-16 relative mx-auto w-full shrink-0 overflow-hidden rounded-md border border-black-4 bg-[#a0dbdb]'></div>
        {/* Text Section */}

        <div className='-mt-2 rounded-md border p-4 lg:h-[11.25rem]'>
          <h4 className='text-center text-[1.1rem] font-semibold'>
            {props.fullName}
          </h4>
          <p className='line-clamp-5 text-justify'>{props.statement}</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
