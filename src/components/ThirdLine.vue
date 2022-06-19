<template>
    <div class="content-inner" ref="ThirdEchart"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

const ThirdEchart = ref<HTMLElement>();
const ThirdEchartPie = ref<echarts.ECharts>();
const initThreeEcahrt = function () {
    ThirdEchartPie.value = echarts.init(ThirdEchart.value as HTMLElement);
    ThirdEchartPie.value.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '4%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    inside: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: {
            type: 'line',
            smooth: true,
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            lineStyle: {
                width: 0
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(3, 252, 255, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(3, 252, 255, 0.1)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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