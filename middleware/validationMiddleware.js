import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        //errors exist
        const errorMessage = errors.array().map((e) => e.msg);
        throw new BadRequestError(errorMessage);
      }
      next(); //to pass to the next middleware. If this is not added, the request will stop here only even if everything is as expected.
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company name is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("jobLocation").notEmpty().withMessage("Job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid job status"),
  body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("Invalid job type"),
]);
