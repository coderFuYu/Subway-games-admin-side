<template>
  <div class="notice">
    <div class="addNoticeButton" @click="showAddNotice=true"><div></div><p>添加新通知</p></div>
    <NoticeItem v-for="(item,index) in noticeData" :notice-id="item.id" :notice-message="item.noteMessage"
                :notice-title="item.noteTitle" :key="item.id"
                @click="currentIndex=index" @back="currentIndex=-1" @refresh="getNoticeList()"/>
    <AddNotice v-if="showAddNotice" @close="showAddNotice=false" @refresh="getNoticeList()"/>
  </div>
</template>

<script>
  import {noticeList} from "../../network/notice";
  import NoticeItem from "./NoticeItem";
  import AddNotice from "./AddNotice";

  export default {
    name: "Notice",
    components: {
      NoticeItem,
      AddNotice
    },
    data() {
      return {
        currentIndex: -1,
        noticeData: [],
        showAddNotice:false
      }
    },
    created() {
      this.getNoticeList();
    },
    methods: {
      getNoticeList() {
        noticeList(this.$store.state.token).then(res => {
          this.noticeData = res.body;
        })
      },
    },

  }
</script>

<style scoped>
  .notice {
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
    box-sizing: border-box;
  }
  .addNoticeButton{
    width: 100%;
    height: 1rem;
    background-color: #f9f9f9;
    margin-bottom: 3px;
    line-height: 1rem;
    box-sizing: border-box;
    text-align: left;
  }
  .addNoticeButton div{
    width: 0.5rem;
    height: 0.5rem;
    background-image: url(../../assets/img/addFriend.png);
    background-size: cover;
    float: left;
    margin: 0.25rem 1rem 0.25rem 0.5rem;
  }

</style>
