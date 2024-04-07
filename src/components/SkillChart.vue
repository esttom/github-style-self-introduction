<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, ChartData, ChartOptions } from 'chart.js'
import { useGlobalData, useModal } from '../composables'

const { skillChart } = useGlobalData()
const { isOpen } = useModal()

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler)

const canvasRef = ref<HTMLCanvasElement | null>(null);
const chartRef = shallowRef<Chart | null>(null);

const data: ChartData<'radar'> = {
  labels: skillChart.value.labels,
  datasets: [{
    data: skillChart.value.data,
    borderWidth: 1,
    borderColor: 'rgba(64, 196, 99, .4)',
    backgroundColor: 'rgba(64, 196, 99, .4)',
    pointBorderColor: 'rgb(64, 196, 99)',
    pointBackgroundColor: 'white',
    pointBorderWidth: 2
  }]
}

const options: ChartOptions<'radar'> = {
  responsive: true,
  animation: false,
  scales: {
    r: {
      ticks: {
        display: false,
      },
      angleLines: {
        color: '#40c463',
        lineWidth: 2
      },
      pointLabels: {
        color: 'rgba(220, 220, 220, .64)',
        callback: (s: string, i: number) => [`${data.datasets[0].data[i]}%`, s]
      }
    }
  }
}

watch(isOpen, (open) => {
  if (!open) {
    data.labels = skillChart.value.labels
    data.datasets[0].data = skillChart.value.data
    chartRef.value?.update();
  }
})

onMounted(() => {
  chartRef.value = new Chart(canvasRef.value!, {
    type: 'radar',
    data,
    options,
  });
});

onBeforeUnmount(() => {
  if (chartRef.value) {
    chartRef.value.destroy();
    chartRef.value = null;
  }
});
</script>

<template>
  <div class="overflow-x-auto mt-2">
    <div class="text-4 mt-4 mb-2">
      Skill overview
    </div>
    <div class="flex flex-col border-1 border-solid border-slate-700 pt-1 pb-1 pl-4 pr-4">
      <div class="flex items-center justify-center">
        <div class="h-240px w-240px pl-12 pr-12 pt-1 pb-4">
          <canvas ref="canvasRef" />
        </div>
      </div>
    </div>
  </div>
</template>