<template>
  <div class="view" @keyup.enter="login()">
    <div class="top"><h1>欢迎进入地铁小游戏管理页面</h1></div>
    <div class="center">
      <div class="left"></div>
      <div class="right">
        <div class="login">请登录</div>
        <div class="form">
          <div class="tip">{{ tip }}</div>
          <input type="text" class="userName" placeholder="请输入管理员账号" v-model="userName">
          <br>
          <input type="password" class="password" placeholder="请输入密码" v-model="password">
          <div class="submit" @click="login()">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from "network/login";

export default {
  name: "Login",
  data() {
    return {
      userName: '',
      password: '',
      tip: '',
    }
  }, methods: {
    login() {
      if (this.userName === '' || this.password === '') {
        this.tip = '请输入账号和密码！';
      } else {
        login(this.userName, this.password).then(
            res => {
              if (res && res.result === "success") {
                this.$store.state.token = res.body.token;
                this.$router.push('/home')
              } else {
                this.tip = '账号或密码错误！'
              }
            }
        )
      }
    }
  }
}
</script>

<style scoped>
.view {
  width: 100%;
  height: 100%;
}

.top {
  width: 100%;
  background-color: skyblue;
  text-align: center;
  height: 1.5rem;
  line-height: 1.5rem;
}

h1 {
  color: white;
  font-weight: normal;
}

.center {
  width: 18.4rem;
  height: 8rem;
  margin: 2rem auto;
  font-size: 0.4rem;
}

.center .left {
  width: 10.4rem;
  height: 8rem;
  background-image: url("../assets/img/bg.jpg");
  background-size: 10.4rem 8rem;
  float: left;
}

.center .right {
  width: 8rem;
  height: 8rem;
  float: right;
  border: 1px solid #a0b1c4;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
}

.center .right .login {
  width: 100%;
  background-color: skyblue;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: #fff;
}

.center .right .form {
  margin: 0.5rem auto;
}

.center .right .form input {
  width: 5rem;
  height: 1rem;
  border: 1px solid #ccc;
  margin: 0.6rem 1.5rem;
}

.center .right .form .userName {
  margin: 0 1.5rem 0.6rem;
}

.center .right .form div {
  width: 5rem;
  height: 0.8rem;
  text-align: center;
  background-color: skyblue;
  margin: 0.6rem 1.5rem;
  line-height: 0.8rem;
  color: #ffffff;
}

.center .right .form .tip {
  background-color: #fff;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  margin: 0 auto 0.3rem auto;
  font-size: 0.24rem;
  color: red;
}
</style>
