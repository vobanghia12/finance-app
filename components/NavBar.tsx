'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from './ui/navigation-menu';
import { IoCardSharp, IoClose } from 'react-icons/io5';
import { Button } from './ui/button';
import { RiMenu3Line } from 'react-icons/ri';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
const NavBar = () => {
  const [isOpenMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <nav className='z-40 lg:grid w-full flex justify-between lg:grid-cols-3 px-10 py-3 border-b md:shadow-md sticky'>
      <Link href='/' className={`text-primary-25 underline text-center`}>
        <h1 className='text-2xl tracking-widest' id='logo'>
          NANCE
        </h1>
      </Link>
      <Button
        className='lg:hidden p-0 transition-all duration-1000'
        onClick={() => {
          console.log('Hi');
          setOpenMobileMenu(!isOpenMobileMenu);
        }}
      >
        {!isOpenMobileMenu ? (
          <RiMenu3Line
            size={30}
            className='transition-all duration-400 delay-1000 ease-in-out'
          />
        ) : (
          <IoClose
            size={30}
            className='transition-all duration-400 delay-150 ease-in-out'
          />
        )}
      </Button>
      {isOpenMobileMenu ? <MobileMenu /> : ''}
      <NavigationMenu className='text-primary-50 m-auto font-medium hidden lg:block'>
        <NavigationMenuList className='flex list-none justify-center px-5'>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-base '>
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='md:w-[400px] lg:w-[500px] p-6'>
                <li>
                  <Link href='' className='flex items-center'>
                    <IoCardSharp className='mr-3' size={40} color='#4daa57' />
                    <div className='ml-3'>
                      <p className=' font-semibold '>Manage Accounts</p>
                      <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        Managing different types of banking accounts{' '}
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' className='mr-5 hover:text-primary-75'>
              Testimonials
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' className='hover:text-primary-75'>
              FAQs
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className='m-auto hidden lg:block'>
        <Button className='rounded-full border-black mr-2 border-2 w-24 hover:bg-slate-100'>
          Sign Up
        </Button>
        <Button className=' bg-primary-25 rounded-full font-semibold hover:bg-primary-25/50 w-24 shadow-lg shadow-primary-25/40'>
          Log In
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
