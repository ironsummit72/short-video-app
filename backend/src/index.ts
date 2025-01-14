import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import morgan from "morgan";
import authRouter from "./routes/auth.routes";
import uploadRouter from "./routes/upload.routes";
const port = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/auth", authRouter);
// check if the use is logged in or not
app.get("/upload", uploadRouter);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
