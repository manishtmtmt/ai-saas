import { auth } from "@clerk/nextjs";

import { connectToDB } from "@/lib/mongoose";
import UserAPILimitModel from "../models/userApiLimit";

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