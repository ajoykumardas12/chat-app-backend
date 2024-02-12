import { Schema, model } from "mongoose";
import { UserT } from "../types/users";

const UsersSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = model<UserT>("Users", UsersSchema);

export default Users;
