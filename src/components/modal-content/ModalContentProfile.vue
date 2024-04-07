<script setup lang="ts">
import { useGlobalData } from '../../composables'

const { profile } = useGlobalData()

function addDetail() {
  profile.value.details.push({ text: '', icon: '' })
}

function removeDetail(idx: number) {
  profile.value.details.splice(idx, 1)
}
</script>


<template>
  <div class="text-3.5 mr-2 mt-2 mb-2 font-600">User Info</div>
  <div class="flex flex-col">
    <span class="text-3 mr-2">image</span>
    <input v-model="profile.url" type="text" class="text-3" />
  </div>
  <div class="flex flex-col mt-1">
    <span class="text-3 mr-2">name</span>
    <input v-model="profile.name" type="text" class="text-3" />
  </div>
  <div class="flex flex-col mt-1">
    <span class="text-3 mr-2">subname</span>
    <input v-model="profile.subname" type="text" class="text-3" />
  </div>
  <div class="flex flex-col mb-2 mt-1">
    <span class="text-3 mr-2">description</span>
    <input v-model="profile.description" type="text" class="text-3" />
  </div>

  <div class="flex justify-between mr-2 mt-6 mb-2 font-600">
    <div class="text-3.5">Details</div>
    <button class="flex pt-0.5 pb-0.5 pl-2 pr-2 justify-center items-center" @click="addDetail"><div class="i-carbon-add text-4" /><span class="text-3">add</span></button>
  </div>

  <div class="flex overflow-x-auto">
    <div v-for="(detail, idx) in profile.details" :key="idx" class="pos-relative w-40% mr-2 border-rd-2 border-1 border-solid border-slate-500 pa-1.5 mb-2">
      <div class="pos-absolute pos-right-1 pos-top-1 i-carbon-close-filled text-4 cursor-pointer" @click="removeDetail(idx)" />
      <div class="flex flex-col">
        <span class="text-3 mr-2">icon</span>
        <input v-model="detail.icon" type="text" class="text-3" />
        <span class="text-3 mr-2">text</span>
        <input v-model="detail.text" type="text" class="text-3" />
      </div>
    </div>
  </div>

  <div class="text-3 mt-2">
    Available Icon
  </div>
  
  <div>
    <a class="text-3 cursor-pointer">
      https://icon-sets.iconify.design/
    </a>
  </div>
</template>