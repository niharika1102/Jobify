import { UnauthenticatedError } from "../errors/customErrors.js";

export const authenticateUser = (req, res, next) => {
  //we check the token in the cookie in the req object. If the token doesn't exist, we throw an error.
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication invalid");
  next();
};
