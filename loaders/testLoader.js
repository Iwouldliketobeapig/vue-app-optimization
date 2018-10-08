// this is a test loader
const loaderUtils = require('loader-utils')

module.exports = function (content) {
  const options = loaderUtils.getOptions(this)
  console.log(options)
  // 关闭缓存
  // this.cacheable(false)
  this.callback(null, '{};' + content)
  // this.callback(error, content, sourceMap, ast)
  // error：Error | null，当loader出错时向外跑出一个Error
  // content：String | Buffer，经过loader编译后需要导出的内容
  // sourceMap：为方便调试生成的编译后内容的source map
  // ast: 本次编译生成的AST静态语法树，之后执行的loader可以直接使用这个AST，可以省去重复生成AST的过程
}

// 异步直接用async await,老版本node用this.async()

module.exports.pitch = (remaining, preceding, data) => {
  console.log('remaining=======', remaining)
  console.log('preceding=======', preceding)
  data.value = 'test' // 一个rule中的所有loader都可以拿到这个值
}
