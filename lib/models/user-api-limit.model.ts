import mongoose, { Document, Model, Schema } from "mongoose";

// Define the interface
export interface IUserAPILimit extends Document {
  userId: string;
  count: number;
}

// Define the Schema
const userAPILimitSchema = new Schema<IUserAPILimit>(
  {
    userId: { type: String, required: true, unique: true },
    count: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

// create and export the model
const UserAPILimitModel: Model<IUserAPILimit> =
  mongoose.models?.UserAPILimit ||
  mongoose.model<IUserAPILimit>("UserAPILimit", userAPILimitSchema);

export default UserAPILimitModel;
