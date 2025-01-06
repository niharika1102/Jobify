import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0; //we count the number of users already created. If it is 0, i.e., this account is the first account, then we automatically set it admin. Else, it is user
  req.body.role = isFirstAccount ? "Admin" : "User";
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: "User created successfully" });
};

export const login = async (req, res) => {
  //check if email exists - find the email entered by the user in the database. If it doesnt exist, we throw an error
  const user = await User.findOne({ email: req.body.email });
  //check if password is correct
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password)); //first parameter is the password used by the user to login in the current session and the second parameter is the password used by the user to register(the one that has been hashed and stored in the database).
  if (!isValidUser) throw new UnauthenticatedError("Invalid credentials");

  res.send("Logged in");
};
