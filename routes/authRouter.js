import { Router } from "express";
import rateLimiter from "express-rate-limit";
const router = Router();

import { register, login, logout } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "IP rate limit exceeded. Retry in 15 minutes" },
});

router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;
