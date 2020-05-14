<template>
  <div class="optionItem" :class="{selection:on}" @click="goto()" @mouseenter="on=true" @mouseleave="on=false">
    {{itemName}}
  </div>
</template>

<script>
  export default {
    name: "OptionItem",
    data(){
      return{
      on:false
      }
    },
    props: {
      itemName: String,
      path:String,
      index:Number
    },
    methods:{
      goto(){
        // this.$router.push('/home')
        this.$router.push(this.path)
        this.$emit('goto',this.index)
      }
    }

  }
</script>

<style scoped>
  .optionItem {
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
    line-height:1rem;
    text-align: center;
    user-select: none;
    z-index: 3;
  }

</style>
