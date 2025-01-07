import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  //we check the token in the cookie in the req object. If the token doesn't exist, we throw an error.
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication invalid");

  //we decode the token and verify it. If it is correct, we access the userId and role from it and pass it as a new request object.
  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};
