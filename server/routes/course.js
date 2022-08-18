import express from "express";
import formidable from 'express-formidable'
const router = express.Router();

// middleware
import { requireSignIn, isInstructor, isEnrolled } from "../middleware";

// controllers
import {
    uploadImage, removeImage, create, read, uploadVideo, removeVideo, addLesson, update, removeLesson, updateLesson,
    publishCourse, unpublishCourse, courses, checkEnrollment, freeEnrollment, paidEnrollment, userCourses, markCompleted,
    listCompleted, markIncomplete
} from "../controllers/course";


router.get("/courses", courses);
// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);
// // course
router.post("/course", requireSignIn, isInstructor, create);
router.get("/course/:slug", read);
router.post('/course/video-upload/:instructorId', requireSignIn, formidable(), uploadVideo)
// publish unpublish
router.put("/course/publish/:courseId", requireSignIn, publishCourse)
router.put("/course/unpublish/:courseId", requireSignIn, unpublishCourse)

router.post('/course/video-remove/:instructorId', requireSignIn, removeVideo)
router.post('/course/lesson/:slug/:instructorId', requireSignIn, addLesson)
router.put('/course/lesson/:slug/:instructorId', requireSignIn, updateLesson)
router.put('/course/:slug', requireSignIn, update)
router.put('/course/:slug/:lessonId', requireSignIn, removeLesson)

router.get("/check-enrollment/:courseId", requireSignIn, checkEnrollment);

// enrollment
router.post("/free-enrollment/:courseId", requireSignIn, freeEnrollment);
router.post("/paid-enrollment/:courseId", requireSignIn, paidEnrollment);

router.get("/user-courses", requireSignIn, userCourses);
router.get("/user/course/:slug", requireSignIn, isEnrolled, read);

// mark completed
router.post("/mark-completed", requireSignIn, markCompleted);
router.post("/list-completed", requireSignIn, listCompleted);
router.post("/mark-incomplete", requireSignIn, markIncomplete);

module.exports = router;
