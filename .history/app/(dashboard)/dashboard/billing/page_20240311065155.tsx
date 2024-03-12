import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { stripe } from '@/lib/stripe'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { BillingForm } from '@/components/forms/billing-form'
import { DashboardHeader } from '@/components/dashboard/header'
import { Icons } from '@/components/shared/icons'
import { DashboardShell } from '@/components/dashboard/shell'

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.'
}

export default async function BillingPage() {
  const user = await getCurrentUser()
  console.log('user from billing page', user)

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  // if user has a pro plan, check cancel status on stripe.
  let isCanceled = false
  if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(subscriptionPlan.stripeSubscriptionId)
    isCanceled = stripePlan.cancel_at_period_end
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Billing'
        text='Manage billing and your subscription plan.'
      />
      <div className='grid gap-8'>
        <Alert className='!pl-14'>
          <Icons.warning />
          <AlertTitle>This is app is in demo mode.</AlertTitle>
          <AlertDescription>
            Louvair app is in TEST Mode using a Stripe test environment. Complete order with <br />{' '}
            <br />
            Test Card Number `4242 4242 4242 4242`
            <br /> Exp. `04/24` <br />
            CVC `242`.
            <br />
            <a
              href='https://stripe.com/docs/testing#cards'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-8'
            >
              <br />
              See Stripe Docs
            </a>
            .
          </AlertDescription>
        </Alert>
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled
          }}
        />
      </div>
    </DashboardShell>
  )
}