import * as mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema: any = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    default: "",
  },
  cellphone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User: any = mongoose.model("User", userSchema);
export default User;
