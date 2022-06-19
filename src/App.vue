
<template>
  <Asa />
<!-- <SecondPie></SecondPie> -->
</template>

<script setup lang="ts">
import Asa from './components/Asa.vue'
// import SecondPie from './components/SecondPie.vue'
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
  // &::-webkit-scrollbar {
  //   width: 8px;
  //   height: 8px;
  //   background-color: transparent;
  // }

  // &::-webkit-scrollbar-track {
  //   border-radius: 5px;
  //   background-color: transparent;
  // }

  // &::-webkit-scrollbar-thumb {
  //   border-radius: 5px;
  //   background-color: transparent;
  // }
}
</style>
