import { Metadata } from 'next'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'
import { UserAuthForm } from '@/components/forms/user-auth-form'
import { Suspense } from 'react'
import { ChevronRight } from 'lucide-react'
import Logo from '@/components/icons/Logo'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

export default function LoginPage() {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        href='/register'
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'absolute z-20 gap-2 flex items-center justify-center hover:cursor-pointer right-36 top-36'
        )}
      >
        Register
        <>
          <ChevronRight className='size-4' />
        </>
      </Link>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'outline', size: 'sm' }),
          'absolute left-36 top-36'
        )}
      >
        <>
          <Icons.chevronLeft className='mr-2 size-4' />
          Back
        </>
      </Link>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-6 text-center'>
          <Logo className='w-16 h-16 mx-auto shadow-2xl rounded-full' />

          <h1 className='text-2xl font-semibold tracking-tight'>Welcome back!</h1>
          <p className='text-sm text-black/70'>Enter your email to sign in to your account</p>
        </div>
        <Suspense>
          <UserAuthForm />
        </Suspense>
      </div>
    </div>
  )
}
