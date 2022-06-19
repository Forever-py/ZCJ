<template>
    <div class="home-border">
        <span class="s-title"><i class="icon"></i>{{props.title}}</span>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title']);
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
$color1: #55C1FF;
.home-border {
    width: 100%;
    height: 100%;
    padding: 20px;
    @include my-background-image("../assets/border/border.png");
    display: flex;
    align-items: center;

    .s-title {
        @include my-style-font($color: $color1, $fontWeight: 500);
        width: 20px;
        word-wrap: break-word;

        .icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            transform: translateX(2px);
            @include my-background-image("../assets/border/icon.png");
        }
    }
    .content {
        width: calc(100% - 20px - 10px);
        height: 100%;
        margin-left: 10px;
    }
}
</style>