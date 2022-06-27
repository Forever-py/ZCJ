<template>
    <div class="content-inner" ref="ManMachineEchart"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

const ManMachineEchart = ref<HTMLElement>();
const ManMachineEchartPie = ref<echarts.ECharts>();
const initManMachineEcahrt = function () {
    ManMachineEchartPie.value = echarts.init(ManMachineEchart.value as HTMLElement);
    ManMachineEchartPie.value.setOption({
        color: ['#00BD7E', '#FFA254', '#1754F5'],
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{b}: {c} ({d}%)'
        // },
        series: {
            type: 'pie',
            radius: ['60%', '75%'],
            label: {
                normal: {
                    show:false
                }
            },
            data: [35, 22,15]
        }
    })
}

onMounted(() => {
    initManMachineEcahrt();
})
</script>

<style lang="scss" scoped>
.content-inner {
    width: 100%;
    height: 100%;
}
</style>