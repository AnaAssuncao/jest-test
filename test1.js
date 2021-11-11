export default {
    funcB: function(){
      return 'original';
    },
    funcA:function(){
      return this.funcB();
    }
}