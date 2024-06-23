import { Request, Response } from "express";
import { FileServiceInterface } from "../services/fileService/interfaces";

export class FileController {
  fileService: FileServiceInterface;

  constructor(fileService: FileServiceInterface) {
    this.fileService = fileService;
  }

  getFiles = async (req: Request, res: Response) => {
    try {
      console.log("[FileController.getFiles] hit");

      const output = await this.fileService.getFiles();

      return res.status(200).json(output);
    } catch (error) {
      console.error("[FileController.getFiles]", error);

      return res.status(500).json({ message: "Internal server error" });
    }
  };
}
