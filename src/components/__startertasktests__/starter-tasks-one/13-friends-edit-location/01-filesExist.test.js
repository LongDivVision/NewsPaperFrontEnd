import "../../sabioExpect";
import fs from "fs";

describe("Component File Validation:", () => {
  const files = [
    { comp: "App.jsx", path: "src/App.jsx" },
    {
      comp: "Friends.jsx",
      path: "src/components/friends/Friends.jsx",
    },
    {
      comp: "Friend.jsx",
      path: "src/components/friends/Friend.jsx",
    },
    {
      comp: "FriendForm.jsx",
      path: "src/components/friends/FriendForm.jsx",
    },
    {
      comp: "friendsService.js",
      path: "src/services/friendsService.js",
    },
    {
      comp: "usersService.js",
      path: "src/services/usersService.js",
    },
  ];

  files.forEach(({ comp, path }, i) => {
    let actualMsg, hint;
    let testNumber;

    if (i.toString().length === 1) {
      testNumber = `0${i + 1}`;
    } else {
      testNumber = i + 1;
    }
    let expectedMsg = `${comp} to exist in: ${path}`;
    it(`${testNumber} - ${comp} should exist in the correct folder`, () => {
      if (fs.existsSync(path)) {
        actualMsg = expectedMsg;
      } else {
        actualMsg = `${comp} does not exist or is not in the correct path`;
        hint = `HINT: Double check path syntax. Folder path: ${path}`;
      }
      expect(actualMsg).sabioToBe(expectedMsg, hint);
    });
  });
});
