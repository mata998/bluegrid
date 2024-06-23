import { FileRepo } from "../interfaces";

export class RestTestRepoMock implements FileRepo {
  async getFileUrls() {
    return inputJson;
  }
}

const inputJson = {
  items: [
    { fileUrl: "http://34.8.32.234:48183/SvnRep/ADV-H5-New/README.txt" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/ADV-H5-New/VisualSVN.lck" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/ADV-H5-New/hooks-env.tmpl" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/AT-APP/README.txt" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/AT-APP/VisualSVN.lck" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/AT-APP/hooks-env.tmpl" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/README.txt" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/VisualSVN.lck" },
    { fileUrl: "http://34.8.32.234:48183/SvnRep/hooks-env.tmpl" },
    { fileUrl: "http://34.8.32.234:48183/www/README.txt" },
    { fileUrl: "http://34.8.32.234:48183/www/VisualSVN.lck" },
    { fileUrl: "http://34.8.32.234:48183/www/hooks-env.tmpl" },
  ],
};
