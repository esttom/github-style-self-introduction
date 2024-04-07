<script setup lang="ts">
const headers = [
  {
    'name': 'Overview',
    'icon': 'i-carbon-notebook'
  },
  {
    'name': 'Repositories',
    'icon': 'i-carbon-data-base'
  },
  {
    'name': 'Projects',
    'icon': 'i-carbon-dashboard'
  },
  {
    'name': 'Packages',
    'icon': 'i-carbon-archive'
  },
  {
    'name': 'Stars',
    'icon': 'i-carbon-star'
  },
  {
    'name': 'Sponsoring',
    'icon': 'i-carbon-favorite'
  },
]
</script>

<template>
  <div class="overflow-x-auto max-md:mt-2">
    <div class="flex">
      <div v-for="header in headers" :key="header.name" :class="['flex', 'items-center', 'ml-1', 'mr-1', 'pa-2', { 'font-600 border-0 border-b border-solid border-orange-500': header.name === 'Overview' }]">
        <div :class="['text-slate-400 w-18px h-18px', header.icon]" />
        <div class="text-3.5 ml-1">{{ header.name }}</div>
      </div>
    </div>
  </div>
</template>
