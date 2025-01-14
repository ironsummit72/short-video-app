import { Router } from "express";
import { postHandleUploadVideo } from "../controller/upload.controller";
const router = Router();

router.post("/video", postHandleUploadVideo);

export default router;
