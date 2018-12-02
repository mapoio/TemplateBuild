const context = {
  title: '测试',
  body: '哈哈哈哈哈哈哈'
}

module.exports = {
  entry: [
    {
      template: `${__dirname}/template/index.html`,
      output: `${__dirname}/src/index.html`,
      context: context
    },
    {
      template: `${__dirname}/template/index.js`,
      output: `${__dirname}/src/index.js`,
      context: context
    }
  ],
  context: '',
  output: ''
}
