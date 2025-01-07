import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Get current user" });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Get application stats" });
};

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Update user" });
};
