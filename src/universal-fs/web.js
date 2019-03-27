import { writeFile as writeFileWeb, readFile as readFileWeb, readString, removeFile, mkdir, rmdir, readdir } from 'fs-web'

const appendFile = async (filename, data, cb) => {
  const fileData = await readFile(filename)
  const newFileData = fileData + data
  return writeFile(newFileData, data, cb)
}

const readFile = (filename, options) => {
  if (options.encoding === 'utf8') return readString(filename)
  return readFileWeb(filename)
}
const writeFile = async (...args) => {
  await writeFileWeb(...args)
  return readFile(args[0])
}
const unlink = (...args) => removeFile(...args)

export default {
  appendFile,
  mkdir,
  readdir,
  readFile,
  rmdir,
  unlink,
  writeFile
}
