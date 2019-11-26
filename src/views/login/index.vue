<template>
  <div class="login">

  <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    login () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
text-align: center;
  height: 100vh;
  background-color: pink;
}
</style>
