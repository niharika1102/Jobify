import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0; //we count the number of users already created. If it is 0, i.e., this account is the first account, then we automatically set it admin. Else, it is user
  req.body.role = isFirstAccount ? "Admin" : "User";
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.send("Login");
};
