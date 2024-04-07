<script setup lang="ts">
import { ref } from 'vue';
import { useModal, useSaveGlobalData } from '../composables'
import ModalContentProfile from './modal-content/ModalContentProfile.vue';
import ModalContentSkillList from './modal-content/ModalContentSkillList.vue';
import ModalContentSkillChart from './modal-content/ModalContentSkillChart.vue';
import ModalContentActivity from './modal-content/ModalContentActivity.vue';

const settings = ['Profile', 'Skills', 'Chart', 'Activities']

const active = ref('Profile')

const { isOpen, close } = useModal()
useSaveGlobalData()
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="h-screen w-screen fixed z-999 bg-black/70 flex flex-col items-center justify-center">
      <div class="flex flex-col items-top justify-start w-90% max-w-800px h-full pa-4">
        <div class="flex overflow-x-auto mb-2">
          <div v-for="setting in settings" :key="setting" :class="['flex', 'ml-1', 'mr-1', 'pa-2', { 'border-0 border-b-2 border-solid border-#888efb': setting === active }]">
            <div class="text-3.5 ml-1 cursor-pointer" @click="active = setting">{{ setting }}</div>
          </div>
        </div>
        <div class="h-80% overflow-y-auto">
          <div v-if="active === 'Profile'">
            <ModalContentProfile />
          </div>
          <div v-else-if="active === 'Skills'">
            <ModalContentSkillList />
          </div>
          <div v-else-if="active === 'Chart'">
            <ModalContentSkillChart />
          </div>
          <div v-else>
            <ModalContentActivity />
          </div>
        </div>

        <button class="mt-2" @click="close">Close & Save input data to a URL</button>
      </div>
    </div>
  </Teleport>
</template>
