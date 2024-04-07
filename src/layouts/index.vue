<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer" />
      </v-list>
    </v-navigation-drawer>

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

</script>

<style scoped>

</style>
