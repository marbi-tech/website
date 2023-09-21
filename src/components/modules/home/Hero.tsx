'use client';
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import { texts } from '@/constants/constants';
import Arrow from '@/assets/images/Arrow - Up.png';
import HeroLottie from '@/assets/lotties/hero.json';
import GradientCursorZone from '@/components/common/GradientCursorZone';
import RevealBlock from '@/components/common/animations/RevealBlock';
import ContactButton from '@/components/common/ContactButton';

const Hero = () => {
  return (
    <GradientCursorZone
      cursorColor='#bccded'
      className='w-screen py-20 lg:h-screen'
    >
      <section className='grid-layout container mb-4 h-full w-full place-items-center gap-y-4 lg:max-h-[900px] lg:py-20'>
        {/* Left Section */}
        <div className='col-span-full md:col-span-6 md:col-start-2 lg:col-span-7 lg:col-start-1 lg:my-6'>
          <RevealBlock
            type='h1'
            className='max-w-[40rem] text-center font-poppins text-[2.2rem] font-bold leading-[3.5rem] text-[#2B2B2B] md:text-[2.5rem] md:leading-[4.5rem] lg:text-left lg:text-[3.5rem] lg:leading-[5rem] 2xl:text-[4rem] 2xl:leading-[6rem]'
          >
            What is now proved was once only{' '}
            <span className='bg-[radial-gradient(64.33%_64.33%_at_71.16%_35.69%,_#1881E2_0.89%,_#72A6F3_17.23%,_#62B1FB_55.12%,_#2988E0_71.54%,_#1065B3_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] '>
              Imagined
            </span>
          </RevealBlock>

          <div className='mr-5 mt-5 flex flex-col items-center justify-start gap-y-6 sm:flex-row sm:items-center sm:justify-between lg:items-start'>
            <RevealBlock
              type='p'
              className='mt-2 w-[25ch] px-1 text-center font-poppins text-[1.2rem] font-normal leading-[2rem] text-[#313131] lg:w-[36ch] lg:text-left'
            >
              {texts.hero.paragraph}
            </RevealBlock>

            <RevealBlock type='div'>
              <LetsTalk />
            </RevealBlock>
          </div>
        </div>

        {/* Right Section */}
        <div className='relative col-span-full row-start-1 md:col-span-6 md:col-start-2 lg:col-span-5 lg:col-start-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              delay: 0.6,
              duration: 0.4,
            }}
          >
            <Lottie animationData={HeroLottie} />
          </motion.div>
        </div>
      </section>
    </GradientCursorZone>
  );
};

const LetsTalk = () => {
  return (
    <ContactButton
      variant='none'
      className='group flex min-h-[7rem] min-w-[7rem] flex-col items-center justify-center rounded-full border-2 border-primary bg-white-40  p-4 font-semibold text-primary hover:border-primary-700 hover:bg-primary-50 hover:text-primary-700'
    >
      <div className='flex items-center'>
        <div> Let&apos;s </div>
        <Image
          src={Arrow}
          alt='arrow'
          width={33}
          height={33}
          className='duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
        />
      </div>
      <span>Talk</span>
    </ContactButton>
  );
};

export default Hero;
