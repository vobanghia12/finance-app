import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuList,
} from './ui/navigation-menu';
import { IoCardSharp } from 'react-icons/io5';
import { anton } from '@/app/layout';
import { Button } from './ui/button';
const NavBar = () => {
  return (
    <div className='flex w-full items-center justify-between p-10'>
      <Link href='/' className={`text-primary-25 underline`}>
        <h1 className={`${anton.className} text-2xl tracking-widest`}>NANCE</h1>
      </Link>
      <NavigationMenu className='text-primary-50 px-5'>
        <NavigationMenuList className='flex list-none justify-between'>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-base '>
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='md:w-[400px] lg:w-[500px]'>
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
      <div>
        <Button className='rounded-full border-black mr-2 border-2 w-24 hover:bg-slate-100'>
          Sign Up
        </Button>
        <Button className=' bg-primary-25 rounded-full font-semibold hover:bg-primary-25/50 w-24'>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
