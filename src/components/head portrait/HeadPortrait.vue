<template>
<div class="headPortrait">{{name}}</div>
</template>

<script>
  export default {
    name: "HeadPortrait",
    props:{
      name:''
    }

  }
</script>

<style scoped>
.headPortrait{
  width: 1rem;
  height: 1rem;
  background-color: skyblue;
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
  color: #ffffff;
  user-select: none;
}
</style>
