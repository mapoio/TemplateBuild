const fs = require('./file')
const handle = require('./template')

const getConfig = path => {
  if (!fs.isPathExists(path)) throw new Error(`The Template Config File ${path} is NOT FOUNT!`)
  try {
    const config = require(path)
    return config
  } catch (e) {
    throw new Error(`Require Config File ${path} was failed!`)
  }
}

const render = async (path, options) => {
  const config = getConfig(path)
  const list = config.entry || []
  if (!Array.isArray(list)) return
  list.forEach(async value => {
    const { template, output, context } = value
    const source = await fs.read(template)
    const result = await handle.render(context, source)
    try {
      await fs.write(output, result)
      return true
    } catch (e) {
      throw new Error('Render failed!')
    }
  })
}

module.exports = {
  render
}
