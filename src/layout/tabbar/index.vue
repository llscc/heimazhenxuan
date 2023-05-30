<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Expand } from '@element-plus/icons-vue'
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<script lang="ts">
export default{
  name:"Tabbar"
}
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(221, 210, 210),
    rgb(219, 218, 218),
    rgb(243, 232, 232)
  );
  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;

    .el-icon {
      margin-right: 10px;
    }
  }
  .tabbar-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
