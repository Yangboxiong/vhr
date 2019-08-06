<template>
  <div class="inputBox">
    <div class="title">系统登录</div>
    <div class="input">
      <el-input v-model="username" placeholder="请输入用户名" size="medium"></el-input>
      <el-input v-model="password" placeholder="请输入密码" size="medium"></el-input>
      <div class="alignCen">
        <template>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </template>
      </div>
      <el-button type="primary" @click="checkLogin()" size="medium">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      checked: false
    }
  },
  methods: {
    checkLogin () {
      this.$router.push('/system')
    }
  }
}
</script>

<style>
  @import url("../assets/css/public.css");
</style>

<style scoped>
  .inputBox{ width: 420px; height: 350px; border-radius: 15px; box-shadow: rgba(0,0,0,0.25) 0 0 15px; margin: 10% auto 0;}
  .title{ height: 100px; line-height: 100px; text-align: center; font-size: 20px; font-weight: bold;}
  .input{ margin: 0 10%; }
  .alignCen{ margin: 10px 0; text-align: center;}
  .el-input{ margin: 10px 0; font-size: 14px;}
  .el-button{ width: 100%;}
</style>
