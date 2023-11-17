import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description:
    "Free Plan allows you to learn basic command line skills.",
  stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "The Pro plans gives you access to unlimited lessons.",
  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
}
