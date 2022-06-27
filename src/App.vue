
<template>
  <Home />
</template>

<script setup lang="ts">
import Home from './views/Home.vue';
</script>
<style lang="scss">
@import "./styles/mixin";

body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  text-align: center;
  @include my-background-image('./assets/border/bg.png');
}

.ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar {
  border-width: 0 !important;
}

* {
  &::-webkit-scrollbar {
    // width: 0px;
    // height: 0px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}
</style>
