<template>
  <div class="login">
    <!-- <img
      src="https://hxauth.xiaoyansuo.cn/qr?url=https%3A%2F%2Fopen.weixin.qq.com%2Fconnect%2Foauth2%2Fauthorize%3Fappid%3Dwx55a3ba6f514abcb4%26redirect_uri%3Dhttps%253A%252F%252Fhxauth.xiaoyansuo.cn%252Fweixin%252Faccount%252Fqrlogin%26response_type%3Dcode%26scope%3Dsnsapi_userinfo%26state%3Df6961d3b08002471c2b4f3317e3d8b44%23wechat_redirect"
      class="qr"
    /> -->

  </div>
</template>

<script>
import { userIdentity } from '@/api/login.js'
export default {
  data () {
    return {

    }
  },

  methods: {
    async login () {
      await userIdentity()
      // location.replace('http://www.baidu.com')
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
