import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0; //we count the number of users already created. If it is 0, i.e., this account is the first account, then we automatically set it admin. Else, it is user
  req.body.role = isFirstAccount ? "Admin" : "User";
  const hashedPassword = hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: "User created successfully" });
};

export const login = async (req, res) => {
  res.send("Login");
};
