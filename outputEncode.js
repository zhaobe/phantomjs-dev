//example of different encoding outputs with phantomJS
//the behavior should output different encodings of Japanese Hello World

"use strict";

function helloWorld() {
    console.log(phantom.outputEncoding + ": こんにちは、世界！");
}

console.log("Default encoding------");
helloWorld();

console.log("\nOther encodings-----");
var encodings = ["euc-jp", "sjis", "utf8", "System"];

for (var i = 0; i < encodings.length; i++) {
    phantom.outputEncoding = encodings[i];
    helloWorld();
}

phantom.exit()
