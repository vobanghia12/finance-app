import React from 'react';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';

interface MobileMenuProps {
  className: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        'fixed top-[65px] left-0 z-30 w-full h-full backdrop-blur-xl pt-10 backdrop-saturate-150 transition-all duration-500 ease-linear delay-100',
        className
      )}
    >
      <ul className='list-none flex flex-col px-10 justify-center gap-8 '>
        <li className='text-lg text-primary-25'>Testimonials</li>
        <li className='text-lg text-primary-25'>FAQs</li>
        <li className='flex w-full justify-between'>
          <Button className='rounded-full border-black mr-2 border-2 w-24 hover:bg-slate-100 flex-1'>
            Sign Up
          </Button>
          <Button className=' bg-primary-25 rounded-full font-semibold hover:bg-primary-25/50 flex-1 shadow-lg shadow-primary-25/40'>
            Log In
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
