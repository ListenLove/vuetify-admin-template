<template>
  <v-navigation-drawer>
    <v-list>
      <template
        v-for="route in computedRoutes"
        :key="route.name"
      >
        <!-- 路由有子节点 -->
        <v-list-group
          v-if="route.children?.length"
          :value="route.name"
        >
          <template #activator="{ props }">
            <v-list-item
              v-bind="Object.assign({}, props, route.props || {})"
              :title="route.props?.title || route.value"
              :value="route.value"
              :variant="'elevated'"
            />
          </template>
          <v-list
            :items="route.children"
            style="--indent-padding: 1em"
          />
        </v-list-group>
        <!-- 没有子节点 -->
        <v-list-item
          v-else
          :title="route.props?.title || route.value"
          :value="route.value"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { asyncRoutes } from '@/router/routes'

// 路由处理，在这里对路由进行过滤、排序处理
const computedRoutes: typeof asyncRoutes = []
// 过滤处理
asyncRoutes.forEach(route => {
  if (!route.isHidden) {
    computedRoutes.push(route)
  }
})
// 排序处理
computedRoutes.sort((a, b) => {
  const a_order = a.props?.order || 0
  const b_order = b.props?.order || 0
  return b_order - a_order
})
</script>
<style scoped lang="scss">
:deep(.v-list-item .v-list-item__prepend) {
  width: calc(1em + 20px);
}
</style>
