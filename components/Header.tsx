import React from 'react';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { cn } from '@/lib/utils';
import Ripple from './magicui/ripple';
import { Button } from './ui/button';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className='flex flex-col w-full justify-center items-center pt-24 absolute'>
      <h1 className=' text-primary-75 font-bold text-5xl lg:text-6xl text-center'>
        Explore New
        <div className='text-primary-75 font-bold text-5xl lg:text-6xl'>
          Financial Solution
        </div>
      </h1>
      <div className='z-10 flex min-h-[16rem] items-center justify-center'>
        <ShimmerButton className='shadow-2xl' shimmerSize='0.25rem'>
          <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
            Get Started
          </span>
        </ShimmerButton>
      </div>
      <div className=' flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl'>
        <Ripple />
      </div>
    </header>
  );
};

export default Header;
