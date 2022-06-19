<template>
  <div class="container">
    <HomeBorder class="top" :title="titleList[0]">
      <template #content>
        <div class="content">
          <div class="content-left">
            <span class="title-name">设备可动率</span>
            <ThirdLineVue class="content-inner" />
          </div>
          <div class="content-right">
            <span class="title-name">当月设备可动率指标完成情况</span>
            <div class="progress-group">
              <div
                class="first"
                v-for="(item, index) in topRightList"
                :key="index"
              >
                <a-progress
                  type="circle"
                  trailColor="rgba(255,255,255,.1)"
                  strokeColor="#0FB0F4"
                  :percent="item.percent"
                  :strokeWidth="10"
                >
                  <template #format="percent">
                    <span>{{ percent }}%</span>
                  </template>
                </a-progress>
                <span class="progress-name">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </HomeBorder>
    <HomeBorder class="center" :title="titleList[1]">
      <template #content>
        <a-row class="content" justify="space-between">
          <a-col :span="8" v-for="(item, index) in centerList" :key="index">
            <span>{{ item.title }}</span>
            <span class="middle"
              ><span class="cur">{{ item.current }}</span
              >/<span class="total">{{ item.total }}</span></span
            >
            <span :class="{ per: item.type !== 'month' }">{{
              item.type == "month"
                ? "趋势符合率"
                : `${Math.ceil((item.current / item.total) * 100)}%`
            }}</span>
          </a-col>
        </a-row>
      </template>
    </HomeBorder>
    <HomeBorder class="bottom" :title="titleList[2]">
      <template #content>
        <div class="content">
          <div
            class="pie-wapper"
            v-for="(item, index) in bottomList"
            :key="index"
          >
            <span class="title" @click="_onClick(item.key)">{{
              item.title
            }}</span>
            <StatusPie :data="item.data" class="status-pie"></StatusPie>
          </div>
        </div>
      </template>
    </HomeBorder>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import HomeBorder from "../components/HomeBorder.vue";
import ThirdLineVue from "../components/ThirdLine.vue";
import StatusPie from "../components/StatusPie.vue";

const emits = defineEmits<{(e:'onCancel', value:string):void}>()

const choiceNav = ref<string>("");
const titleList = ref<string[]>([
  "设备可动率",
  "费用",
  "设备状态",
]);
const topRightList = ref<{ name: string; percent: number }[]>([
  { name: "单机输送甲", percent: 80 },
  { name: "单机输送乙", percent: 100 },
  { name: "底盘检测甲", percent: 76 },
  { name: "底盘检测乙", percent: 50 },
]);

const centerList = ref([
  {
    type: "month",
    title: "当月备件记账费用(千元)",
    current: 1200,
    total: 1500,
  },
  {
    type: "month",
    title: "当月外委记账费用(千元)",
    current: 1200,
    total: 1500,
  },
  {
    type: "month",
    title: "当月油液品记账费用(千元)",
    current: 1200,
    total: 1500,
  },
  { type: "year", title: "当年备件记账费用(千元)", current: 1200, total: 1500 },
  { type: "year", title: "当年外委记账费用(千元)", current: 1200, total: 1500 },
  {
    type: "year",
    title: "当年油液品记账费用(千元)",
    current: 1200,
    total: 1500,
  },
]);

const bottomList = ref<
  {
    key: string;
    title: string;
    data: {
      value: number;
      name: string;
    }[];
  }[]
>([
  {
    title: "设备停台问题闭环管理",
    key: "equipmentStopName",
    data: [
      { value: 20, name: "未闭环" },
      { value: 50, name: "已闭环" },
    ],
  },
  {
    key: "aaa",
    title: "设备检修计划与实施管理",
    data: [
      { value: 12, name: "未闭环" },
      { value: 70, name: "已闭环" },
    ],
  },
  {
    key: "aaa",
    title: "设备标定管理",
    data: [
      { value: 3, name: "未闭环" },
      { value: 10, name: "已闭环" },
    ],
  },
  {
    key: "aaa",
    title: "设备运行状态监控管理",
    data: [
      { value: 35, name: "未闭环" },
      { value: 40, name: "已闭环" },
    ],
  },
  {
    key: "aaa",
    title: "设备工艺参数管理",
    data: [
      { value: 33, name: "未闭环" },
      { value: 31, name: "已闭环" },
    ],
  },
  {
    key: "humanNameS",
    title: "人机匹配管理",
    data: [
      { value: 5, name: "未闭环" },
      { value: 30, name: "已闭环" },
    ],
  },
]);

const _onClick = function (key:string) {
  emits('onCancel',key)
}
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
$color1: #55c1ff;

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .top,
  .bottom {
    width: 100%;
    flex: 1;
  }

  .top {
    .content {
      width: 100%;
      height: 100%;
      display: flex;

      .content-left {
        height: 100%;

        .content-inner {
          width: 100%;
          flex: 1;
        }
      }

      .content-right {
        margin-left: 5px;

        .progress-group {
          width: 100%;
          flex: 1;
          display: flex;

          .first {
            padding: 0 4px;
            width: 50%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            :deep(.ant-progress-text),
            .progress-name {
              letter-spacing: 1px;
              @include my-style-font(20px, #fff, 400, SourceHanSansCN-Regular);
            }

            .progress-name {
              display: inline-block;
              padding-top: 10px;
            }
          }
        }
      }

      .content-left,
      .content-right {
        height: 100%;
        width: calc(50% - 5px);
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title-name {
          letter-spacing: 1px;
          @include my-style-font(22px, $color1, 500);
        }
      }
    }
  }

  .center {
    width: 100%;
    height: 140px;
    margin: 10px 0;

    .content {
      width: 100%;
      height: 100%;
      color: #fff;

      .ant-col {
        display: flex;
        align-items: center;
        padding-left: 10px;

        span {
          letter-spacing: 1px;
          @include my-style-font(18px, #fff, 500);

          &.middle {
            display: inline-block;
            width: 120px;

            .cur {
              color: #00bd7e;
            }

            .total {
              color: #f89e53;
            }
          }

          &.per {
            color: #00bd7e;
          }
        }
      }
    }
  }

  .bottom {
    .content {
      display: flex;
      width: 100%;
      height: 100%;

      .pie-wapper {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .title {
          @include my-style-font(18px, #fff, 400, SourceHanSansCN-Regular);
          letter-spacing: 1px;
          cursor:pointer;
        }

        .status-pie {
          width: 100%;
        }
      }
    }
  }
}
</style>
