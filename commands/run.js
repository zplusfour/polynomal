const asm = require("ass-js").X64();
// main command is "polynomal"
// if command is used ("polynomal --run "path")

asm._('db', 'Hello World!\n');

console.log(asm.compile().toString());