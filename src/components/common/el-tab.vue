<template>
  <div>
    <el-tabs
      v-model="activeIndex"
      type="card"
      @tab-remove="tabRemove"
      @tab-click="tabClick"
      v-if="options.length"
    >
      <el-tab-pane
        :closable="item.route != homePage"
        v-for="item in options"
        :key="item.route"
        :label="item.name"
        :name="item.route"
      />
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homePage: '/main',
    }
  },

  watch: {
    $route(to) {
      let flag = false
      for (let option of this.options) {
        if (option.name === to.name) {
          flag = true
          this.$store.commit('set_active_index', to.path)
          break
        }
      }
      if (!flag && to.path !== this.homePage) {
        this.$store.commit('add_tabs', {
          route: to.path,
          name: to.name,
        })
        this.$store.commit('set_active_index', to.path)
      }
    },
  },
  computed: {
    // 标签栏
    options() {
      return this.$store.state.options
    },
    // 标签选中索引
    activeIndex: {
      get() {
        return this.$store.state.activeIndex
      },
      set(val) {
        this.$store.commit('set_active_index', val)
      },
    },
  },
  methods: {
    // 标签选中
    tabClick() {
      let path = this.activeIndex
      this.$route.path != this.activeIndex &&
        this.$router.push({ path: `${path}` })
    },
    // 删除标签
    tabRemove(targetName) {
      this.$store.commit('delete_tabs', targetName)
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit(
            'set_active_index',
            this.options[this.options.length - 1].route,
          )
          this.$router.push({ path: `${this.activeIndex}` })
        } else {
          this.$router.push({ path: this.homePage })
        }
      }
    },
  },
}
</script>
