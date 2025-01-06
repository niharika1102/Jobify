import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

//We define the URL and all the methods and their respective functions
router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default router;
