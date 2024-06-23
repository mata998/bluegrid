import { Router } from "express";
import { FileController } from "../controllers/FileController";
import { FileServiceFactory } from "../services/fileService/FileServiceFactory";

const fileController = new FileController(FileServiceFactory.getFileService());

const router = Router();

router.get("/files", fileController.getFiles);

export const filesRouter = router;
