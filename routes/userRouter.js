import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { autherizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [autherizePermissions("admin"), getApplicationStats]);
router.patch("/update-user", upload.single('avatar'), validateUpdateUserInput, updateUser);

export default router;