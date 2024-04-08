<template>
  <v-layout class="rounded rounded-md">
    <side-navigation />
    <v-app-bar title="Application bar" />

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
</script>

<style scoped>

</style>
