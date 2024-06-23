import { FileUrlsJson } from "./types";

export interface FileRepo {
  getFileUrls: () => Promise<FileUrlsJson>;
}
