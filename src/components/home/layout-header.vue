<template>
  <div>
    <el-row type="flex" class="layout-header">
      <el-col :span="18" class="left-header">
        <i @click="openOrClose" :class="currentClass"></i>
        <span>首页</span>
      </el-col>
      <el-col :span="5" class="layout-right">
        <!-- 图片设置 -->
        <img :src="user.photo ? user.photo : defaultImg" alt />
        <!-- 下拉模板 -->
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            王老师
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="account">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="out">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>@琴岛学院</span>
      </el-col>
    </el-row>
    <el-tab />
  </div>
</template>

<script>
import eventBus from '../../utils/eventBus'
import elTab from '../common/el-tab.vue'
export default {
  components: { elTab },
  data () {
    return {
      user: {},
      defaultImg: require('../../assets/img/avatar.jpg'),
      currentClass: 'el-icon-s-fold'
    }
  },
  methods: {
    openOrClose () {
      // 侧边栏伸缩
      eventBus.$emit('collopseOrClose')
      this.currentClass =
        this.currentClass === 'el-icon-s-fold'
          ? 'el-icon-s-unfold'
          : 'el-icon-s-fold'
    },
    // 下拉事件
    handleCommand (command) {
      if (command === 'account') {
      } else if (command === 'git') {
        // 退出
      } else {
        this.$router.push('/login')
        window.location.reload()
        window.localStorage.clear()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  padding: 12px 0;
  .left-header {
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
      margin-right: 4px;
    }
  }
  .layout-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
