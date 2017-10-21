import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/components/Mainpage'
import Challenge from '@/components/Challenge'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Countdown from '@/components/Countdown'
import Finished from '@/components/Finished'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/challenge',
      name: 'Challenge',
      component: Challenge
    },
    {
      path: '/app',
      name: 'Mainpage',
      component: Mainpage
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/countdown',
      name: 'Countdown',
      component: Countdown
    },
    {
      path: '/finished',
      name: 'Finished',
      component: Finished
    }
  ],
  scrollBehavior (to, from, saved) {
    return { x: 0, y: 0 }
  }
})
