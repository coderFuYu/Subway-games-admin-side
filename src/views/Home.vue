<template>
  <div class="home">
    <div class="top">地铁小游戏管理页面
      <HeadPortrait class="headPortrait" name="A"/>
    </div>
    <div class="body">
      <div class="left">
        <router-link v-for="item in optionList" :to="item.path" tag="div" class="optionItem" :key="item.path">
          {{item.name}}
        </router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadPortrait from "components/head portrait/HeadPortrait";
  import OptionItem from "components/option item/OptionItem";

  export default {
    name: "Home",
    data() {
      return {
        selectionIndex: 0,
        optionList: [
          {name: '用户流量', path: '/home/flow', key: 'flow'},
          {name: '公告列表', path: '/home/notice', key: 'notice'},
          {name: '发送邮件', path: '/home/sendMail', key: 'mail'},
          {name: '商店列表', path: '/home/mall', key: 'mall'}]
      }
    },
    methods: {
      changeActive($event) {
        $event.currentTarget.className = "hover";
      },
      removeActive($event) {
        $event.currentTarget.className = "";
      }
    },
    components: {
      HeadPortrait,
      OptionItem

    }
  }
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }

  .top {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.8rem;
    color: #ffffff;
    text-align: center;
    background-color: #999999;
    user-select: none;
  }

  .headPortrait {
    position: absolute;
    right: 0.5rem;
    top: 0.25rem;
  }

  .left {
    width: 20%;
    height: 100%;
    padding-top: 1.5rem;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    float: left;
    background-color: skyblue;
  }

  .optionItem {
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
    line-height: 1rem;
    text-align: center;
    user-select: none;
    z-index: 3;
  }

  .active {
    background-color: #fff;
  }

  .right {
    width: 80%;
    float: right;
    height: 100%;
    position: absolute;
    overflow-y: auto;
    top: 0;
    right: 0;
    background-color: #eeeeee;
  }
</style>
