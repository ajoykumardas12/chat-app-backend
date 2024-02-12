import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import users from "./routes/api/user";

dotenv.config();

connectDB();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to chat app backend");
});

app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
