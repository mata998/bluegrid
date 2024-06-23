import { RestTestRepo } from "../../repos/FileRepo/RestTestRepo";
import { FileService } from "./FileService";

export class FileServiceFactory {
  static getFileService() {
    const fileRepo = new RestTestRepo();
    const fileService = new FileService(fileRepo);

    return fileService;
  }
}
