<template>
    <div class="content-inner" ref="secondEchart"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

const secondEchart = ref<HTMLElement>();
const secondEchartPie = ref<echarts.ECharts>();
const initSecondEcahrt = function () {
    secondEchartPie.value = echarts.init(secondEchart.value as HTMLElement);
    secondEchartPie.value.setOption({
        title: {
            text: '未闭环问题分布',
            left: 'center',
            textStyle: {
                fontSize: 16,
                color: "#fff"
            }
        },
        color: ['#00BD7E', '#FFA254', '#1754F5'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        legend: {
            data: ['原因待分析', '措施待执行', '报告待上传'],
            bottom: "0%",
            textStyle: {
                color: "#00D9D5"
            }
        },
        series: {
            type: 'pie',
            radius: ['30%', '45%'],
            label: {
                normal: {
                    show:false
                }
            },
            data: [
                { value: 335, name: '措施待执行' },
                { value: 310, name: '报告待上传' },
                { value: 1048, name: '原因待分析' }
            ]
        }
    })
}

onMounted(() => {
    initSecondEcahrt();
})
</script>

<style lang="scss" scoped>
.content-inner {
    width: 100%;
    height: 100%;
}
</style>