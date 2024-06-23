import { RestTestRepoMock } from "../../../repos/FileRepo/mocks/RestTestRepoMock";
import { FileService } from "../../fileService/FileService";

const fileService = new FileService(new RestTestRepoMock());

const outputJson = {
  "34.8.32.234": [
    {
      SvnRep: [
        {
          "ADV-H5-New": ["README.txt", "VisualSVN.lck", "hooks-env.tmpl"],
        },
        {
          "AT-APP": ["README.txt", "VisualSVN.lck", "hooks-env.tmpl"],
        },
        "README.txt",
        "VisualSVN.lck",
        "hooks-env.tmpl",
      ],
    },
    {
      www: ["README.txt", "VisualSVN.lck", "hooks-env.tmpl"],
    },
  ],
};

describe("FileService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getFiles", () => {
    test("returning formated json", async () => {
      const input = await fileService.getFiles();

      expect(input).toEqual(outputJson);
    });
  });
});
