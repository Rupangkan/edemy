import express from "express";
import formidable from 'express-formidable'
const router = express.Router();

// middleware
import { requireSignIn, isInstructor } from "../middleware";

// controllers
import { uploadImage, removeImage, create, read, uploadVideo, removeVideo, addLesson, update } from "../controllers/course";

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);
// // course
router.post("/course", requireSignIn, isInstructor, create);
router.get("/course/:slug", read);
router.post('/course/video-upload/:instructorId', requireSignIn, formidable(), uploadVideo)
router.post('/course/video-remove/:instructorId', requireSignIn, removeVideo)
router.post('/course/lesson/:slug/:instructorId', requireSignIn, addLesson)
router.put('/course/:slug', requireSignIn, update)

module.exports = router;
