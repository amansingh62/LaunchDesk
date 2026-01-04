import { Router } from "express";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requireRole } from "../middlewares/requireRole.js";
import { listUsers, deleteUser } from "../controllers/userController.js";

const router = Router();

router.get("/", requireAuth, requireRole("ADMIN", "MANAGER"), listUsers);
router.delete("/:id", requireAuth, requireRole("ADMIN", "MANAGER"), deleteUser);

export default router;
