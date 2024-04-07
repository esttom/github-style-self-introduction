<script setup lang="ts">
import { useGlobalData } from '../../composables'

const { skillChart } = useGlobalData()
</script>


<template>
  <div class="flex justify-between mr-2 mt-2 mb-2 font-600">
    <div class="text-3.5">Chart</div>
  </div>

  <div class="flex overflow-x-auto">
    <div v-for="(_, idx) in skillChart.labels" :key="idx" class="pos-relative w-40% mr-2 border-rd-2 border-1 border-solid border-slate-500 pa-1.5 mb-2">
      <div class="flex flex-col">
        <span class="text-3 mr-2">label</span>
        <input v-model="skillChart.labels[idx]" type="text" class="text-3" />
        <span class="text-3 mr-2">data</span>
        <input v-model="skillChart.data[idx]" type="number" class="text-3" min="0" max="100" />
      </div>
    </div>
  </div>
</template>