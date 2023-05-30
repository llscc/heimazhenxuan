<template>

           <p>{{ menuList }}</p>
           <template v-for="(item, index) in menuList" :key="item.path">
            <!-- 没有子路由 -->
            <el-menu-item v-if="!item.children" >
            <template #title>
                <span>tubiao &nbsp;</span>
                <span>{{ item.meta.title }}</span>
            </template>
            </el-menu-item>
            <!-- 只有一个子路由 -->
            <el-menu-item v-if="item.children&&item.children.length==1">
                <template #title>
                <span>tubiao &nbsp;</span>
                <span>{{ item.children[0].meta.title }}</span>
            </template>
            </el-menu-item>
            <!-- 有多个子路由 -->
            <el-sub-menu>

            </el-sub-menu>

            </template>
</template>

<script setup lang="ts">
defineProps(['menuList'])
</script>

<style scoped></style>