<template>
    <border-vue class="content-part" ref="tableWapperRef" :title="title">
        <template #operation>
            <div class="operation">
                <span class="s-title"><i class="icon"></i>人员能力信息</span>
                <a-input v-model:value="searchValue" style="width:140px" placeholder="请输入关键字">
                </a-input>
                <span class="btn" @click="handleFinish">搜索</span>
                <span class="btn">在线预览</span>
                <span class="btn">人员信息录入</span>
                <span class="btn">人员信息更新</span>
                <span class="btn">人员信息导出</span>
            </div>
        </template>
        <template #content>
            <div class="content">
                <a-table class="left" :columns="columnsR" :data-source="dataR" :rowKey="(record: DataR) => record.key"
                    :pagination="false" :scroll="{ x: true, y: `${getHeight}px` }">
                </a-table>
                <div class="right">
                    <div class="Mobility">
                        <span class="btn active">月可动率</span>
                        <span class="btn">日可动率</span>
                    </div>
                    <p class="right-p">总装车间维修人员目前总计100人，缺编10人。电工资质10人，动火作业资质10人，登高作业资质10人，叉车作业20人</p>
                    <div class="echart-container">
                        <PersonEchartFirst class="echart" />
                        <PersonEchartSecond class="echart" />
                    </div>
                </div>
            </div>
        </template>
    </border-vue>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import BorderVue from "./Border.vue";
import PersonEchartFirst from './PersonEchartFirst.vue';
import PersonEchartSecond from './PersonEchartSecond.vue'

const title = ref<string>('人员能力信息管理');
const searchValue = ref<string>('')
const handleFinish = () => {
    console.log(searchValue);
};

const columnsR = [
    {
        title: '序号',
        dataIndex: 'SerialNumber',
        key: 'SerialNumber',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 120,
        ellipsis: true
    },
    {
        title: '工号',
        dataIndex: 'JobNum',
        key: 'JobNum',
        width: 120,
        ellipsis: true
    },
    {
        title: '班组',
        dataIndex: 'ClassGroup',
        key: 'ClassGroup',
        width: 120,
        ellipsis: true
    },
    {
        title: '班次',
        dataIndex: 'ClassTime',
        key: 'ClassTime',
        width: 100,
        ellipsis: true
    },
    {
        title: '主负责设备',
        dataIndex: 'MainEquiment',
        key: 'MainEquiment',
        width: 160,
        ellipsis: true
    },
    {
        title: '监管设备',
        dataIndex: 'RegulatoryEquipment',
        key: 'RegulatoryEquipment',
        width: 160,
        ellipsis: true
    },
    {
        title: '特种作业',
        dataIndex: 'SpecialOperation',
        key: 'SpecialOperation',
        width: 160,
        ellipsis: true
    },
    {
        title: '擅长',
        dataIndex: 'adept',
        key: 'adept',
        width: 160,
        ellipsis: true
    },

    {
        title: '模块工作',
        dataIndex: 'MoudleWork',
        key: 'MoudleWork',
        width: 160,
        ellipsis: true
    },
    {
        title: '综评',
        dataIndex: 'AttendanceStatus',
        key: 'scAttendanceStatusore',
        width: 80
    }
];
interface DataR {
    key: number;
    SerialNumber: string;
    EquimentName: string;
    ProficientNum: number;
    SpecialOperation: number;
    adept: number;
    KnowNum: number;
    AttendanceStatus: string;
}
const dataR = ref([{
    key: 1,
    SerialNumber: '1',
    name: '张三',
    JobNum: '123456',
    ClassGroup: '第一组',
    ClassTime: '早班',
    MainEquiment: '第一台挖掘机',
    RegulatoryEquipment: '第二台挖掘机',
    SpecialOperation: '高空作业',
    adept: '高空作业',
    MoudleWork: '第一模块',
    AttendanceStatus: '已出勤'
}])

// 表格 表体部分可视区域大小
const tableWapperRef = ref<HTMLElement>();
const getHeight = computed(() => {
    const height = ref<number>(Math.ceil(tableWapperRef.value?.clientHeight as number) - 40 - 80 - 90);
    return height.value;
})
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
$color1: #55C1FF;

.content-part {
    width: 100%;
    height: 100%;

    .operation {
        display: flex;
        justify-content: space-between;
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

        &.bottom {
            :deep(.ant-form-inline .ant-form-item:first-of-type) {
                margin-right: 50px;
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

    .content {
        width: 100%;
        height: 100%;
        display: flex;

        .left,
        .right {
            width: 50%;
            height: 100%;
        }

        .right {
            display: flex;
            flex-direction: column;

            .Mobility {
                display: flex;
                justify-content: flex-start;
                margin: 0 0 15px 0;

                .btn {
                    display: inline-block;
                    padding: 4px 12px;
                    border: 1px solid $color1;
                    border-radius: 2px;
                    @include my-style-font(14px, #24DCF0, 400, SourceHanSansCN-Regular);
                    cursor: pointer;
                }

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

            .right-p {
                text-align: left;
                @include my-style-font(16px, #FFFFFF, 400, SourceHanSansCN-Regular);
                margin-bottom: 0;
            }

            .echart-container {
                width: 100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;

                .echart {
                    width: 50%;
                    height: calc(50% - 6px);
                    margin: 3px 0;
                }
            }
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

        .ant-table-thead>tr>th {
            border-color: rgba(57, 123, 255, 0.2);
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