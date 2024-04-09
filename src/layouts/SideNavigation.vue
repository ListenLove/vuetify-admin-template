<template>
  <v-navigation-drawer
    v-bind="$attrs"
    :rail="computedRail"
  >
    <v-list-item
      class="pt-3 pb-2"
    >
      <template #prepend>
        <v-btn
          size="medium"
          rounded="0"
          :icon="computedRail ?'mdi-format-align-right':'mdi-format-align-left'"
          variant="text"
          @click="toggleSideNavBar"
        />
      </template>
      <h2
        class="text-truncate text-center"
      >
        Vuetify Admin
      </h2>
    </v-list-item>
    <v-list :opened="computedOpened">
      <template
        v-for="routeItem in computedRoutes"
        :key="routeItem.name"
      >
        <!-- 没有子节点 -->
        <v-list-item
          v-if="!routeItem.children || !routeItem.children.length"
          :title="routeItem.props?.title || routeItem.value"
          :value="routeItem.value"
          v-bind="Object.assign({}, routeItem.props||{})"
          :to="{name: routeItem.value}"
          variant="elevated"
          exact
        />
        <!-- 路由有子节点 -->
        <v-list-group
          v-else
          :value="routeItem.value"
        >
          <template #activator="{ props }">
            <v-list-item
              v-if="!rail"
              v-bind="Object.assign({}, props, routeItem.props || {})"
              :title="routeItem.props?.title || routeItem.value"
              :value="routeItem.value"
              variant="elevated"
            />
            <v-menu
              v-else
              open-on-hover
              location="end"
              min-width="120"
            >
              <template #activator="{ props: pps }">
                <v-list-item
                  v-bind="Object.assign({}, pps, routeItem.props || {})"
                  :title="routeItem.props?.title || routeItem.value"
                  :value="routeItem.value"
                  variant="elevated"
                />
              </template>
              <v-list
                :items="routeItem.children"
                style="--indent-padding: 1em"
              />
            </v-menu>
          </template>
          <v-list
            :items="routeItem.children"
            style="--indent-padding: 1em"
          />
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { asyncRoutes } from '@/router/routes'
import { computed } from 'vue'
import { RouteRecordName } from 'vue-router'
import { useRoute } from 'vue-router'

// 路由处理，在这里对路由进行过滤、排序处理
const computedRoutes: typeof asyncRoutes = []
// 过滤处理
asyncRoutes.forEach(route => {
  if (!route.isHidden) {
    // 给每个路由及其子路有添加to属性，便于选定后跳转
    // route.props = Object.assign({}, route.props, {exact: true})
    route.children && route.children.forEach((childRoute) => {
      if (childRoute.isHidden) {
        return
      }
      childRoute.props = Object.assign({}, childRoute.props, {to: {name: childRoute.value, exact: true}})
    })
    computedRoutes.push(route)
  }
})

// 排序处理
computedRoutes.sort((a, b) => {
  const a_order = a.props?.order || 0
  const b_order = b.props?.order || 0
  return b_order - a_order
})

// 伸缩侧边导航栏
const rail = defineModel('rail', {
  type: Boolean,
  default: false,
})

const computedRail = computed(() => {
  return rail.value
})
// 点击伸缩侧边导航栏
function toggleSideNavBar() {
  rail.value = !rail.value
}
// 路由匹配时展开列表
const route = useRoute()
// 打开的路由表
const computedOpened = computed(() => {
  // 在路由中查找和匹配
  const opened: (RouteRecordName | undefined)[] = []
  computedRoutes.forEach(computedRouteItem => {
    // 匹配到的一级路由
    if (computedRouteItem.name === route.name && route.name) {
      opened.push(computedRouteItem.name)
    }
    // 匹配到的二级路由
    if (computedRouteItem.children && computedRouteItem.children.length > 0) {
      computedRouteItem.children.forEach(r => {
        if (r.name === route.name) {
          !opened.includes(r.name) && opened.push(r.name)
          !opened.includes(computedRouteItem.name) && opened.push(computedRouteItem.name)
        }
      })
    }
  })
  if(rail.value) return []
  return opened
})

</script>
<style scoped lang="scss">
:deep(.v-list-item .v-list-item__prepend) {
  width: calc(1em + 20px);
}
</style>
