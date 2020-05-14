<template>
  <div class="sendMail" @keyup.enter="submit()">
    <div class="inputBox">
      <div class="input"><label class="label" for="title">标题:</label><input type="text" v-model="title" id="title">
      </div>
      <div class="input"><label class="label" for="userId">收件人Id:</label><input type="text" v-model="userId"
                                                                                id="userId">
      </div>
      <div class="input"><p class="label">附件类型:</p>
        <input type="radio" :value="null" name="propId" id="workpiece" v-model="propId">
        <label for="workpiece">零件</label>
        <input type="radio" :value="'1'" name="propId" id="rocket" v-model="propId">
        <label for="rocket">火箭加速器</label>
        <input type="radio" :value="'2'" name="propId" id="double" v-model="propId">
        <label for="double">产能翻倍卡</label>
        <input type="radio" :value="'3'" name="propId" id="protective" v-model="propId">
        <label for="protective">工厂防火墙</label></div>
      <div class="input"><label class="label" for="mailMessage">内容:</label><input type="text" v-model="mailMessage"
                                                                                  id="mailMessage"></div>
      <div class="input"><label class="label" for="propAmount">附件数量:</label><input type="text" v-model="propAmount"
                                                                                   id="propAmount"></div>
      <div class="input"><p class="label">是否为公共邮件:</p>
        <input type="radio" :value="'1'" name="isPublic" id="isPublic" v-model="isPublic">
        <label for="isPublic">是</label>
        <input type="radio" :value="'0'" name="isPublic" id="isNotPublic" v-model="isPublic" style="margin-left: 0.5rem">
        <label for="isNotPublic">否</label></div>
    </div>
    <div class="submit" @click="submit()">发送</div>
  </div>
</template>

<script>
  import {sendMail} from "../../network/mail";

  export default {
    name: "SendMail",
    data() {
      return {
        title: '',
        userId: null,
        propId: '',
        mailMessage: '',
        propAmount: '',
        isPublic: ''
      }
    },
    methods: {
      submit() {
        if (this.isPublic === '1') this.userId = null;
        sendMail(this.title, this.userId, this.propId, this.mailMessage, this.propAmount, this.isPublic, this.$store.state.token).then(res => {
          if (res.result === 'success') {
            alert('邮件已发送');
            this.title = '';
            this.userId = '';
            this.propId = '';
            this.mailMessage = '';
            this.propAmount = '';
            this.isPublic = '';
          } else {
            alert('邮件发送失败，请检查邮件内容')
          }
        }).catch(res => {
          alert('邮件发送失败，请检查网络')
        })
      }
    }
  }
</script>

<style scoped>
  .sendMail {
    text-align: left;
    font-size: 0.3rem;
  }

  .inputBox {
    width: 10rem;
    height: 8rem;
    position: absolute;
    top: 2rem;
    left: 50%;
    margin-left: -5rem;
  }

  .input {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
  }

  .label {
    display: inline-block;
    width: 3rem;
    text-align: right;
    padding-right: 0.3rem;
    box-sizing: border-box;
  }

  input[type="text"] {
    height: 0.6rem;
    width: 6.5rem;
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
    top: 9rem;
    left: 50%;
    margin-left: -1rem;
  }
</style>
