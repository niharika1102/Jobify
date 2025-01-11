import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

//get all jobs controller
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }); //to find the jobs that are created by the specific user only
  res.status(StatusCodes.OK).json({ jobs }); //adding a status is not complusory, but it is a good practice
};

//create a job controller - we create the job in the schema using the 2nd line of the function
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId; //to assign the current user Id to a specified user
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

//dummy stats
export const showStats = async (req, res) => {
  const defaultStats = {
    pending: 22,
    interview: 11,
    declined: 4,
  };

  let monthlyApplications = [
    {
      date: "May 23",
      count: 12,
    },
    {
      date: "Jun 23",
      count: 9,
    },
    {
      date: "Jul 23",
      count: 3,
    },
  ];

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
