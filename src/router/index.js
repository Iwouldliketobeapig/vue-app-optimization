import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/test'
const HelloWorld = resolve => require.ensure([], () => resolve(require('@/components/HelloWorld')))
const Test = resolve => require.ensure([], () => resolve(require('@/components/test')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
