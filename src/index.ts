import express from "express";
import compression from "compression";
import dotenv from "dotenv";
import { mainRouter } from "./routes";

dotenv.config();

const app = express();

app.use(compression());

app.use("/api", mainRouter);

app.listen(4000, () => console.log("listening on port 4000"));
