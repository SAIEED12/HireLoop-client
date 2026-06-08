import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Tg4GPEex0gnXPeRAldpWsEU',
    'seeker_premium': 'price_1Tg4m1Eex0gnXPeRB8MJzxzJ',
    'recruiter_growth': 'price_1Tg4lYEex0gnXPeR2y2tWEPg',
    'recruiter_enterprise': 'price_1Tg4l7Eex0gnXPeROrEA7boD'
}