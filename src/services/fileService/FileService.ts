import { FileRepo } from "../../repos/FileRepo/interfaces";
import { FileUrlsJson } from "../../repos/FileRepo/types";
import { OutputJson } from "./types";

export class FileService {
  fileRepo: FileRepo;

  constructor(fileRepo: FileRepo) {
    this.fileRepo = fileRepo;
  }

  async getFiles() {
    console.time("download");

    const input = await this.fileRepo.getFileUrls();

    console.timeEnd("download");
    console.time("process");

    const output = this.process(input);

    console.timeEnd("process");

    return output;
  }

  process(inputJson: FileUrlsJson) {
    const result: OutputJson = {};

    inputJson.items.forEach((item) => {
      const url = new URL(item.fileUrl);
      const host = url.hostname;
      const paths = url.pathname.split("/").filter((part) => part);
      const isFolderPath = url.pathname.endsWith("/");

      if (!result[host]) {
        result[host] = [];
      }

      let current = result[host];

      for (let i = 0; i < paths.length; i++) {
        if (!isFolderPath && i === paths.length - 1) {
          current.push(paths[i]);
          continue;
        }

        let found = current.find(
          (item) => typeof item !== "string" && item[paths[i]]
        );

        if (!found) {
          found = { [paths[i]]: [] };
          current.push(found);
        }

        current = found[paths[i]];
      }
    });

    return result;
  }
}
