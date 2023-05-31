<template>
  <div class="tabbar-right">
    <el-button
      size="small"
      circle
      icon="Refresh"
      @click="updateRefresh"
    ></el-button>
    <el-button
      size="small"
      circle
      icon="FullScreen"
      @click="fullScreen"
    ></el-button>
    <el-button size="small" circle icon="Setting"></el-button>
    <img
      :src="userStore.avatar"
      style="width: 24px; height: 24px; margin: 0px 10px ;border-radius: 50%;"
      alt=""
    />
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        {{userStore.username}}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter,useRoute } from 'vue-router'
import useLayOutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()
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


const logout = () => {
  userStore.userLogout()
  $router.push({ path: '/login' ,query:{redirect:$route.path}})
}

</script>
<script lang="ts">
export default {
  name: 'Setting',
}

</script>

<style scoped></style>
