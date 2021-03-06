import Vue from 'vue'
import VueToast from './main.js';

//Vue.component(VueToast.name, VueToast)

console.log(VueToast);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template:`
    <div>
      <button v-on:click="_click()">Click ME!</button>
    </div>
  `,
  methods:{
    _click(){
      VueToast({
        message: '操作成功',
        iconClass: 'ion ion-ios-checkmark'
        });
    }
  },
  components: { VueToast }
})
