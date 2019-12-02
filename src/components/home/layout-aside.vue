<template>
  <div class="layout-aside">
    <el-menu
    :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#042e5c"
      text-color="#ccc"
      active-text-color="#f7fffc"
      :collapse="collapse"
      :collapse-transition="false"
      router
    >
      <el-menu-item :index="item.route" v-for="item in navigationBar" :key="item.route">
        <i :class="item.class"></i>
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
        { name: '首页', route: '/home/main', class: 'el-icon-star-off' },
        { name: '发送通知', route: '/home/sendNotification', class: 'el-icon-goods' },
        { name: '收发作业', route: '/home/homeWork', class: 'el-icon-plus' },
        { name: '资料管理', route: '/home/data', class: 'el-icon-star-off' },
        { name: '课程管理', route: '/home/course', class: 'el-icon-plus' },
        { name: '老师管理', route: '/home/teacher', class: 'el-icon-star-off' },
        { name: '教学场地管理', route: '/home/classroom', class: 'el-icon-star-off' },
        { name: '班级管理', route: '/home/class', class: 'el-icon-star-off' },
        { name: '机构信息设置', route: '/home/institutions', class: 'el-icon-star-off' },
        { name: '班级类型管理', route: '/home/classType', class: 'el-icon-star-off' },
        { name: '学期设置', route: '/home/termSet', class: 'el-icon-star-off' }
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
