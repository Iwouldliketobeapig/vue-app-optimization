// this is a test loader
const loaderUtils = require('loader-utils')

module.exports = function (content) {
  const options = loaderUtils.getOptions(this)
  console.log(options)
  return '{};' + content
}
