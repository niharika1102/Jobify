import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0; //we count the number of users already created. If it is 0, i.e., this account is the first account, then we automatically set it admin. Else, it is user
  req.body.role = isFirstAccount ? "Admin" : "User";

  //we generate a salt which is used to hash the passwords and then we take the password from the req.body and hash it and store it in req.body.
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({message: "User created successfully"});
};

export const login = async (req, res) => {
  res.send("Login");
};
