<template>
    <div class="content-inner" ref="personSecondEchart"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

const personSecondEchart = ref<HTMLElement>();
const personSecondEchartPie = ref<echarts.ECharts>();
const initpersonSecondEcahrt = function () {
    personSecondEchartPie.value = echarts.init(personSecondEchart.value as HTMLElement);
    personSecondEchartPie.value.setOption({
        color: ['#00C8FF', '#00BD7E', '#1754F5', '#FFA254'],
        title: {
            text: '人员分布信息',
            left: 'center',
            textStyle: {
                fontSize: 16,
                color: "#fff"
            }
        },
        grid: {
            top: '12%',
            left: '3%',
            right: '3%',
            bottom: '12%',
            containLabel: true
        },
        legend: {
            bottom: "0%",
            textStyle: {
                color: echarts.color
            }
        },
        xAxis:
        {
            type: 'category',
            data: ['单机输送甲', '底盘检测甲', '单机输送乙', '底盘检测乙'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {     //x轴坐标轴
                show: false
            },
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
        series: [
            {
                name: '电工',
                type: 'bar',
                stack: 'Ad',
                data: [12, 12, 12, 12],
                label: {
                    show: true, formatter: "{c}", textStyle: {
                        color: "#fff"
                    }
                },
                barWidth: '40%'
            },
            {
                name: '动火',
                type: 'bar',
                stack: 'Ad',
                data: [12, 12, 12, 12],
                label: {
                    show: true, formatter: "{c}", textStyle: {
                        color: "#fff"
                    }
                },
                barWidth: '40%'
            },
            {
                name: '登高',
                type: 'bar',
                stack: 'Ad',
                data: [12, 12, 12, 12],
                label: {
                    show: true, formatter: "{c}", textStyle: {
                        color: "#fff"
                    }
                },
            },
            {
                name: '叉车',
                type: 'bar',
                stack: 'Ad',
                data: [12, 12, 12, 12],
                label: {
                    show: true, formatter: "{c}", textStyle: {
                        color: "#fff"
                    }
                },
            }
        ]
    })
}

onMounted(() => {
    initpersonSecondEcahrt();
})
</script>

<style lang="scss" scoped>
.content-inner {
    width: 100%;
    height: 100%;
}
</style>