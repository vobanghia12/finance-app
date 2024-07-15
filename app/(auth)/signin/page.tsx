import { signIn, providerMap } from '@/auth';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AuthError } from 'next-auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export default function SignIn() {
  return (
    <section
      id='login'
      className='flex justify-center items-center w-screen h-screen'
    >
      <Card className='w-[400px] flex flex-col justify-center items-center p-16 shadow-lg'>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription className='mt-4'>
          Glad to see you again 👋
        </CardDescription>
        <CardDescription className='mb-4'>
          Login to your account below
        </CardDescription>
        <CardContent>
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                'use server';
                try {
                  await signIn(provider.id);
                } catch (error) {
                  if (error instanceof AuthError) {
                    console.log(error);
                  }
                  throw error;
                }
              }}
            >
              <div className='grid w-full items-center gap-4 mt-3'>
                <Button
                  type='submit'
                  className='bg-white border-[1px] w-72 shadow-lg rounded-lg'
                >
                  {provider.id === 'google' ? (
                    <FcGoogle className='mr-3' />
                  ) : (
                    <IoLogoApple className='mr-3' size={20} />
                  )}
                  Continue with {provider.name}
                </Button>
              </div>
            </form>
          ))}
          <div className='flex my-4 items-center'>
            <hr className='border-t-[1px] flex-1'></hr>
            <p className='mx-2 text-gray-400 text-xs font-light'>OR</p>
            <hr className='border-t-[1px] flex-1'></hr>
          </div>
          <form>
            <Label htmlFor='email' className='text-gray-400 text-sm font-light'>
              Email
            </Label>
            <Input className='mt-1' id='email' placeholder='Email'></Input>
            <Button className='w-72 bg-primary-25 mt-5'>
              Continue
              <FaArrowRightLong className='ml-2' />
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
