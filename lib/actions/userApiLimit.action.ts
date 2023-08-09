import { auth } from "@clerk/nextjs";

import { connectToDB } from "@/lib/mongoose";
import UserAPILimitModel from "../models/user-api-limit.model";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
  try {
    // connect to Database
    await connectToDB();

    const { userId } = auth();

    if (!userId) return;

    // check if userId is already there in the database
    const existingUser = await UserAPILimitModel.findOne({ userId });

    if(existingUser) {
      await UserAPILimitModel.updateOne({ userId }, { $inc: { count: 1 } });
    } else {
      await UserAPILimitModel.create({ userId, count: 1 });
    }

  } catch (error) {
    console.error("Error updating user count:", error);
  }
}

export const checkApiLimit = async () => {
  // connect to Database
  await connectToDB();

  const { userId } = auth();

  if (!userId) return false;

  const userApiLimit = await UserAPILimitModel.findOne({ userId });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) return true;
  else return false;
}

export const getApiLimit = async () => {
  // connect to Database
  await connectToDB();

  const { userId } = auth();

  if (!userId) return 0;

  const userApiLimit = await UserAPILimitModel.findOne({ userId });

  if (!userApiLimit) return 0;

  return userApiLimit.count;
}