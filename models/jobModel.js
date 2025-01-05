import mongoose from "mongoose";

const { Schema } = mongoose;

const jobScehma = new Schema(
  {
    company: String,
    position: String,
    jobLocation: {
      type: String,
      default: "Hyderabad",
    },
    jobStatus: {
      //enum is used when the input can only be from a set of pre-defined values
      type: String,
      enum: ["Pending", "Declined", "Interview Scheduled"],
      default: "Pending",
    },
    jobType: {
      type: String,
      enum: ["Internship", "Full Time", "Part Time"],
      default: "Full Time",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobScehma);
