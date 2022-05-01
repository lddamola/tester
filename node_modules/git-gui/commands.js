#!/usr/bin/env node

var path = require('path');
var chalk       = require('chalk');
var mkdirp = require('mkdirp');
var argv = require('minimist')(process.argv);
var fs = require('fs')

var homePath = getUserHome();
var reposDir = `${homePath}/.git-gui`
var fileName = reposDir + `/repos`;


if (!fs.existsSync(reposDir)) {
  mkdirp(reposDir, function (err) {
    if (err) console.error(err)
    else console.log('created setting directory')
  });

}

let reposName = argv._[2] || argv.name || process.cwd()

console.log(`reposName: ${reposName} added`);

fs.appendFile(fileName, `${reposName}\t${process.cwd()}\n`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});


function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

