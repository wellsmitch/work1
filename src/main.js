// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
var bw = (document.documentElement.clientWidth/7.5)+"px";
var htmlTag = document.getElementsByTagName("html")[0];

htmlTag.style.fontSize=bw;

//console.log(window.getComputedStyle(document.querySelector('html')).fontSize);

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
