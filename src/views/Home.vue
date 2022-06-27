<template>
    <HeaderContainer :title="titleList[choiceNav]">
        <template #content>
            <div class="back" v-if="choiceNav !== 'statusName'" @click="changeNav">{{ choiceNav != 'humanNameS' ? '返回' :
                    '人员能力信息管理'
            }}</div>
            <HomeContent v-if="choiceNav == 'statusName'" @onCancel="_onCancel" />
            <EquipmentStop v-if="choiceNav == 'equipmentStopName'" />
            <ManMachine v-if="choiceNav == 'humanNameS'" />
            <PersonInfoManagement v-if="choiceNav == 'humanNameF'" />
        </template>
    </HeaderContainer>
</template>
<script lang="ts" setup>
import { ref, markRaw } from "vue";
import HeaderContainer from "../components/HeaderContainer.vue";
import EquipmentStop from "../components/EquipmentStop.vue";
import HomeContent from "../components/HomeContent.vue";
import ManMachine from "../components/ManMachine.vue";
import PersonInfoManagement from "../components/PersonInfoManagement.vue"

type TitleList = {
    statusName: string;
    equipmentStopName: string;
    humanNameF: string;
    humanNameS: string;
}

const choiceNav = ref<string>("statusName");
const titleList = ref<TitleList>({
    statusName: "总装车间设备状态总览",
    equipmentStopName: "总装车间设备停台管理",
    humanNameF: "总装车间维修人员能力管理",
    humanNameS: "总装车间维修人员能力管理",
});

const _onCancel = function (key: string) {
    if (key == 'aaa') return;
    choiceNav.value = key;
}

// 改变页面显示
const changeNav = function () {
    if (choiceNav.value != 'humanNameS') {
        // 显示返回首页
        choiceNav.value = 'statusName';
    } else {
        choiceNav.value = 'humanNameF';
    }
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
