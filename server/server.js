import express from "express"
import cookieParser from "cookie-parser";
import { authrouter } from "./routes/auth.js";
import dotenv from "dotenv"
import { connectToMongoDb } from "./db/connectToMongoDb.js";
import { messageRouter } from "./routes/message.js";
import { userRouter } from "./routes/user.js";
dotenv.config()

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authrouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);




app.listen(process.env.PORT, () => {
    connectToMongoDb();
    console.log("Server running on port" + process.env.PORT);
})


