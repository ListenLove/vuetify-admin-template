<template>
  <v-breadcrumbs :items="paths">
    <template #prepend>
      <v-icon
        icon="$vuetify"
        size="small"
      />
    </template>
  </v-breadcrumbs>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLinkProps } from 'vue-router'
type Path =   string | (Partial<RouterLinkProps> & { title: string; disabled: boolean })
const route = useRoute()

const paths = computed(() => {
  return route.matched.map((matchedRoute, index) => {
    return {
      href: matchedRoute.name as unknown,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      title: matchedRoute.props?.default?.title || matchedRoute.name,
      disabled: index === route.matched.length -1,
    }
  }) as Path[]
})

</script>

<style scoped>

</style>
