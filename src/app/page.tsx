import Hero from '@/components/modules/home/Hero';
import About from '@/components/modules/home/About';
import Methodology from '@/components/modules/home/Methodology';
import CallToAction from '@/components/modules/home/CallToAction';
import Testimonials from '@/components/modules/home/Testimonials';
import Works from '@/components/modules/home/Works';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Methodology />
      <Works />
      <Testimonials />
      <CallToAction />
    </main>
  );
}

// <main className='container relative'>
//     <h1>Marbi Technology</h1>
//    <div className="relative">
//       <Button className="bg-secondary px-6 py-2 text-[1rem] font_manrope text-white rounded-md" />
//       <div className="absolute z-[10] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//    </div>

//   </main>
