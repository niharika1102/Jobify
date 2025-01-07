import { nanoid } from "nanoid";
import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

//local data for testing
let jobs = [
  { id: nanoid(), company: "cognida.ai", position: "frontend developer" },
  { id: nanoid(), company: "microsoft", position: "product manager" },
];

//get all jobs controller
export const getAllJobs = async (req, res) => {
  console.log(req.user);
  
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs }); //adding a status is not complusory, but it is a good practice
};

//create a job controller - we create the job in the schema using the 2nd line of the function
export const createJob = async (req, res) => {
  const job = await Job.create(req.body); //req.body has all the values that we need to create a job like the company and the position. So, we can skip the destructing part
  res.status(StatusCodes.CREATED).json({ job });
};

//get a job controller
export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

//edit a job controller
export const updateJob = async (req, res) => {
  //new: true returns the new job to us after updating. By default, the job returned is the one before the update.
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ message: "Job updated", job: updatedJob });
};

//delete a job controller
export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndRemove(req.params.id);
  return res.status(StatusCodes.OK).json({ message: "Job deleted" });
};
