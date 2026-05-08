import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import { authrouter } from "./routes/auth.js";
import { connectToMongoDb } from "./db/connectToMongoDb.js";
import { messageRouter } from "./routes/message.js";
import { userRouter } from "./routes/user.js";
import { app, server } from "./socket/socket.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://chat-sphere-xi-gules.vercel.app"
    ],
    credentials: true
}));



app.use("/api/auth", authrouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);


if (process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("/{*path}", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
}

server.listen(process.env.PORT, () => {
    connectToMongoDb();
    console.log("Server running on port " + process.env.PORT);
})


