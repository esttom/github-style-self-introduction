<script setup lang="ts">
import { useModal } from '../composables'

const { open } = useModal()

const menus = [
  'Pull requests', 'Issues', 'Codespaces', 'Marketplace', 'Explore'
]
</script>

<template>
  <div class="flex w-full justify-between items-center pt-3 pb-3 pl-5 pr-5 bg-black/80">
      <div class="sm:md:hidden w-6" />

      <div class="flex items-center">
        <div class="i-cil-cat text-6" />
        <div class="flex items-center max-md:hidden">
          <input type="text" class="ml-4 mr-2 pa-1.5 bg-#0d1117 border-rd-1 border-1 border-solid border-slate-600" placeholder="Search or jump to...">
          <div v-for="menu in menus" :key="menu" class="text-3.5 font-600 ml-2.5 mr-2.5">{{ menu }}</div>
        </div>
      </div>

      <div class="i-carbon-menu text-6 cursor-pointer" @click="open" />
    </div>
</template>
