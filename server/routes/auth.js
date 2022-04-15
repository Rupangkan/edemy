import express from "express";

const router = express.Router();

// middleware
import { requireSignIn } from "../middleware";


// controllers
import { register, login, logout, currentUser } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get('/current-user', requireSignIn, currentUser)

module.exports = router;
