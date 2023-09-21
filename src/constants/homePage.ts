import {
  Discovery,
  Analysis,
  ScopeDefination,
  Consultation,
} from '@/assets/illustrations';

// Work Methodology
const WORK_METHODOLOGY = {
  title: 'Work Methodology',
  cards: [
    {
      id: 'discovery',
      title: 'Discovery',
      paragraph:
        "We'll engage in in-depth discussions with your team to understand your business, goals, and pain points.",
      Illustration: Discovery,
    },
    {
      id: 'analysis',
      title: 'Analysis',
      paragraph:
        'Our experts will analyze your requirements and devise a strategic plan that aligns technology with your business objectives.',
      Illustration: Analysis,
    },
    {
      id: 'scope_definition',
      title: 'Scope Definition',
      paragraph:
        "We'll provide a detailed project scope that outlines the tasks, timelines, and resources required for each phase of your digital solution.",
      Illustration: ScopeDefination,
    },
    {
      id: 'consultation',
      title: 'Consultation',
      paragraph:
        "We'll present our findings and recommendations, answering any questions you may have, and fine-tuning the scope to your satisfaction.",
      Illustration: Consultation,
    },
  ],
};

const TESTIMONIALS = [
  {
    id: '01',
    fullName: 'Sulata Dhakal',
    statement: 'I am running my business fluently.',
    image: null,
    designation: null,
  },
  {
    id: '02',
    fullName: 'Raj Bikram Maharjan',
    statement:
      'I installed an automatic water pump controller in my home  to help regulate the water in overhead tank.  It has worked perfectly, and I have had no issues with it. It has been a great investment and has given me peace of mind.',
    image: null,
    designation: 'CEO',
  },
  {
    id: '03',
    fullName: 'Sudip Chaulagain',
    statement:
      'I installed an automatic water pump controller in my home  to help regulate the water in overhead tank.  It has worked perfectly, and I have had no issues with it. It has been a great investment and has given me peace of mind.',
    image: null,
    designation: null,
  },
];
export { WORK_METHODOLOGY, TESTIMONIALS };
