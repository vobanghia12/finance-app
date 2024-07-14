import React from 'react';
import { Button } from './ui/button';

const MobileMenu = () => {
  return (
    <div className='fixed top-[65px] left-0 z-30 w-full h-full backdrop-blur-xl pt-10 transition-all duration-400 delay-1000 ease-in-out'>
      <ul className='list-none flex flex-col px-6 justify-center gap-8 '>
        <li>Testimonials</li>
        <li>FAQs</li>
        <li>
          <Button className='rounded-full border-black mr-2 border-2 w-24 hover:bg-slate-100'>
            Sign Up
          </Button>
        </li>
        <li>
          <Button className=' bg-primary-25 rounded-full font-semibold hover:bg-primary-25/50 w-24 shadow-lg shadow-primary-25/40'>
            Log In
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
