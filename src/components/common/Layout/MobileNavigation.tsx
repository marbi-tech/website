'use client';

import Link from 'next/link';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import clsxm from '@/utils/clsxm';
import Portal from '@/components/common/Portal';
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { PRIMARY_NAVIGATIONS } from '@/constants/navigations';
import ContactButton from '@/components/common/ContactButton';

interface MobileNavigationProps {
  className?: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  const [showNavMenu, setShowNavMenu] = React.useState(false);

  const path = usePathname();
  useBodyScrollLock(showNavMenu);
  return (
    <>
      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        className='rounded p-1.5 hover:bg-white-60 lg:hidden'
        onClick={() => setShowNavMenu((prev) => !prev)}
      >
        {showNavMenu ? <RiCloseFill size={24} /> : <RiMenu3Line size={24} />}
      </motion.button>

      <AnimatePresence>
        {showNavMenu && (
          <Portal>
            <motion.div
              className={clsxm([
                'fixed left-0 top-0 z-[1000] h-screen w-screen overflow-y-auto bg-black-10',
                props.className,
              ])}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                staggerChildren: 0.1,
              }}
            >
              <motion.div
                className='h-full bg-white'
                initial={{
                  clipPath: 'circle(0% at 100% 0)',
                  transitionTimingFunction: 'cubic-bezier(0.34,0.25,0.87,0.65)',
                }}
                animate={{
                  clipPath: 'circle(150% at 100% 0)',
                  transitionTimingFunction: 'cubic-bezier(0,.7,.53,.99)',
                }}
                exit={{
                  clipPath: 'circle(0% at 100% 0)',
                  transitionTimingFunction: 'cubic-bezier(0.34,0.25,0.87,0.65)',
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <div className='container'>
                  <div className='flex justify-end pt-6'>
                    <motion.button
                      whileTap={{
                        scale: 0.9,
                      }}
                      type='button'
                      onClick={() => setShowNavMenu(false)}
                      className='rounded p-1.5 hover:bg-black-8'
                    >
                      <RiCloseFill size={24} />
                    </motion.button>
                  </div>

                  {/* nav links */}
                  <ul className='mt-14 flex flex-col items-center justify-center gap-y-4'>
                    {PRIMARY_NAVIGATIONS.map((nav) => (
                      <li key={nav.link}>
                        <Link
                          href={nav.link}
                          className={clsxm([
                            'text-center text-[2rem] font-bold md:text-[2.8rem]',
                            'inline-flex h-[1.4em] flex-col overflow-hidden ',
                            path === nav.link
                              ? 'bg-[radial-gradient(64.33%_64.33%_at_71.16%_35.69%,_#1881E2_0.89%,_#72A6F3_17.23%,_#62B1FB_55.12%,_#2988E0_71.54%,_#1065B3_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                              : 'relative   [&:hover>span]:-translate-y-[110%]  [&>span]:duration-300  [&>span]:ease-[cubic-bezier(0.57,0,0.37,0.99)]',
                          ])}
                        >
                          <span> {nav.label}</span>
                          <span> {nav.label}</span>
                        </Link>
                      </li>
                    ))}

                    {/* contact */}
                  </ul>

                  <div className='border-t-10 mt-10 flex justify-center border-t pt-10 lg:hidden'>
                    <ContactButton className='rounded-2xl px-16 py-3'>
                      Let&lsquo;s Talk
                    </ContactButton>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
