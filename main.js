const { spawn } = require('child_process')
const { camelCase } = require('lodash')
const CrossEnv = require('cross-env')
const List = require('prompt-list')
const { say } = require('cfonts')


const actions = {
  startDevelopmentServer() {
    const cmd = spawn('cmd', [
      '/c',
      'cross-env',
      'NODE_ENV=development',
      'webpack-dev-server',
      '--inline',
      '--open',
      '--hot'
    ])

    cmd.stdout.on('data', data => console.log(`${data}`))
  },


  runBuildProcess() {
    const cmd = spawn('cmd', [
      '/c',
      'cross-env',
      'NODE_ENV=production',
      'webpack',
      '--progress',
      '--hide-modules'
    ])

    cmd.stdout.on('data', data => console.log(`${data}`))
  },


  leave() {
    console.log('Leaving...')
  }

}



const list = new List({
  name: 'action',
  message: 'Select an action',
  choices: [
    '1. Start development server\n',
    '2. Run build process\n',
    {name: Array(process.stdout.columns - 7).join(' '), disabled: '-'},
    '3. Leave'
  ]
})



say(' felixluciano.github.io ', {
  font: 'chrome',
  align: 'left',
  colors: ['cyan', 'cyan', 'cyan'],
  background: 'whiteBright',
  letterSpacing: 2,
  lineHeight: 1,
  maxLength: '0',
  space: true
})


list.ask(option => {
  const action = camelCase(option.replace(/[^a-zA-Z ]\W+/g, ''))

  actions[action].call()
})
