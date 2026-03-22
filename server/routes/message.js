import { Router } from "express";
import { getMessages, sendMessages } from "../controllers/message.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRouter = Router();

messageRouter.post("/send/:id", protectRoute, sendMessages)
messageRouter.get("/:id", protectRoute, getMessages)

export {messageRouter}