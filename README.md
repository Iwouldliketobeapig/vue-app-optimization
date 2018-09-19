# vue-app-optimization

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 集成validate-commit-msg

*管理团队的commit信息*

### 方法

> 安装validate-commit-msg
```bash
npm i --D validate-commit-msg
```
> 添加commit规则
1. 根目录添加.vcmrc文件，并添加规则，必须为JSON格式
```JSON
{
  "types": ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"],
  "scope": {
    "required": false,
    "allowed": ["*"],
    "validate": false,
    "multiple": false
  },
  "warnOnFail": false,
  "maxSubjectLength": 100,
  "subjectPattern": ".+",
  "subjectPatternErrorMsg": "subject does not match subject pattern!",
  "helpMessage": "",
  "autoFix": false
}
```
2. 添加到package.json中
```package.json
{
  "config": {
    "validate-commit-msg": {
      /* your config here */
    }
  }
}
```
> 安装husky,并添加commitmsg命令
```bash
npm i --D husky
```
* 在package.json中添加"commitmsg": "validate-commit-msg"
```
{
  "scripts": {
    "commitmsg": "validate-commit-msg"
  }
}
```
[validate-commit-msg](https://www.npmjs.com/package/validate-commit-msg)

### 集成stylelint

*管理团队css编写规范*

### 方法
> 安装stylelint, stylelint-order, stylelint-processor-html, stylelint-scss, stylelint-webpack-plugin
```bash
// stylelint-order: 属性顺序插件
// stylelint-processor-htm: 检查html中的<style>便签中的样式
// stylelint-scss: scss语法检测
// stylelint-webpack-plugin: webpack检查插件
npm i stylelint stylelint-order stylelint-processor-html stylelint-scss stylelint-webpack-plugin --D
```

> 在根目录添加.stylelintrc文件，添加规则和插件
```json
{ 
  "processors": ["stylelint-processor-html"],
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
	],
  "extends": "css-properties-sorting",
  "rules": {
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "color-no-invalid-hex": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "at-rule-no-unknown": true,
    "comment-no-empty": true,
    "no-invalid-double-slash-comments": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never"
  }
}
```

> webpack中添加stylelint-webpack-plugin
```javascript
const StyleLintPlugin = require('stylelint-webpack-plugin');
plugins: [
  new StyleLintPlugin({
    files: ['**/*.s?(a|c)ss', '**/*.vue'],
    syntax: 'scss'
  }),
]
```
[stylelint](https://stylelint.io/)[stylelint-webpack-plugin](https://www.npmjs.com/package/stylelint-webpack-plugin)