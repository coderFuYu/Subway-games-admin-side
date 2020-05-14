<template>
  <div class="message">
    <div class="top">
      <p class="itemName">{{title}}</p>
      <div class="back"  @click.stop="$emit('close')"></div>
    </div>
    <div class="detail">
      <p>{{noticeMessage}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NoticeMessage",
    props: {
      title:String,
      noticeMessage: String
    }
  }
</script>

<style scoped>
  .message {
    width: 8rem;
    height: 9rem;
    position: absolute;
    background-color: #fff;
    top: 50%;
    left: 50%;
    margin-top: -4rem;
    margin-left: -4.5rem;
  }
.top{
  width: 100%;
  height: 1.5rem;
  background-color: skyblue;
  position: relative;
  line-height: 1.5rem;
  font-size: 0.4rem;
}
  .back {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-image: url(../../assets/img/back.png);
    background-size: cover;
  }
  .detail{
    text-align: left;
    text-indent: 2em;
    font-size: 0.35rem;

  }

</style>
