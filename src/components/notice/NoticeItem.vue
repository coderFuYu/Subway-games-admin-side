<template>
  <div class="noticeItem">
    <div class="item" @click="showMessage=true">{{noticeTitle}} <p class="delete" @click.stop="deleteNotice()">删除</p></div>
    <NoticeMessage v-if="showMessage" @close="showMessage=false" :title="noticeTitle" :notice-message="noticeMessage"/>
  </div>
</template>

<script>
  import NoticeMessage from "./NoticeMessage";
  import {deleteNotice} from "../../network/notice";

  export default {
    name: "NoticeItem",
    components: {
      NoticeMessage
    },
    data() {
      return {
        showMessage: false
      }
    },
    props: {
      noticeTitle: String,
      noticeMessage: String,
      noticeId: String,
    },
    methods: {
      deleteNotice() {
        deleteNotice(this.noticeId, this.$store.state.token).then(res=>{
          console.log(res);
          this.$emit('refresh')
        })
      }
    }
  }
</script>

<style scoped>
  .noticeItem {
    width: 100%;
    height: 1rem;
    background-color: #f9f9f9;
    margin-bottom: 3px;
  }


  .item {
    width: 100%;
    height: 1rem;
    text-align: left;
    line-height: 1rem;
    padding-left: 2rem;
    box-sizing: border-box;
  }

  .delete {
    display: inline-block;
    width: 1rem;
    height: 0.5rem;
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.25rem;
    line-height: 0.5rem;
    background-color: red;
    text-align: center;
    color: #ffffff;
  }

</style>
