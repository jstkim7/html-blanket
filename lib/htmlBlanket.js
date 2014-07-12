#!/usr/bin/env node

/* Copyright (c) 2014 Sung Kim; Licensed MIT*/

var args = process.argv
var filename = args.slice(2) + ".html";
var template = "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"utf-8\">\n\t<title></title>\n</head>\n<body>\n\n</body>\n</html>"

var fs = require('fs');
fs.writeFile(filename, template, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(filename + " created!");
  }
});
