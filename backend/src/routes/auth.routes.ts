import { Router } from "express";
import { handleLogin, handleLogout, handleRegister } from "../controller/auth.controller";
const router = Router();
router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.delete("/logout", handleLogout);
export default router;
