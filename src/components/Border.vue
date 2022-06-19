<template>
    <div class="border-container">
        <div class="sub-title">{{ props.title }}</div>
        <div class="operation">
            <slot name="operation"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(["title"]);
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
$color1: #55c1ff;

.border-container {
    width: 100%;
    height: 100%;
    padding: 20px;
    @include my-background-image("../assets/border/border.png");

    .sub-title {
        letter-spacing: 1px;
        @include my-style-font($fontSize: 20px,$color: $color1, $fontWeight: bold);
    }

    .operation {
        height: 62px;
    }

    .content {
        height: calc(100% - 62px - 45px);
        overflow: hidden;
    }
}
</style>
