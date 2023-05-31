<template>
  <div class="tabbar-right">
    <el-button size="small" circle icon="Refresh" @click="updateRefresh"></el-button>
    <el-button size="small" circle icon="FullScreen" @click="fullScreen"></el-button>
    <el-button size="small" circle icon="Setting"></el-button>
    <img
      src="/public/logo.png"
      style="width: 24px; height: 24px; margin: 0px 10px"
      alt=""
    />
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting'

let layOutSettingStore = useLayOutSettingStore()

const updateRefresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}

// 全屏
const fullScreen = () => {
  let full = document.fullscreenElement // 全屏元素,如果没有全屏则为null
  if (full) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}

</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped></style>
