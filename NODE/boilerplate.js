const fs = require("fs");
const folderName = process.argv[2] || "Project";
const data1 = "boilerplate";
const data = "";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, data1);
  fs.writeFileSync(`${folderName}/app.js`, data);
  fs.writeFileSync(`${folderName}/app.css`, data);
} catch (e) {
  console.log("SOMETHING WENT WRONG!!!");
  console.log(e);
}

// node boilerplate.js Project

// Project
// index.html
// app.js
// app.css
