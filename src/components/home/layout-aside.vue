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
      <el-menu-item
        :index="item.route"
        v-for="item in menuItems"
        :key="item.route"
      >
        <i :class="item.class" />
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus'
export default {
  data() {
    return {
      collapse: false,
    }
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems
    },
  },
  mounted() {
    // 刷新时以当前路由做为tab加入tabs(首页保留)
    this.$store.commit('add_tabs', { route: '/main', name: '首页' })

    if (this.$route.path.indexOf('/main') != -1) return
    this.$store.commit('add_tabs', {
      route: this.$route.path,
      name: this.$route.name,
    })
    this.$store.commit('set_active_index', this.$route.path)
  },
  created() {
    eventBus.$on('collopseOrClose', () => {
      this.collapse = !this.collapse
    })
  },
}
</script>
<style lang="less" scoped>
/deep/.el-menu {
  border-right: none;
}
</style>
