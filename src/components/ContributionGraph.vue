<script setup lang="ts">
const contributionRows = 7
const contributionCols = 5*12

const contributionColors = ['bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900']

function randomColor() {
  return contributionColors[Math.floor(Math.random() * 5)];
}
</script>

<template>
  <div class="overflow-x-auto border-1 border-solid border-slate-700 pa-4 mt-4">
    <div class="min-w-760px">
      <div v-for="row in contributionRows" :key="row" class="flex items-center">
        <div class="w-26px text-10px">
          {{ row === 2 ? 'Mon' : row === 4 ? 'Wed' : row === 6 ? 'Fri' : '' }}
        </div>
        <div v-for="col in contributionCols" :key="col" class="flex">
          <div :class="`h-10px w-10px ${randomColor()} ma-1px border-rd-0.5`" />
        </div>
      </div>
      <div class="flex items-center justify-end pl-2 pr-2 pt-2">
        <div class="text-3 mr-1">Less</div>
        <div class="h-10px w-10px ma-1px border-rd-0.5 bg-green-900" />
        <div class="h-10px w-10px ma-1px border-rd-0.5 bg-green-800" />
        <div class="h-10px w-10px ma-1px border-rd-0.5 bg-green-700" />
        <div class="h-10px w-10px ma-1px border-rd-0.5 bg-green-600" />
        <div class="h-10px w-10px ma-1px border-rd-0.5 bg-green-500" />
        <div class="text-3 ml-1">More</div>
      </div>
    </div>
    </div>
</template>