<template>
  <v-layout class="rounded rounded-md">
    <SideNavigation
      :rail="mdAndDown"
      :permanent="!xs"
    />
    <HeaderBar />
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px;"
    >
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import SideNavigation from '@/layouts/SideNavigation.vue'
import HeaderBar from '@/layouts/HeaderBar.vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const {mdAndDown, xs} = useDisplay()  // 中型屏及以下将侧边栏收缩，在移动端屏上完全侧边栏隐藏

</script>

<style scoped>

</style>
