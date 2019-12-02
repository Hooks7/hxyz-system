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
      <el-menu-item :index="item.route" v-for="item in navigationBar" :key="item.name">
        <span>{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false,
      navigationBar: [
        { name: '首页', route: '/home/main' },
        { name: '发送通知', route: '/home/sendNotification' },
        { name: '收发作业', route: '/home/homeWork' },
        { name: '资料管理', route: '/home/data' },
        { name: '课程管理', route: '/home/course' },
        { name: '老师管理', route: '/home/teacher' },
        { name: '教学场地管理', route: '/home/classroom' },
        { name: '班级管理', route: '/home/class' },
        { name: '机构信息设置', route: '/home/institutions' },
        { name: '班级类型管理', route: '/home/classType' },
        { name: '学期设置', route: '/home/termSet' }
      ]
    }
  },

  mounted () {
    // 刷新时以当前路由做为tab加入tabs
    if (this.$route.path !== '/' && this.$route.path.indexOf('main') === -1) {
      this.$store.commit('add_tabs', { route: '/main', name: '首页' })
      this.$store.commit('add_tabs', {
        route: `/${this.$route.path.split('/')[2]}`,
        name: this.$route.name
      })
      this.$store.commit('set_active_index', this.$route.path)
    } else {
      this.$store.commit('add_tabs', { route: '/main', name: '首页' })
      this.$store.commit('set_active_index', '/main')
      this.$router.push('/home/main')
    }
    // this.GetMenuList()
  },
  created () {
    eventBus.$on('collopseOrClose', () => {
      this.collapse = !this.collapse
    })
  },
  computed: {
    options () {
      return this.$store.state.options
    }
  }
}
</script>

<style  >
</style>
