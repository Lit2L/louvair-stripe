import { SubscriptionPlan } from 'types'
import { env } from '@/env.mjs'

export const freePlan: SubscriptionPlan = {
  name: 'Free',
  description: 'The free plan means you pay full price. Upgrade to the PRO plan love your life.',
  stripePriceId: '',
  benefits: [
    '1 premium air dispenser included',
    'No refillable fragrant oils automatically shipped per month',
    'Free priority shipping',
    '0% off additional purchases',
    'Early access to new scents',
    'Exclusive member support'
  ],
  prices: {
    monthly: 0,
    yearly: 0
  }
}

export const proPlan: SubscriptionPlan = {
  name: 'PRO',
  description:
    'The PRO plan includes commercial high quality air diffuser machine as well as a monthly refill.',
  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || '',
  benefits: [
    '1 air dispenser included',
    'refill fragrant oils per month',
    'Free automatic shipping',
    '10% off additional purchases'
  ],
  prices: {
    monthly: 110,
    yearly: 1320
  }
}

// export const pricingData: SubscriptionPlan[] = [
//   {
//     name: 'No Plan',
//     description: 'Free',
//     benefits: [
//       'Access to purchase air dispenser',
//       'Standard shipping rates apply',
//       'Purchase fragrant oils individually'
//     ],
//     limitations: ['No savings.', 'No access to exclusive fragrant oils.', 'No custom branding'],
//     prices: {
//       monthly: 140,
//       yearly: 1680
//     },
//     stripeIds: {
//       monthly: null,
//       yearly: null
//     }
//   },
//   {
//     name: 'Premium',
//     description: 'Unlock Advanced Features',
//     benefits: [
//       '1 air dispenser included',
//       'refill fragrant oils per month',
//       'Free automatic shipping',
//       '10% off additional purchases'
//     ],
//     limitations: ['No custom branding', 'Limited access to business resources.'],
//     prices: {
//       monthly: 110,
//       yearly: 1320
//     },
//     stripeIds: {
//       monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
//       yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID
//     }
//   },
//   {
//     name: 'Elite',
//     description: 'For Power Users',
//     benefits: [
//       '1 premium air dispenser included',
//       '4 refillable fragrant oils per month',
//       'Free priority shipping',
//       '20% off additional purchases',
//       'Early access to new scents',
//       'Exclusive member support'
//     ],
//     limitations: [],
//     prices: {
//       monthly: 30,
//       yearly: 300
//     },
//     stripeIds: {
//       monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
//       yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID
//     }
//   }
// ]
