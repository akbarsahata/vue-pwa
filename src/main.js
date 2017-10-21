// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/uikit.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import UIKit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
UIKit.use(Icons)
window.UIKit = UIKit

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
