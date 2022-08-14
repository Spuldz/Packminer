const express = require("express");
const app = express();

function extractTextureNames(path) {
  const fs = require("fs");
  const files = fs.readdirSync(path);
  let returnedArray = [];

  files.forEach((file) => {
    let pass = true;
    let arr = [];
    let name;

    for (let i = 0; i < file.length; i++) {
      if (file[i] === ".") {
        pass = false;
      }

      if (!pass) {
        break;
      }
      if (pass) {
        arr[i] = file[i];
      }
    }
    name = arr.join("");
    returnedArray.push(name);
  });
  return returnedArray;
}

app.get("/api", (req, res) => {
  let textureNames = extractTextureNames(
    "../minecraf_texturepack/minecraft/textures/blocks"
  );
  res.json({ textures: textureNames });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
