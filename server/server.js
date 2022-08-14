const express = require("express");
const app = express();
const fs = require("fs");

function extractTextureNames(path) {
  const files = fs.readdirSync(path);
  let returnedArray = [];

  files.forEach((file) => {
    let pass = true;
    let arr = [];
    let name;

    //looks for the dot in the file name
    for (let i = 0; i < file.length; i++) {
      if (file[i] === ".") {
        pass = false;
      }

      if (!pass) {
        break;
      }

      /*while dot not found, it puts the file name characters
        into the array*/
      if (pass) {
        arr[i] = file[i];
      }
    }
    //makes the file name into a normal string
    name = arr.join("");
    returnedArray.push(name);
  });
  return returnedArray;
}

app.get("/api", (req, res) => {
  const blocks = extractTextureNames(
    "../minecraf_texturepack/minecraft/textures/blocks"
  );

  //send the response to client side with a JSON format
  res.json({
    blocks: blocks,
  });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
