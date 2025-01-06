import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";

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

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Length should be between 3 and 50 characters.")
    .trim(),
]);
