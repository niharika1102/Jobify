import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan"; //provides logs of our requests. it is a middleware
import { nanoid } from "nanoid";

//local data for testing
let jobs = [
  { id: nanoid(), company: "cognida.ai", position: "frontend developer" },
  { id: nanoid(), company: "microsoft", position: "product manager" },
];

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

//get all jobs route
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs }); //adding a status is not complusory, but it is a good practice
});

//create job route
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "Please enter company name and position." });
  }

  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);

  res.status(201).json({ job });
});

//get single job
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `no job found with id ${id}` });
  }

  res.status(200).json({ job });
});

//Port setup
const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
