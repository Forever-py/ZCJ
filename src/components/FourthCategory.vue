<template>
  <div class="content-inner" ref="FourthEchart"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

const FourthEchart = ref<HTMLElement>();
const FourthEchartPie = ref<echarts.ECharts>();
const initThreeEcahrt = function () {
  FourthEchartPie.value = echarts.init(FourthEchart.value as HTMLElement);
  FourthEchartPie.value.setOption({
    color: ['rgba(85, 193, 255, 1)'],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        inside: true
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        inside: true
      }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  })
}

onMounted(() => {
  initThreeEcahrt();
})
</script>

<style lang="scss" scoped>
.content-inner {
  width: 100%;
  height: 100%;
}
</style>