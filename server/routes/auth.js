import {Router} from "express";
import { login, logout, signup } from "../controllers/auth.js";

const authrouter = Router();

authrouter.post("/signup" , signup)

authrouter.post("/login" , login)

authrouter.post("/logout" , logout)

export {authrouter}
