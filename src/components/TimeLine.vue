<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useGlobalData } from '../composables/use-global-data'

const { activities } = useGlobalData()
</script>

<template>
  <div class="mt-2">
    <div class="text-4 mt-4 mb-2">
      Activity
    </div>
    <div v-for="(activity, idx) in activities" :key="idx" class="mt-1.5 mb-1">
      <div class="grid grid-cols-[36px_1fr] items-center">
        <div class="text-3">
          {{ activity.date }}
        </div>
      </div>
      <div v-for="(item, idx2) in activity.items" :key="idx2" class="flex flex-col mt-2.5">
        <div class="flex items-center">
          <Icon :icon="item.icon" class="text-slate-400 w-18px h-18px" />
          <div class="text-3.5 ml-2">{{ item.title }}</div>
        </div>
        <div class="text-3 ml-6.5 text-slate-400">{{ item.subtitle }}</div>
      </div>
    </div>
  </div>
</template>