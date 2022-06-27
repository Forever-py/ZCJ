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
      data: ['底盘', '滑板线', '重载吊具', '淋雨线', '加注', 'CP7板式带', '风挡', '拧紧', '车门输送', '车身库'],
      axisTick: {
        inside: true,
        alignWithLabel: true
      },
      axisLabel: { interval: 0 },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#55C1FF',
          width: 1
        }
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLabel: {
        formatter: '{value}%',
      },
      axisTick: {
        inside: true,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#55C1FF',
          type: [5, 10],
          dashOffset: 5,
          width: 0.5
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#55C1FF',
        },
      }
    },
    series: {
      data: [20, 20, 50, 80, 70, 10, 30, 10, 30, 15],
      type: 'bar',
      barWidth: '30%',
      label: {
        show: true,
        position: 'top',
        formatter: '{per|{c}%}',
        rich: {
          per: {
            color: '#fff'
          }
        }
      },
    }
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