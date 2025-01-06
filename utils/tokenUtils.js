import jwt from "jsonwebtoken";

//jwt is used to transmit the data back and forth smoothly
export const createJWT = (payload) => {
  // @ts-ignore
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};
