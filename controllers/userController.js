import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";

export const getCurrentUser = async (req, res) => {
  //we match the id given in the request object (i.e., the one with which the user has logged in to the website) to the ones in the database and return if we find the relevant one
  const user = await User.findOne({ _id: req.user.userId });
  // @ts-ignore
  //we remove the password field from the current user.
  const userWithoutPassword = user.toJSON(); //toJson -> in userModel.js file
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Get application stats" });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  console.log(obj);
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body); //first parameter is the ID of the user to be updated and the second parameter is the values to be updated. They will be accessed from the req.body.
  res.status(StatusCodes.OK).json({ message: "Updated user" });
};
