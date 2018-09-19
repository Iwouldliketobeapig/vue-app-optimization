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

> 安装validate-commitmsg
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