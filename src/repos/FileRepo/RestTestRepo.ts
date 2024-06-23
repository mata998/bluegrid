import axios from "axios";
import { FileRepo } from "./interfaces";
import { FileUrlsJson } from "./types";

export class RestTestRepo implements FileRepo {
  async getFileUrls() {
    const resp = await axios.get(process.env.REST_TEST_URL as string);

    return resp.data as FileUrlsJson;
  }
}
