import express from "express";

const router = express.Router();

// middleware
import { requireSignIn } from "../middleware";

// controllers
import {
    currentInstructor,
    makeInstructor,
} from "../controllers/instructor";

router.post("/make-instructor", requireSignIn, makeInstructor);
router.get('/current-instructor', requireSignIn, currentInstructor)

module.exports = router;
