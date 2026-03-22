import { Router } from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.js";

const userRouter = Router();

userRouter.get("/", protectRoute ,getUsersForSidebar)


export {userRouter};