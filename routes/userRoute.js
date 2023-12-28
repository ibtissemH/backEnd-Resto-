import express from "express";
import {
    LogOut,
    login,
    signUp,
} from "../controllers/userController.js";

const router = express.Router();

//*****login ******/


router.post("/login", login)

router.post("/inscri", signUp)

router.get("/logOut", LogOut)


export default router