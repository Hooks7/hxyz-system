<template>
  <div class="layout-aside">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#042e5c"
      text-color="#ccc"
      active-text-color="#f7fffc"
      :collapse="collapse"
      :collapse-transition="false"
      router
    >
      <el-menu-item index="/home">
        <span>首页</span>
      </el-menu-item>

      <el-menu-item index="/home/sendNotification">
        <span>发送通知</span>
      </el-menu-item>
      <el-menu-item index="/home/homeWork">
        <span>收发作业</span>
      </el-menu-item>
      <el-menu-item index="/home/data">
        <span>资料管理</span>
      </el-menu-item>
      <el-menu-item index="/home/course">
        <span>课程管理</span>
      </el-menu-item>
      <el-menu-item index="/home/teacher">
        <span>老师管理</span>
      </el-menu-item>
      <el-menu-item index="/home/classroom">
        <span>教学场地管理</span>
      </el-menu-item>
      <el-menu-item index="/home/class">
        <span>班级管理</span>
      </el-menu-item>
      <el-menu-item index="/home/institutions">
        <span>机构信息设置</span>
      </el-menu-item>
      <el-menu-item index="/home/classType">
        <span>班级类型管理</span>
      </el-menu-item>
      <el-menu-item index="/home/termSet" >
        <span>学期设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false
    }
  },
  created () {
    eventBus.$on('collopseOrClose', () => {
      this.collapse = !this.collapse
    })
  }
}
</script>

<style  >
</style>
