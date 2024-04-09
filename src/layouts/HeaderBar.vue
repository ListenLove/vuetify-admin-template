<template>
  <v-app-bar>
    <v-app-bar-title>
      <Breadcrumb />
    </v-app-bar-title>
    <XSpace>
      <v-btn
        :icon="theme.global.name.value === 'light' ? 'mdi-weather-sunny': 'mdi-weather-night'"
        @click="toggleTheme"
      />
    </XSpace>
  </v-app-bar>
</template>

<script setup lang="ts">
import XSpace from '@/components/XSpace.vue'
import Breadcrumb from '@/layouts/components/BreadCrumb.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

</style>
