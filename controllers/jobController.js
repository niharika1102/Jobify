import { nanoid } from "nanoid";

//local data for testing
let jobs = [
  { id: nanoid(), company: "cognida.ai", position: "frontend developer" },
  { id: nanoid(), company: "microsoft", position: "product manager" },
];

//get all jobs controller
export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs }); //adding a status is not complusory, but it is a good practice
};

//create a job controller - we take in company name and position given by the user in the req.body. If any of it is missing, an error is shown to the user. If all ok, we generate an id from "nanoid" and push the entire job object to the jobs array.
export const createJob = async (req, res) => {
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
};

//get a job controller - We compare the id given by the user with the ones available in the database. If found, we return it. Else, we return error.
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `no job found with id ${id}` });
  }

  res.status(200).json({ job });
};

//edit a job controller - We follow steps of create a job route and search a job. Additionally, we update the original company name and position with the one given to us.
export const updateJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({ message: "Enter company name and profile." });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job found with ID ${id}` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ message: "Job updated", job });
};

//delete a job controller - We follow the steps of search for a single job. Additionally, we filter the objects from the jobs array and keep the ones whose id doesnt match with the one given to us. We store this in a variable. Then we update the original jobs array and return success.
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `No job found with id ${id}` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  return res.status(200).json({ message: "Job deleted" });
};
