const fs = require("fs");

const SRC_PATH = "../src";

module.exports.copyApiFiles = (files, environment) => {
  files.forEach(fileName => {
    const API_PATH = `${SRC_PATH}/api/`;
    console.log(fileName);
    const srcPath =
      (environment === "development")
        ? `${__dirname}/${API_PATH}${fileName}-dev.js`
        : `${__dirname}/${API_PATH}${fileName}-prod.js`;
    const destPath = `${__dirname}/${API_PATH}${fileName}.js`;
    const fileContents = fs.readFileSync(srcPath);
    fs.writeFileSync(destPath, fileContents);
  });
};
