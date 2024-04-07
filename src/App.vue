<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from './components/PageHeader.vue';
import MyProfile from './components/MyProfile.vue';
import TabHeader from './components/TabHeader.vue';
import SkillList from './components/SkillList.vue';
import SkillChart from './components/SkillChart.vue';
import ContributionGraph from './components/ContributionGraph.vue';
import TimeLine from './components/TimeLine.vue';
import SettingModal from './components/SettingModal.vue';

import { provideGlobalData, provideModal } from './composables'

provideGlobalData()
provideModal()

const footerVisible = ref(true)
</script>

<template>
  <SettingModal />
  
  <div class="flex">
    <PageHeader />
  </div>
  <div class="max-w-1140px m-[0_auto] max-md:pa-4 pl-36 pr-36 pt-8 pb-8 grid place-items-start max-lg:grid-cols-1 grid-gap-8 grid-cols-[300px_minmax(0,_1fr)]">
    <MyProfile />
    <div class="w-full flex flex-col">
      <TabHeader />
      <div class="w-full grid lg:xl:2xl:grid-cols-[1fr_1fr] max-md:grid-cols-1fr grid-gap-2">
        <SkillList />
        <SkillChart />
      </div>
      <ContributionGraph />
      <TimeLine />
    </div>
  </div>
  <div v-if="footerVisible" class="footer fixed bottom-0 left-0 w-full text-center pa-2 bg-gray-7">
    <p class="text-3.5 ma-1">このサイトはGitHubのパロディ風自己紹介サイトです。入力した情報をサーバに送信するなどの行為は行っておりません。</p>
    <p class="text-3.5 ma-1">利用方法: 右上のメニューから入力情報を設定してください。入力した情報はURLに付与され、共有することができます。</p>
    <p class="text-3.5 ma-1">This site is a parody-style self-introduction site of GitHub.We do not send the information you input to the server.</p>
    <p class="text-3.5 ma-1">How to use: Please set up your input information from the menu in the upper right corner.The information entered will be assigned to the URL and can be shared.</p>
    <div class="text-4 text-blue ma-2 cursor-pointer" @click="footerVisible = false">
      close
    </div>
  </div>
</template>
