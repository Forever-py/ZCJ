<template>
    <div class="content" ref="tableWapperRef">
        <border-vue class="border-container" v-for="(item, index) in title" :key="index" :title="item">
            <template #operation>
                <template v-if="index == 0">
                    <div class="operation">
                        <span class="s-title"><i class="icon"></i>设备停站问题</span>
                        <a-input v-model:value="eSValue" style="width:140px" placeholder="请输入关键字">
                        </a-input>
                        <span class="btn" @click="onESSearch">搜索</span>
                        <span class="btn">停站问题录入</span>
                        <span class="btn">停站问题导出</span>
                    </div>
                </template>
                <template v-if="index == 1">
                    <div class="operation">
                        <span class="s-title"><i class="icon"></i>问题闭环管理</span>
                        <a-input v-model:value="eSValue" style="width:140px" placeholder="请输入关键字">
                        </a-input>
                        <span class="btn" @click="onESSearch">搜索</span>
                        <span class="btn">进度更新</span>
                        <span class="btn">未闭环问题导出</span>
                    </div>
                </template>
                <template v-if="index == 2">
                    <div class="Mobility">
                        <span class="btn active">月可动率</span>
                        <span class="btn">日可动率</span>
                    </div>
                </template>
                <template v-if="index == 3">
                    <a-form class="operation-form" layout="inline" :model="formState" @finish="handleFinish">
                        <a-form-item v-for="(formItem, i) in formList" :key="i">
                            <a-input v-model:value="formState[formItem]" style="width:140px"
                                :placeholder="formState[`${formItem}Placeholder`]">
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <span class="btn" html-type="submit">搜索</span>
                        </a-form-item>
                    </a-form>
                </template>
            </template>
            <template #content>
                <template v-if="index == 0">
                    <a-table :columns="columns" :data-source="data" :rowKey="(record: DataType) => record.key"
                        :pagination="false" :scroll="{ x: false, y: getHeight }">
                        <!-- <template #bodyCell="{ column, text }">
                            <template v-if="column.dataIndex === 'name'">
                                <a>{{ text }}</a>
                            </template>
                        </template> -->
                    </a-table>
                </template>
                <!-- <template v-if="index == 1">
                        <div class="second-part">
                            <div class="content-inner">
                                <SecondPie />
                            </div>
                            <div class="table">
                                <a-table :columns="columns2" :data-source="data2"
                                    :rowKey="(record: DataType) => record.key" :pagination="false"
                                    :scroll="{ x: false, y: getHeight }">
                                    <template #bodyCell="{ column, text }">
                                        <template v-if="column.dataIndex === 'name'">
                                            <a>{{ text }}</a>
                                        </template>
                                    </template>
                                </a-table>
                            </div>
                        </div>
                    </template>
                    <template v-if="index == 2">
                        <div class="third-part">
                            <third-line />
                        </div>
                    </template> -->
                <template v-if="index == 1">
                    <div class="third-part">
                        <fourth-category />
                    </div>
                </template>
            </template>
        </border-vue>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, onMounted } from 'vue'
import type { UnwrapRef } from 'vue';
import type { FormProps } from 'ant-design-vue';
import BorderVue from './Border.vue';
import SecondPie from './SecondPie.vue';
import ThirdLine from './ThirdLine.vue';
import FourthCategory from './FourthCategory.vue';

const title = ref<string[]>(['设备停台问题展示', '设备停台问题分析'])
// const title = ref<string[]>(['设备停台问题展示', '问题闭环跟踪管理', '设备可动率', '设备停台问题分析'])
// 设备停站搜索
const eSValue = ref<string>("");
const onESSearch = () => {
    console.log("===>", eSValue.value);
}

// 设备停站表格部分
const columns = [
    {
        title: '序号',
        dataIndex: 'SerialNumber',
        key: 'SerialNumber',
        width: 80,
        align: 'center'
    },
    {
        title: '停台设备',
        dataIndex: 'ShutdownEquipment',
        key: 'ShutdownEquipment',
        width: 120
    },
    {
        title: '问题描述',
        dataIndex: 'description',
        key: 'description',
        ellipsis: true
    },
    {
        title: '开始时间',
        dataIndex: 'StartTiSme',
        key: 'StartTiSme',
        width: 125
    },
    {
        title: '停台时间',
        dataIndex: 'ShutdownTime',
        key: 'ShutdownTime',
        width: 125
    },
    {
        title: '原因分析',
        dataIndex: 'CauseAnalysis',
        key: 'CauseAnalysis',
        ellipsis: true
    },
    {
        title: '处理人',
        dataIndex: 'HandledBy',
        key: 'HandledBy',
        width: 80
    }
];
type DataType = {
    key: number,
    SerialNumber: string;
    ShutdownEquipment: string;
    description: string;
    StartTiSme: string;
    ShutdownTime: string;
    CauseAnalysis: string;
    HandledBy: string;
}
const data = ref<DataType[]>([
    {
        key: 1,
        SerialNumber: '2',
        ShutdownEquipment: '第一台设备',
        description: '第一台设备出现了故障啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        StartTiSme: '2022-05-13',
        ShutdownTime: '2022-05-13',
        CauseAnalysis: '可能是因为断电导致的',
        HandledBy: '陈项目'
    }
]);

// 设备停站表格部分
const columns2 = [
    {
        title: '序号',
        dataIndex: 'SerialNumber',
        key: 'SerialNumber',
        width: 80,
        align: 'center'
    },
    {
        title: '类型',
        dataIndex: 'mold',
        key: 'mold',
        ellipsis: true
    },
    {
        title: '问题描述',
        dataIndex: 'description',
        key: 'description',
        ellipsis: true
    },
    {
        title: '开始时间',
        dataIndex: 'BeginTiSme',
        key: 'BeginTiSme',
        width: 125
    },
    {
        title: '处理人',
        dataIndex: 'HandledBy',
        key: 'HandledBy',
        width: 80
    }
];
type DataType2 = {
    key: number,
    SerialNumber: string;
    mold: string;
    description: string;
    BeginTiSme: string;
    HandledBy: string;
}
const data2 = ref<DataType2[]>([
    {
        key: 1,
        SerialNumber: '2',
        mold: '第一台设备',
        description: '第一台设备出现了故障啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        BeginTiSme: '2022-05-13',
        HandledBy: '陈项目'
    },
    {
        key: 2,
        SerialNumber: '2',
        mold: '第一台设备',
        description: '第一台设备出现了故障啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        BeginTiSme: '2022-05-13',
        HandledBy: '陈项目'
    },
    {
        key: 3,
        SerialNumber: '2',
        mold: '第一台设备',
        description: '第一台设备出现了故障啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        BeginTiSme: '2022-05-13',
        HandledBy: '陈项目'
    },
    {
        key: 4,
        SerialNumber: '2',
        mold: '第一台设备',
        description: '第一台设备出现了故障啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        BeginTiSme: '2022-05-13',
        HandledBy: '陈项目'
    }
]);


// 表格 表体部分可视区域大小
const tableWapperRef = ref<HTMLElement>();
const getHeight = computed(() => {
    const height = ref<number>(Math.ceil((tableWapperRef.value?.clientHeight as number) / 2) - 18 - 35 - 80 - 90);
    console.log(height.value)
    return `${height.value}px`;
})
const getEchartHeight = computed(() => {
    const height = ref<number>(Math.ceil((tableWapperRef.value?.clientHeight as number) / 2) - 18 - 35 - 80 - 50);
    console.log(height.value)
    return `${height.value}px`;
})

interface FormState {
    equipmentName: string;
    equipmentNamePlaceholder: string;
    partName: string;
    partNamePlaceholder: string;
    handledBy: string;
    handledByPlaceholder: string;
    time: string;
    timePlaceholder: string;
}
const formList = reactive<string[]>(['equipmentName', 'partName', 'handledBy', 'time']);
const formState: UnwrapRef<FormState> = reactive({
    equipmentName: '',
    equipmentNamePlaceholder: '请输入设备名称',
    partName: '',
    partNamePlaceholder: '请输入部件名称',
    handledBy: '',
    handledByPlaceholder: '请输入处理人',
    time: '',
    timePlaceholder: '请输入时间'
});
const handleFinish: FormProps['onFinish'] = values => {
    console.log(values, formState);
};


onMounted(() => {
})
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
$color1: #55C1FF;

.content {
    width: 100%;
    height: 100%;

    .border-container {
        width: calc(50% - 18px);
        height: calc(100% - 18px);
        // width: calc(100% - 18px);
        // height: calc(50% - 18px);
        margin: 9px;
        display: inline-block;

        .operation,
        .Mobility,
        .operation-form {
            display: flex;
            justify-content: space-around;
            margin: 15px 0;

            .s-title {
                @include my-style-font($color: $color1, $fontWeight: 500);

                .icon {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                    @include my-background-image("../assets/border/icon.png");
                }

            }

            .btn {
                display: inline-block;
                padding: 4px 12px;
                border: 1px solid $color1;
                border-radius: 2px;
                @include my-style-font(14px, #24DCF0, 400, SourceHanSansCN-Regular);
                cursor: pointer;
            }


        }

        .pie-chart {
            width: 200px;
            height: 100%;
        }

        .Mobility {
            justify-content: flex-start;

            .btn:first-of-type {
                border-right: none;
                border-radius: 2px 0 0 2px;
            }

            .btn:last-of-type {
                border-left: none;
                border-radius: 0 2px 2px 0;
            }

            .btn.active {
                background: $color1;
                color: #fff;
            }
        }

        .operation-form {
            justify-content: space-between;
        }

        :deep(.ant-form-inline .ant-form-item) {
            margin-right: 0;
        }

        .second-part {
            width: 100%;
            height: 100%;
            padding-bottom: 10px;
            display: flex;
            justify-content: space-around;

            .content-inner {
                width: 250px;
            }

            .table {
                width: calc(100% - 260px);
            }
        }

        .third-part {
            width: 100%;
            height: 100%;
        }
    }
}

:deep(.ant-input) {
    background-color: transparent;
    border: 1px solid #55C1FF;
    color: #fff;
}

:deep(.ant-table) {
    background-color: transparent;

    .ant-table-header {
        background: transparent;

        //  background: rgba(57, 123, 255, 0.2);
        .ant-table-thead>tr>th {
            border-color: rgba(57, 123, 255, 0.2);
            // background: transparent;
            background: rgba(57, 123, 255, 0.2);
        }
    }

    .ant-table-thead>tr>th,
    .ant-table-tbody>tr>td {
        padding: 13px 16px;
        @include my-style-font(16px, #fff, 400, SourceHanSansCN-Regular);

    }

    .ant-table-tbody>tr>td {
        border-bottom: 1px solid #55C1FF;
    }
}

:deep(.ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body),
:deep(.ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td),
:deep(.ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td),
:deep(.ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td),
:deep(.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td),
:deep(.ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar) {
    background-color: transparent;
}
</style>