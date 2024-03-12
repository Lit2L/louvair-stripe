import { notFound, redirect } from 'next/navigation'

import { dashboardConfig } from '@/config/dashboard'
import { getServerSession } from 'next-auth'
import { MainNav } from '@/components/main-nav'
import { DashboardNav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'
import { UserAccountNav } from '@/components/user-account-nav'
import { getCurrentUser } from '@/lib/session'
import { authOptions } from '@/lib/auth'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  // const user = await getCurrentUser()
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <header className='sticky top-0 z-10 border-b bg-background'>
        <div className='container flex h-16 items-center justify-between py-4'>
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email
            }}
          />
        </div>
      </header>
      <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] mt-16 flex-col md:flex'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex w-full mt-16 flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
      <SiteFooter className='border-t' />
    </div>
  )
}