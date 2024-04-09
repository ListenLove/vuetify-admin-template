<template>
  <v-container>
    <v-row
      justify="space-evenly"
      :class="`ga-${gap}`"
    >
      <!-- 使用v-for渲染每个插槽中的子项内容 -->
      <v-spacer />
      <v-col
        v-for="(slotContent, index) in defaultSlots"
        :key="index"
        cols="auto"
      >
        <!-- 渲染插槽子项内容 -->
        <component :is="slotContent" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
type GapType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
withDefaults(defineProps<{
  gap?: GapType,
}>(), {
  gap: 0,
})

const slots = useSlots()
// slots.default() 会返回一个VNode数组
// 如果没有默认插槽提供的内容，则为[]
// 使用计算属性而不是常量，以保持响应性
const defaultSlots = computed(() => {
  return slots.default ? slots.default() : []
})
</script>

<style scoped>
.space-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>
