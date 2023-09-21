'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import UserPlaceholderImage from '@/assets/placeholders/user-placeholder.webp';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-ignore
import { Autoplay } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';

import { QuoteIcon } from '@/icons';
import { TESTIMONIALS } from '@/constants/homePage';

interface TestimonialProps {
  id?: string;
  content: string;
  name: string;
  photo: StaticImageData | string | null;
  position?: string | null;
}

const Testimonials = () => {
  return (
    <section className='container my-20 md:my-28 lg:my-36'>
      {/* Heading */}
      <div>
        <h1 className='heading mb-14'>
          What people are <br /> saying about us
        </h1>
      </div>

      {/* Cards */}
      <div className='mt-8'>
        <Swiper
          modules={[Autoplay]}
          slidesPerView='auto'
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
          {TESTIMONIALS.map((card, i) => (
            <SwiperSlide key={card.id + i}>
              <TestimonialCard
                content={card.statement}
                photo={card.image}
                name={card.fullName}
                position={card.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  content,
  name,
  photo,
  position,
}) => {
  return (
    <div className='relative isolate flex h-[366px] select-none flex-col'>
      <QuoteIcon width={44} height={28} className='opacity-90' />
      {/* Content */}
      <p className=' mb-6 mt-10 font-poppins text-[1.125rem] leading-[1.8] tracking-[0.023rem] text-[#373737]'>
        {content}
      </p>
      {/* Personal Details */}
      <div className='mt-auto flex items-center gap-4'>
        <div className='relative h-12 w-12 overflow-hidden rounded-full'>
          <Image
            src={photo || UserPlaceholderImage}
            alt={`${name} profile picture`}
            fill
            className='object-cover'
          />
        </div>
        <div className=''>
          <h1 className='text-[1.25rem] text-[#373737]'>{name}</h1>
          <p className='text-[1rem] text-[#373737] opacity-70'>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
