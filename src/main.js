// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import '../mock'

Raven
  .config('https://4ff044c4c2374c359a94d58b2c3e89d5@sentry.io/1285464')
  .addPlugin(RavenVue, Vue)
  .install()

Vue.config.productionTip = false

Vue.config.errorHandler = (err, vm, info) => {
  Raven.captureException(err)
}

window.onerror = function (e) {
  Raven.captureException(e)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
