console.log("Hello from Node.js");

const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello David I am writing on your File");

const content = fs.readFileSync("hello.txt", "utf-8");
console.log(content);
