import { inject, provide, ref, type InjectionKey, type Ref, watch } from "vue";
import { useModal } from ".";
import { utoa, atou  } from "../functions/util";
import defaultData from '../functions/data'
import type { Profile, SkillChart, SkillItem, Activity } from '../functions/data'

type GlobalData = {
  profile: Ref<Profile>;
  skillChart: Ref<SkillChart>;
  skillList: Ref<SkillItem[]>
  activities: Ref<Activity[]>;
}

const globalDataSymbol: InjectionKey<GlobalData> = Symbol('global data')

export function provideGlobalData() {
  const serializedData = location.hash.slice(1)
  const restoreData = serializedData ? JSON.parse(atou(serializedData)) : undefined

  const profile = ref<Profile>(restoreData?.profile ?? defaultData.profile)
  const activities = ref<Activity[]>(restoreData?.activities ?? defaultData.activities)
  const skillList = ref<SkillItem[]>(restoreData?.skillList ?? defaultData.skillList)
  const skillChart = ref<SkillChart>(restoreData?.skillChart ?? defaultData.skillChart)

  provide(globalDataSymbol, {
    profile,
    activities,
    skillList,
    skillChart,
  })
}

export function useGlobalData() {
  const globalData = inject(globalDataSymbol)
  if (!globalData) {
    throw new Error('anything setup error (global data)')
  }
  return globalData
}

export function useSaveGlobalData() {
  const { isOpen } = useModal()
  const { profile, skillChart, skillList, activities } = useGlobalData()

  watch(isOpen,  (open) => {
    if (!open) {
      const url = `#${utoa(JSON.stringify({
        profile: profile.value,
        skillChart: skillChart.value,
        skillList: skillList.value,
        activities: activities.value
      }))}` 
      history.replaceState({}, '', url)
    }
  })
}