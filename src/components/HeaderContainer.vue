<template>
    <div class="container">
        <div class="header">{{props.title}} </div>
        <div class="content" >
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title'])
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
$color1: #55C1FF;

.container {
    width: 100%;
    height: 100%;
    @include my-background-image('../assets/border/title.png');
    position: relative;
    overflow: hidden;

    .header {
        margin-top: 5px;
        line-height: 54px;
        letter-spacing: 2px;
        @include my-style-font(36px, #00FFFF, bold, SourceHanSansCN-Bold);
    }

    .content {
        width: calc(100% - 70px);
        height: calc(100% - 120px);
        position: absolute;
        bottom: 26px;
        margin: 0 35px;
    }
}

</style>