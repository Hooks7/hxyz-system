<template>
  <div class="login">
    <i-button type="primary" shape="circle" icon="ios-search"></i-button>
  </div>
</template>

<script>
import { userIdentity } from '@/api'
export default {
  data () {
    return {}
  },

  methods: {
    async login () {
      const res = await userIdentity()
      // await userIdentity()
      console.log(res)
    }
  },
  created () {
    this.login()
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
