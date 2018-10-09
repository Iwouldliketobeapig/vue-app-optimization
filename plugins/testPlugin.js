class testPlugin {
  constructor (options) {
    this.options = options
    console.log(this.options)
  }

  apply (compiler) {
    console.log('this is a testPlugin')
  }
}

module.exports = testPlugin
