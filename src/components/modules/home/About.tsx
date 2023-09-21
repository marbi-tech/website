import React from 'react';
import { texts } from '@/constants/constants';
import { Button } from '@/components/ui';

const About = () => {
  return (
    <section className='container mt-20 flex flex-col items-center justify-start md:flex-row'>
      {/* Left Section */}
      <div className='flex flex-1 flex-col justify-start'>
        <h1 className='heading'>{texts.content.title}</h1>
        <p className='mt-2 px-1 font-poppins text-[1.1rem] font-normal leading-[2rem] text-[#313131] lg:w-[48ch]'>
          {texts.content.paragraph}
        </p>
      </div>

      {/* Right Section */}
      <div className='mt-8 flex flex-1  lg:mt-0'>
        <Button variant='primary' className=''>
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default About;
