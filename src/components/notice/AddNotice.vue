<template>
  <div class="addNotice" @keyup.enter="submit()">
    <div class="top">
      <p class="itemName">添加公告</p>
      <div class="back"  @click.stop="$emit('close')"></div>
    </div>
    <div class="inputBox"><label for="title">标题:</label><input class="input" type="text" v-model="title" id="title">
    </div>
    <div class="inputBox"><label for="userId">内容:</label><textarea class="input" id="userId" v-model="message"></textarea>
    </div>
    <div class="submit" @click="submit()">确认</div>
  </div>

</template>

<script>
  import {addNotice} from "../../network/notice";

  export default {
    name: "AddNotice",
    data() {
      return {
        title: '',
        message: ''
      }
    },
    methods:{
      submit(){
        addNotice(this.title,this.message,this.$store.state.token).then(res=>{
          console.log(res);
          if(res.result==='success'){
            alert('发送通知成功');
            this.$emit('close');
            this.$emit('refresh');
          }
        })
      }
    }
  }
</script>

<style scoped>
  .addNotice {
    width: 8rem;
    height:5rem;
    position: absolute;
    background-color: #fff;
    top: 50%;
    left: 50%;
    margin-top: -2rem;
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


  .inputBox {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
  }
  label {
    display: inline-block;
    width:1rem;
    height: 1rem;
    float: left;
  }

  .input{
    height: 0.6rem;
    width: 4rem;
  }

  .submit {
    width: 2rem;
    height: 1rem;
    background-color: skyblue;
    color: white;
    text-align: center;
    line-height: 1rem;
    font-size: 0.4rem;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    margin-left: -1rem;
  }
</style>
