import mongoose from "mongoose";

const { Schema } = mongoose;

const JobSchema = new Schema({
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ['Interview', 'Declined', 'Pending'],
      default: 'Pending',
    },
    jobType: {
      type: String,
      enum: ['Full Time', 'Part Time', 'Internship'],
      default: 'Full Time',
    },
    jobLocation: {
      type: String,
      default: 'My City',
    },
  },
  { timestamps: true }
)

export default mongoose.model("Job", JobSchema);