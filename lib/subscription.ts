import { auth } from '@clerk/nextjs';

import UserSubscriptionModel from './models/user-subscription.model';

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if(!userId) return false;

  const userSubscription = await UserSubscriptionModel.findOne({ userId });

  if (!userSubscription) return false;

  const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  return !!isValid;
}