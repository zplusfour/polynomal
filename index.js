// packages

const chalk = require("chalk"),
  boxen = require("boxen");
yargs = require("yargs");

// globals (GLOBALS ARE DECALARED WITH VAR)
var ext = ".pn";

// utils

let pbox = str => {
  let message = chalk.white.bold(str);

  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "single",
    borderColor: "#fff",
  };

  const msgBox = boxen(message, boxenOptions);

  console.log(msgBox);
}

// CLI

function init() {
  if (true) {
    // here's a sample:
    options = yargs.scriptName("polynomal")
      .usage(chalk.dim(`usage: node ${process.argv[1]} [command] [input]`))
      .command("run [path]", "- run a file", yargs => {
        yargs.positional("path", {
          type: "string",
          describe: "The path to the file you want to execute."
        }, argv => console.log("test"))
      })
      .help()
  }
}

try { init() } catch (e) { /*pass*/ }