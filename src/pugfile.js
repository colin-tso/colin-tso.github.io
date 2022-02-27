var fs = require('fs');
var pug = require('pug');
var locals = require('./project-tiles.json');

// Compile the template to a html
// var serverCompile = pug.compileFile('./src/project-tiles.pug');
// var html = serverCompile(locals);
// fs.writeFileSync("./src/projectTiles.html", html);

// Compile the template to a function string
var clientCompile = pug.compileFileClient('./src/project-tiles.pug', { name: 'projectTiles' });
fs.writeFileSync("./dist/projectTiles.js", clientCompile);