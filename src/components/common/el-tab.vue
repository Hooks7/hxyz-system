<template>
  <div>
    <el-tabs
      v-model="activeIndex"
      type="card"
      closable
      @tab-remove="tabRemove"
      @tab-click="tabClick"
      v-if="options.length"
    >
      <el-tab-pane v-for="item in options" :key="item.name" :label="item.name" :name="item.route"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      route: ''
    }
  },
  methods: {
    tabClick (tab) {
      let path = this.activeIndex
      this.$router.push({ path: `/home${path}` })
    },
    tabRemove (targetName) {
      // 首页不可删除
      if (targetName === '/main') {
        return
      }
      this.$store.commit('delete_tabs', targetName)
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit(
            'set_active_index',
            this.options[this.options.length - 1].route
          )
          this.$router.push({ path: `/home${this.activeIndex}` })
        } else {
          this.$router.push({ path: '/home/main' })
        }
      }
    }
  },

  watch: {
    route (to) {
      let flag = false
      for (let option of this.options) {
        if (option.name === to.name) {
          flag = true
          this.$store.commit('set_active_index', '/' + to.path.split('/')[2])
          break
        }
      }
      if (!flag && to.path !== '/home/main') {
        this.$store.commit('add_tabs', {
          route: '/' + to.path.split('/')[2],
          name: to.name
        })
        this.$store.commit('set_active_index', '/' + to.path.split('/')[2])
      }
    }
  },
  computed: {
    options () {
      return this.$store.state.options
    },
    activeIndex: {
      get () {
        return this.$store.state.activeIndex
      },
      set (val) {
        this.$store.commit('set_active_index', val)
      }
    }
  },
  mounted () {
    this.route = this.$route
  }
}
</script>

<style>
</style>
