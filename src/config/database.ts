import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = process.env.MONGODB_URI || "";

    await connect(mongoURI);
    console.log("🎉 Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
