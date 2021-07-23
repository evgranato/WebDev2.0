const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const myArgs = process.argv;

try {
  const myFranc = franc(myArgs[2]);
  const langsOutput = langs.where("3", myFranc);
  console.log(langsOutput.name.green);
  return;
} catch (err) {
  console.log("NOT A VALID LANGUAGE".red);
  console.dir(err);
}
