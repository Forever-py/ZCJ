<template>
    <div class="container" ref="tableWapperRef">
        <border-vue class="content-part" :title="title">
            <template #operation>
                <div class="operation">
                    <span class="s-title"><i class="icon"></i>设备停站问题</span>
                    <a-form class="operation-form" layout="inline" :model="formState" @finish="handleFinish">
                        <a-form-item>
                            <a-input v-model:value="formState.searchValue" style="width:140px" placeholder="请输入关键字">
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <span class="btn" html-type="submit">搜索</span>
                        </a-form-item>
                    </a-form>
                    <span class="btn">停站问题录入</span>
                    <span class="btn">停站问题导出</span>
                </div>
            </template>
            <template #content>
                    <a-table :columns="columns" :data-source="data" :rowKey="(record: DataType) => record.key"
                        :pagination="false" :scroll="{ x: false, y: getHeight }">
                        <template #bodyCell="{ column, text }">
                            <template v-if="column.dataIndex === 'name'">
                                <a>{{ text }}</a>
                            </template>
                        </template>
                    </a-table>
                </template>
        </border-vue>
        <border-vue class="content-part" :title="title">
            <template #operation>
                <div class="operation bottom">
                    <span class="s-title"><i class="icon"></i>设备多技能率</span>
                    <a-form class="operation-form" layout="inline" :model="formState" @finish="handleFinish">
                        <a-form-item>
                            <a-input v-model:value="formState.searchValue" style="width:200px" placeholder="请输入关键字">
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <span class="btn" html-type="submit">搜索</span>
                        </a-form-item>
                    </a-form>
                    <span class="btn">多技能导出</span>
                </div>
            </template>
        </border-vue>
    </div>
</template>

<script lang="ts" setup>
import { ref,computed } from "vue";
import type { FormProps } from 'ant-design-vue';
import BorderVue from "./Border.vue";

const title = ref<string>('人机匹配度管理');
const formState = ref<{
    searchValue: string;
}>({
    searchValue: ''
})
const handleFinish: FormProps['onFinish'] = values => {
    console.log(values, formState);
};

const columns = [
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
        width: 100
    },
    {
        title: '工号',
        dataIndex: 'jobNumber',
        key: 'jobNumber',
        width: 100
        // ellipsis: true
    },
    {
        title: '设备A',
        dataIndex: 'equipmentA',
        key: 'equipmentA',
        width: 125
    },
    {
        title: '设备B',
        dataIndex: 'equipmentB',
        key: 'equipmentB',
        width: 125
    },
    {
        title: '设备C',
        dataIndex: 'equipmentC',
        key: 'equipmentC',
        width: 125
    },
    {
        title: '评分',
        dataIndex: 'score',
        key: 'score',
        width: 80
    }
];
type DataType = {
    key: number,
    SerialNumber: string;
    name: string;
    jobNumber: string;
    equipmentA: string;
    equipmentB: string;
    equipmentC: string;
    score: string;
}
const data = ref<DataType[]>([
    {
        key: 1,
        SerialNumber: '1',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 2,
        SerialNumber: '2',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 3,
        SerialNumber: '3',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    },
    {
        key: 4,
        SerialNumber: '4',
        name: '姓名',
        jobNumber: '111',
        equipmentA: '10',
        equipmentB: '10',
        equipmentC: '10',
        score: '80'
    }
]);
// 表格 表体部分可视区域大小
const tableWapperRef = ref<HTMLElement>();
const getHeight = computed(() => {
    const height = ref<number>(Math.ceil(tableWapperRef.value?.clientHeight as number) - 40 - 80 - 90);
    return `${height.value}px`;
})
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
$color1: #55C1FF;

.container {
    width: 100%;
    height: 100%;
    display: flex;

    .content-part {
        height: 100%;
        flex: 1;
        margin: 0 5px;

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

            // .operation-form {
            // justify-content: space-around;
            // }

            :deep(.ant-form-inline .ant-form-item) {
                margin-right: 0;

                &:first-of-type {
                    margin-right: 25px;
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