import Vue from 'vue'
import CtxMenu from 'src/CtxMenu'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    'ctx-menu': CtxMenu
  },
  data: {
    items: [{
      name: 'item1',
      url: 'url1'
    }, {
      name: 'item2',
      url: 'url2'
    }, {
      name: 'item3',
      url: 'url3'
    }, {
      name: 'item4',
      url: 'url4'
    }]
  },
  methods: {
    'menuClick': function(menuItem) {
      console.log('菜单被点击');
      console.log(menuItem);
    }
  }
})
