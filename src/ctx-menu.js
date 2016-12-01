export default {
  name: 'CtxMenu',
  data: function() {
    return {
      menuVisible: false
    }
  },
  props: ['items'],
  methods: {
    openMenu: function(event) {
      this.menuVisible = true;
      event.preventDefault()
      event.stopPropagation()
      return false;
    },
    closeMenu: function(event) {
      this.menuVisible = false;
    },
    itemClick: function(item){
      console.log(item);
      // var itemIndex = this.items.indexOf(item);
      this.$emit('menuclick',item);
    }
  }
};
