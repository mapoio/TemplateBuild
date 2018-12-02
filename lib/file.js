const fs = require('fs-extra')

const isPathExists = async path => {
  const result = await fs.pathExists(path)
  return result
}

const createFile = async file => {
  try {
    await fs.ensureFile(file)
    return true
  } catch (e) {
    throw new Error(`Created File '${file}' was failed!`)
  }
}

const write = async (filePath, text) => {
  try {
    await fs.outputFile(filePath, text)
    return true
  } catch (e) {
    throw new Error(`Write File '${file}' was failed!`)
  }
}
const read = async filePath => {
  try {
    const result = await fs.readFile(filePath, 'utf8')
    return result
  } catch (e) {
    throw new Error(`Read File '${file}' was failed!`)
  }
}

module.exports = {
  isPathExists,
  write,
  createFile,
  read
}
