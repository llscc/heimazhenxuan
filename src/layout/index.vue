<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo />

            <el-scrollbar class="scrollbar">
                <el-menu background-color="#001529" text-color="white">
                   <Menu :menuList="useStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar">

        </div>
        <!-- 内容展示区域 -->
        <div class="layout_main">

        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'

import Menu from './menu/index.vue'

//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
</script>

<style lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background: red;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s;

        // &.fold {
        //     width: calc(100vw - $base-menu-min-width );
        //     left: $base-menu-min-width;
        // }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        // &.fold {
        //     width: calc(100vw - $base-menu-min-width );
        //     left: $base-menu-min-width;
        // }

    }
}
</style>