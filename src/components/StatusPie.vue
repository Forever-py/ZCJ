<template>
    <div class="content-inner" ref="statusEchart"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

const props = defineProps(['data']);
const statusEchart = ref<HTMLElement>();
const statusEchartPie = ref<echarts.ECharts>();
const initstatusEcahrt = function () {
    statusEchartPie.value = echarts.init(statusEchart.value as HTMLElement);
    statusEchartPie.value.setOption({
        color: ['#FFA254', '#1754F5'],
        tooltip: {
            trigger: 'item',
            // formatter: '{b}: {c} ({d}%)'
            formatter: '{b}：{d}%'
        },
        legend: {
            data: ['已闭环', '未闭环'],
            bottom: "0%",
            textStyle: {
                color: "#00D9D5"
            }
        },
        label: {
            formatter: '{per|{d}%}',
            rich: {
                per: {
                    color: '#fff',
                    padding: [0, -30 ,10,-30]
                }
            }
        },
        series: {
            type: 'pie',
            radius: ['40%', '55%'],
            data: props?.data
        }
    })
}

onMounted(() => {
    initstatusEcahrt();
})
</script>

<style lang="scss" scoped>
.content-inner {
    width: 100%;
    height: 100%;
}
</style>
