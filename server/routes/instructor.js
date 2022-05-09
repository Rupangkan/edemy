import express from "express";

const router = express.Router();

// middleware
import { requireSignIn } from "../middleware";

// controllers
import {
    currentInstructor,
    instructorCourses,
    makeInstructor,
} from "../controllers/instructor";

router.post("/make-instructor", requireSignIn, makeInstructor);
router.get('/current-instructor', requireSignIn, currentInstructor)
router.get('/instructor-courses', requireSignIn, instructorCourses)

module.exports = router;
