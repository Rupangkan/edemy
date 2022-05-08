import express from "express";

const router = express.Router();

// middleware
import { requireSignIn, isInstructor } from "../middleware";

// controllers
import { uploadImage, removeImage, create } from "../controllers/course";

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);
// // course
router.post("/course", requireSignIn, isInstructor, create);
// router.get("/course/:slug", read);

module.exports = router;
