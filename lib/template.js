const handlebars = require('handlebars')
const fs = require('./file')

const handle = handlebars.create()

const registerHelp = async (name, fn) => {
  handle.registerHelper(name, fn)
  return true
}

const template = async source => {
  return handle.compile(source)
}

const render = async (context, source) => {
  const template = handle.compile(source)
  const result = template(context)
  return result
}

module.exports = {
  registerHelp,
  template,
  render
}
