<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useGlobalData } from '../composables'

const { profile } = useGlobalData()
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex items-center justify-center max-md:hidden">
      <img :src="profile.url" alt="profile" class="border-rd-50% w-240px h-240px">
    </div>
    <div class="flex items-center mt-2 max-md:mb-2">
      <img :src="profile.url" alt="profile" class="border-rd-50% w-40px h-40px mr-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
      <div class="text-6.5 font-600">{{ profile.name }}</div>
    </div>
    <div class="text-4 text-slate-500">{{ profile.subname }}</div>

    <div class="w-full grid grid-cols-[1fr_1fr] grid-gap-2 mt-2 mb-2">
      <div class="pt-1 pb-1 font-600 text-3.5 flex items-center justify-center border-rd-1 border-solid border-1 border-slate-600 text-white/70 bg-#21262d">
        Follow
      </div>
      <div class="pt-1 pb-1 font-600 text-3.5 flex items-center justify-center border-rd-1 border-solid border-1 border-slate-600 text-white/70 bg-#21262d">
        <div class="i-carbon-favorite text-#db61a2 mr-1" />  Sponsor
      </div>
    </div>

    <div class="text-3.5 mt-2 mb-4">{{ profile.description }}</div>

    <div v-for="(item, idx) in profile.details" :key="idx">
      <div class="flex items-center">
        <Icon :icon="item.icon" class="text-slate-400 w-16px h-16px" />
        <div class="text-3.5 ml-1.5 mb-1">{{ item.text }}</div>
      </div>
    </div>

    <!-- <div class="text-4 font-600 mt-4">
      Achievements
    </div>
    <div>
      <img src="/cp.png" alt="profile" style="width: 64px">
    </div> -->
  </div>
</template>