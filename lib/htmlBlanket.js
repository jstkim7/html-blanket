#!/usr/bin/env node

/* Copyright (c) 2014 Sung Kim; Licensed MIT*/

var fs = require('fs');


var args = process.argv
var fileName = args.slice(2);
var fileNameHtml = fileName + ".html";

var template = "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>" + fileName + "</title>\n</head>\n<body>\n\n</body>\n</html>"

var createFile = function(fileName, template) {
  fs.writeFile(fileNameHtml, template, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(fileName + " created!");
    }
  });
}

if (fileName.length === 1) {
  createFile(fileNameHtml, template);
} else {
  console.log("Please specify a fileName.");
}