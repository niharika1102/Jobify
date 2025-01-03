import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan"; //provides logs of our requests. it is a middleware

const app = express();
app.use(express.json()); //middleware setup

//hides logs in production
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello hooman");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
