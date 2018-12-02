#! /usr/bin/env node
const program = require('commander')
const path = require('path')
const action = require('./action')

program
  .command('render [config]')
  .alias('t')
  .description('reder template')
  .option('-c, --name [config]', 'config file path')
  .action(option => {
    const configPath = path.join(process.cwd(), option)
    const { render } = action
    console.log('[log] config path: ' + configPath)
    render(configPath).then(() => {
      console.log('[log] render success!')
    })
  })
  .on('--help', function() {
    console.log('  Examples:')
    console.log('')
    console.log('$ templatebuild render config')
    console.log('$ templatebuild t config')
  })

program.parse(process.argv)
