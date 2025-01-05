import { nanoid } from "nanoid";
import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";

//local data for testing
let jobs = [
  { id: nanoid(), company: "cognida.ai", position: "frontend developer" },
  { id: nanoid(), company: "microsoft", position: "product manager" },
];

//get all jobs controller
export const getAllJobs = async (req, res) => {
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
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `No jobs found with id: ${id}` });
  }
  res.status(StatusCodes.OK).json({ job });
};

//edit a job controller
export const updateJob = async (req, res) => {
  const { id } = req.params;
  //new: true returns the new job to us after updating. By default, the job returned is the one before the update.
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `No job found with ID ${id}` });
  }
  res.status(StatusCodes.OK).json({ message: "Job updated", job: updatedJob });
};

//delete a job controller
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndRemove(id);
  if (!removedJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `No job found with id ${id}` });
  }
  return res.status(StatusCodes.OK).json({ message: "Job deleted" });
};
