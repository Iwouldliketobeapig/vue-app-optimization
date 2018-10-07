**简单的集成到了vue-cli生成的项目上**

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

## 一、集成validate-commit-msg

*管理团队的commit信息*

### 步奏

> 安装validate-commit-msg
```bash
npm i --D validate-commit-msg
```
> 添加commit规则
1. 根目录添加[.vcmrc](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/.vcmrc)文件，并添加规则，必须为JSON格式
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
* 在[package.json](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/package.json#L12)中添加"commitmsg": "validate-commit-msg"
```
{
  "scripts": {
    "commitmsg": "validate-commit-msg"
  }
}
```
[查看validate-commit-msg详情](https://www.npmjs.com/package/validate-commit-msg)

## 二、集成stylelint

*管理团队css编写规范*

### 步奏
> 安装stylelint, stylelint-order, stylelint-processor-html, stylelint-scss, stylelint-webpack-plugin
```bash
// stylelint-order: 属性顺序插件
// stylelint-processor-htm: 检查html中的<style>便签中的样式
// stylelint-scss: scss语法检测
// stylelint-webpack-plugin: webpack检查插件
npm i stylelint stylelint-order stylelint-processor-html stylelint-scss stylelint-webpack-plugin --D
```

> 在根目录添加[.stylelintrc](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/.stylelintrc)文件，添加规则和插件
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

> webpack中添加[stylelint-webpack-plugin](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/build/webpack.dev.conf.js#L59)
```javascript
const StyleLintPlugin = require('stylelint-webpack-plugin');
plugins: [
  new StyleLintPlugin({
    files: ['**/*.s?(a|c)ss', '**/*.vue'],
    syntax: 'scss'
  }),
]
```
[查看stylelint详情](https://stylelint.io/) [查看stylelint-webpack-plugin详情](https://www.npmjs.com/package/stylelint-webpack-plugin)

## 三、Mock

*前后端分期*

### 步奏

> 安装mockjss
```bash
npm i --D mockjs
```

> 我在项目中创建了个mock，定义了个[test](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/mock/user/test.js)
```javascript
const Mock = require('mockjs')
Mock.mock('/test', 'get',
  {
    'userList|1-10': [
      {
        'id|1-10': 2
      }
    ]
  }
)
```

> 在src下的App.vue中[引入](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/src/main.js#L8)(通过添加环境变量引入，可以快速切换)
```javascript
import '../mock'
```

> [HelloWord.vue](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/src/components/HelloWorld.vue#L115)中测试
```javascript
axios.get('/test')
  .then(res => {
    console.log(res)
  })
```
[查看mockjs详情](http://mockjs.com/)

## 四、Sentry

*管理生产bug*

### 步奏
> 在Sentry上创建一个项目获取DNS
> 在[main.js](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/src/main.js#L6)添加
```javascript
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
Raven
  .config('https://4ff044c4c2374c359a94d58b2c3e89d5@sentry.io/1285464')
  .addPlugin(RavenVue, Vue)
  .install()
```
`npm run dev下，Vue会主动捕获所有的错误并将其输出到控制台，Sentry无法捕获到错误`

[查看Sentry详情](https://sentry.io/welcome/)
