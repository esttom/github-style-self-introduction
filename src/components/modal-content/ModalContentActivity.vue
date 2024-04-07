<script setup lang="ts">
import { useGlobalData } from '../../composables'

const { activities } = useGlobalData()

function addActivity() {
  activities.value.push({ date: '', items: [{ icon: '', title: '', subtitle: '' }] })
}

function addActivityItem(idx: number) {
  activities.value[idx].items.push({ icon: '', title: '', subtitle: '' })
}

function removeActivity(idx: number) {
  activities.value.splice(idx, 1)
}

function removeActivityItem(idx: number, idx2: number) {
  activities.value[idx].items.splice(idx2, 1)
}
</script>


<template>
  <div class="flex justify-between mr-2 mt-2 mb-2 font-600">
    <div class="text-3.5">Activitity</div>
    <button class="flex pt-0.5 pb-0.5 pl-2 pr-2 justify-center items-center" @click="addActivity"><div class="i-carbon-add text-4" /><span class="text-3">add</span></button>
  </div>

  <div class="flex overflow-x-auto">
    <div v-for="(activity, idx) in activities" :key="idx" class="pos-relative w-40% mr-2 border-rd-2 border-1 border-solid border-slate-500 pa-1.5 mb-2">
      <div class="pos-absolute pos-right-1 pos-top-1 i-carbon-close-filled text-4 cursor-pointer" @click="removeActivity(idx)" />
      <div class="flex flex-col">
        <span class="text-3 mr-2">icon</span>
        <input v-model="activity.date" type="text" class="text-3" />

        <div class="flex overflow-x-auto mt-2">
          <div v-for="(item, idx2) in activity.items" :key="idx" class="pos-relative w-40% mr-2 border-rd-2 border-1 border-solid border-slate-500 pa-1.5 mb-2">
            <div class="pos-absolute pos-right-1 pos-top-1 i-carbon-close-filled text-4 cursor-pointer" @click="removeActivityItem(idx, idx2)" />
            <div class="flex flex-col">
              <span class="text-3 mr-2">icon</span>
              <input v-model="item.icon" type="text" class="text-3" />
              <span class="text-3 mr-2">title</span>
              <input v-model="item.title" type="text" class="text-3" />
              <span class="text-3 mr-2">subtitle</span>
              <input v-model="item.subtitle" type="text" class="text-3" />
            </div>
          </div>
        </div>

        <button class="flex pt-0.5 pb-0.5 pl-2 pr-2 mt-2 justify-center items-center" @click="addActivityItem(idx)"><div class="i-carbon-add text-4" /><span class="text-3">add</span></button>
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