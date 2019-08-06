<template>
  <div class="inputBox">
    <div class="title">系统登录</div>
    <div class="input">
      <el-input v-model="username" type="text" placeholder="请输入用户名" size="medium"></el-input>
      <el-input v-model="password" type="password" placeholder="请输入密码" size="medium"></el-input>
      <div class="alignCen">
        <template>
          <el-checkbox v-model="checked" checked="checked">记住密码</el-checkbox>
        </template>
      </div>
      <el-button type="primary" @click="checkLogin()" size="medium">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      checked: false,
      axiosUser: '',
      axiosPwd: '',
      axiosdata: []
    }
  },
  methods: {
    checkLogin: function () {
      if (this.username === '') {
        this.$message({
          message: '请输入用户名',
          type: 'warning'
        })
      } else if (this.password === '') {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        })
      } else {
        axios.get('/api/json/userLogin.json')
        .then(this.getInfo)
      }
    },
    getInfo (res) {
      const axiosdata = res.data
      this.axiosUser = axiosdata.username
      this.axiosPwd = axiosdata.password
      if (this.username === this.axiosUser && this.password === this.axiosPwd) {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.$router.push('/system')
      }else{
        this.password = ''
        this.username = ''
        this.$message.error({
          message: '用户名或密码错误'
        })
      }
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
