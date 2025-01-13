import "express-async-errors"; //catches all the async errors and passes them to the error middleware
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan"; //provides logs of our requests. it is a middleware
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//middleware imports
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

//custom imports
import jobRouter from "./routes/jobRouter.js"; //routers
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json()); //middleware setup
app.use(helmet()); //security package
app.use(mongoSanitize()); //security package
app.use(cookieParser()); //access and verify cookies

//cloudinary setup
// @ts-ignore
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
//hides logs in production
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./client/dist")));

//middleware that defines the base URL for the router and also mentions the router that is going to handle all the requests coming to those routes
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

//to direct the users to the entry point i.e., index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "./index.html"));
});

//Not found middleware - used when the user is trying to access a route that is not available
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

//Error middleware - triggered by an existing route. It generally happens when there is some typo or error in the functionality. The error can be generated by us also. Eg. we might throw an error which will trigger this middleware.
app.use(errorHandlerMiddleware);

//Port setup
const port = process.env.PORT || 5100;

//connection to mongoose and mongo db
try {
  // @ts-ignore
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
} catch (error) {
  //in case of an error, the process will exit with the status of 1. It is the process code for error.
  console.log(error);
  process.exit(1);
}
