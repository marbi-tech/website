'use client';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import clsxm from '@/utils/clsxm';
import Logo from '@/assets/images/logo.png';
import ContactButton from '@/components/common/ContactButton';
import { PRIMARY_NAVIGATIONS } from '@/constants/navigations';
import MobileNavigation from '@/components/common/Layout/MobileNavigation';

const Header: React.FC = () => {
  const [isSticky, setSticky] = React.useState(false);

  const currentPath = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={clsxm([
        'fixed left-0 top-0 z-50 w-full duration-200',
        isSticky
          ? 'border-b bg-white bg-opacity-90 py-0.5 backdrop-blur-sm'
          : 'py-2',
      ])}
      initial={{
        translateY: '-100%',
      }}
      animate={{
        translateY: '0%',
      }}
      transition={{
        delay: 1,
        duration: 0.3,
      }}
    >
      <header className='container'>
        <nav className='flex items-center justify-between '>
          {/* Logo Section */}
          <div className='flex-start flex flex-1 items-center'>
            <div className='relative h-[4rem] w-[8rem]  '>
              <Image
                src={Logo}
                fill
                alt='Logo'
                className='object-scale-down object-left'
              />
            </div>
            <ul className='hidden gap-x-8 border-l border-l-black-8 pl-5 lg:flex'>
              {PRIMARY_NAVIGATIONS.map((nav) => (
                <li key={nav.link}>
                  <Link
                    href={nav.link}
                    className={clsxm([
                      'relative font-manrope text-[1rem] font-normal text-[#2B2B2B]',
                      'after:absolute after:-bottom-1 after:left-1/2 after:h-[0.08rem] after:w-full after:-translate-x-1/2 after:scale-x-0 after:bg-[currentColor] after:opacity-80 after:duration-300',
                      'hover:after:scale-x-100',
                      currentPath === nav.link && 'after:scale-x-100',
                    ])}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Button Section */}
          <div className='flex items-center gap-x-6'>
            <ContactButton className='hidden rounded-2xl px-6 py-2 md:flex'>
              Let&lsquo;s Talk
            </ContactButton>

            <MobileNavigation />
          </div>
        </nav>
      </header>
    </motion.div>
  );
};

export default Header;
