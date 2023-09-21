import { HiMail } from 'react-icons/hi';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

import falano from '@/assets/images/falano.png';
import mapping from '@/assets/images/mapping.png';
import people01 from '@/assets/images/people01.png';
import people02 from '@/assets/images/people02.png';
import people03 from '@/assets/images/people03.png';
import way_of_humanity from '@/assets/images/way_of_humanity.png';

// Navigation Links
export const nav_links = [
  {
    id: 'work',
    name: 'Work',
  },
  {
    id: 'about_us',
    name: 'About Us',
  },
];

// Various Texts
export const texts = {
  hero: {
    title: 'What is now proved was once only Imagined ',
    paragraph:
      'Our team of experts uses a methodology to identify solution to fit your needs. ',
  },
  content: {
    title: 'What are we?',
    paragraph:
      'Marbi Tech is a technology company that specializes in custom software and hardware services. Our experienced team delivers world-class IT solutions to global clients, prioritizing customer care and innovation.',
  },
  works: [
    { id: 'web_apps', name: 'Web Apps' },
    { id: 'mobile_apps', name: 'Mobile Apps' },
    { id: 'mapping', name: '3D Mapping' },
    { id: 'iot', name: 'IoT' },
  ],
  cta: {
    title: 'Are you ready to take your business to new heights?',
  },
};

// Our Works
export const our_works = {
  title: 'Our Works',
  paragraph: 'Selection of signature projects',
  images: [
    { id: 'way_of_humanity', img: way_of_humanity },
    { id: 'falano', img: falano },
    { id: 'mapping', img: mapping },
  ],
};

// Testimonials Section
export const testimonials = {
  title: 'What people are saying about us',
  cards: [
    {
      id: 'herman_jensen',
      paragraph:
        'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      name: 'Elizabet Olsen',
      position: 'Founder and CEO',
      img: people01,
    },
    {
      id: 'herman_jensen',
      paragraph:
        'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      name: 'Herman Jhonson',
      position: 'Founder and CTO',
      img: people02,
    },
    {
      id: 'herman_jensen',
      paragraph:
        'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      name: 'Ramiz Raza',
      position: 'Founder and CFO',
      img: people03,
    },
  ],
};

// Footers Section
export const footers = {
  links: {
    title: 'Navigations',
    link: [
      { id: 'home', name: 'Home' },
      { id: 'works', name: 'Works' },
      { id: 'about_us', name: 'About Us' },
    ],
  },
  company_details: [
    {
      id: 'location',
      icon: FaMapLocationDot,
      name: 'Location',
      details: 'Kalanki, Kathmandu',
    },
    {
      id: 'phone',
      icon: FaPhoneSquareAlt,
      name: 'Phone',
      details: '+977 (98477) 44-774',
    },
    {
      id: 'email',
      icon: HiMail,
      name: 'E-mail',
      details: 'sales@marbitechin.com',
    },
  ],
};
