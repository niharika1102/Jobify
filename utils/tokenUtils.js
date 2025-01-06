import jwt from "jsonwebtoken";

//jwt is used to transmit the data back and forth smoothly
export const createJWT = (payload) => {
  const token = jwt.sign(payload, "secret", {
    expiresIn: "1d",
  });
  return token;
};
