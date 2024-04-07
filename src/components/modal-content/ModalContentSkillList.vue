<script setup lang="ts">
import { useGlobalData } from '../../composables'

const { skillList } = useGlobalData()

function addSkill() {
  skillList.value.push({ name: '', icon: '', star: 0, year: 0 })
}

function removeSkill(idx: number) {
  skillList.value.splice(idx, 1)
}
</script>


<template>
  <div class="flex justify-between mr-2 mt-2 mb-2 font-600">
    <div class="text-3.5">Skills</div>
    <button class="flex pt-0.5 pb-0.5 pl-2 pr-2 justify-center items-center" @click="addSkill"><div class="i-carbon-add text-4" /><span class="text-3">add</span></button>
  </div>

  <div class="flex overflow-x-auto">
    <div v-for="(skill, idx) in skillList" :key="idx" class="pos-relative w-40% mr-2 border-rd-2 border-1 border-solid border-slate-500 pa-1.5 mb-2">
      <div class="pos-absolute pos-right-1 pos-top-1 i-carbon-close-filled text-4 cursor-pointer" @click="removeSkill(idx)" />
      <div class="flex flex-col">
        <span class="text-3 mr-2">name</span>
        <input v-model="skill.name" type="text" class="text-3" />
        <span class="text-3 mr-2">icon</span>
        <input v-model="skill.icon" type="text" class="text-3" />
        <span class="text-3 mr-2">star</span>
        <input v-model="skill.star" type="number" class="text-3" min="0" max="5" />
        <span class="text-3 mr-2">year</span>
        <input v-model="skill.year" type="number" class="text-3" min="0" max="200" />
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