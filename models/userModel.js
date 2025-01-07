import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "LastName",
  },
  location: {
    type: String,
    default: "My City",
  },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },

});

export default mongoose.model("User", UserSchema);
