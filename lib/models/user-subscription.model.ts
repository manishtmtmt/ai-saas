import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUserSubscription extends Document {
  userId: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripePriceId?: string;
  stripeCurrentPeriodEnd?: Date;
}

const userSubscriptionSchema = new Schema<IUserSubscription>(
  {
    userId: { type: String, required: true, unique: true },
    stripeCustomerId: { type: String, unique: true },
    stripeSubscriptionId: { type: String, unique: true },
    stripePriceId: { type: String },
    stripeCurrentPeriodEnd: { type: Date },
  },
  { timestamps: true }
);

const UserSubscriptionModel: Model<IUserSubscription> =
  mongoose.models?.UserSubscription ||
  mongoose.model<IUserSubscription>("UserSubscription", userSubscriptionSchema);

export default UserSubscriptionModel;
