<template>
    <div class="content-inner" ref="personFirstEchart"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

const personFirstEchart = ref<HTMLElement>();
const personFirstEchartPie = ref<echarts.ECharts>();
const initpersonFirstEcahrt = function () {
    personFirstEchartPie.value = echarts.init(personFirstEchart.value as HTMLElement);
    personFirstEchartPie.value.setOption({
        color: ['#00C8FF', '#FFA254'],
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
        }
        ,
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: { show: false },
        },
       
        series: [
            {
                name: '现有人数',
                type: 'bar',
                stack: 'Ad',
                data: [20, 20, 3, 3],
                label: {
                    show: true, formatter: "{c}", textStyle: {
                        color: "#fff"
                    }
                },
                barWidth: '40%'
            },
            {
                name: '缺编人数',
                type: 'bar',
                stack: 'Ad',
                data: [4, 4, 1, 1],
                label: {
                    show: true, formatter: "{c}", textStyle: {
                        color: "#fff"
                    }
                },
                barWidth: '40%'
            }
        ]
    })
}

onMounted(() => {
    initpersonFirstEcahrt();
})
</script>

<style lang="scss" scoped>
.content-inner {
    width: 100%;
    height: 100%;
}
</style>