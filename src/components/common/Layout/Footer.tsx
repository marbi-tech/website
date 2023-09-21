'use client';

import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';

import Logo from '@/assets/images/logo.png';
import { footers } from '@/constants/constants';
import { PRIMARY_NAVIGATIONS } from '@/constants/navigations';

const Footer: React.FC = () => {
  return (
    <section className='container mb-6 flex flex-col items-start justify-start gap-10 py-6 md:flex-row md:items-center'>
      {/* Logo and Company Details */}
      <div>
        <Image
          src={Logo}
          height={80}
          width={120}
          alt='Logo'
          className='mb-[1rem]  pb-4 lg:-ml-[0.8rem]'
        />

        {footers.company_details.map((detail) => (
          <div
            key={detail.id}
            className='flex items-center justify-start gap-2'
          >
            <detail.icon color='#1B74BA' />
            <h1 className='text-text'>{`${detail.name}:`}</h1>
            <p className='text-text'>{detail.details}</p>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div>
        <h1 className='text-[1.3rem] text-text'>Navigation Links</h1>

        <div className='mt-6 flex flex-col gap-1'>
          {PRIMARY_NAVIGATIONS.map((nav) => (
            <Link
              key={nav.link}
              href={nav.link}
              className='text-text hover:text-primary hover:underline'
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
