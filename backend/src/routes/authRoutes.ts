import { Router } from "express";
import { login, logout, refresh, register } from "../controllers/authController.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema, registerSchema } from "../validateAuth/authSchema.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { me } from "../controllers/authController.js";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.post("/refresh", refresh);

router.get("/me", requireAuth, me);

export default router;
