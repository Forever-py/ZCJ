<template>
    <HeaderContainer :title="titleList[choiceNav]">
        <template #content>
            <div class="back" v-if="choiceNav !== 'statusName'" @click="choiceNav = 'statusName'">返回</div>
            <HomeContent v-if="choiceNav == 'statusName'" @onCancel="_onCancel" />
            <EquipmentStop v-if="choiceNav == 'equipmentStopName'" />
            <ManMachine v-if="choiceNav == 'humanNameS'" />
        </template>
    </HeaderContainer>
</template>
<script lang="ts" setup>
import { ref, markRaw } from "vue";
import HeaderContainer from "../components/HeaderContainer.vue";
import EquipmentStop from "../components/EquipmentStop.vue";
import HomeContent from "../components/HomeContent.vue";
import ManMachine from "../components/ManMachine.vue";

type TitleList = {
    statusName: string;
    equipmentStopName: string;
    humanNameF: string;
    humanNameS: string;
}

// const choiceNav = ref<string>("statusName");
const choiceNav = ref<string>("humanNameS");
const titleList = ref<TitleList>({
    statusName: "总装车间设备状态总览",
    equipmentStopName: "总装车间设备停台管理",
    humanNameF: "总装车间维修人员能力管理",
    humanNameS: "总装车间维修人员能力管理",
});

const _onCancel = function (key: string) {
    if(key == 'aaa') return;
    choiceNav.value = key;
}
</script>

<style lang="scss" scoped>
.back {
    position: fixed;
    top: 50px;
    right: 35px;
    color: #55c1ff;
    border: 1px solid #55C1FF;
    padding: 2px 10px;
    border-radius: 2px;
    cursor: pointer;
}
</style>
