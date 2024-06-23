import { Router } from "express";
import { filesRouter } from "./filesRouter";

const router = Router();

router.use(filesRouter);

export const mainRouter = router;
