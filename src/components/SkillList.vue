<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useGlobalData } from '../composables/use-global-data'

const { skillList } = useGlobalData()
</script>

<template>
  <div class="mt-2">
    <div class="text-4 mt-4 mb-2">
      Pinned
    </div>
    <div class="grid grid-cols-[1fr_1fr]  max-md:grid-cols-1 grid-gap-2">
      <div v-for="(skill, idx) in skillList" :key="idx" class="border-rd-1 border-solid border-1 border-slate-600 pa-2">
        <div class="flex items-center">
          <Icon :icon="skill.icon" class="text-slate-400 w-16px h-16px" />
          <div class="text-3.5 text-blue-500 ml-1.5">{{ skill.name }}</div>
        </div>
        <div class="flex items-center text-slate-400 mt-1">
          <div class="i-carbon-star" style="margin-right: 4px" />
          <div class="text-3">{{skill.star}}/5</div>
  
          <div class="i-carbon-calendar" style="margin: 0 4px 0 12px" />
          <div class="text-3">{{skill.year}} yrs</div>
        </div>
      </div>
    </div>
  </div>
</template>