const fs = require('fs').promises

const appendFile = fs.appendFile

const mkdir = fs.mkdir

const readDir = fs.readdir

const readFile = fs.readFile

const rmDir = fs.rmdir

const unlink = fs.unlink

const writeFile = fs.writeFile

export default {
  appendFile,
  mkdir,
  readDir,
  readFile,
  rmDir,
  unlink,
  writeFile
}
