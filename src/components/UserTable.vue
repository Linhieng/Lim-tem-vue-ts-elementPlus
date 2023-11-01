<template>
    <el-table :data="userData" v-loading="loading">
        <el-table-column prop="id" label="id" width="50" />
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="age" label="年龄" width="70" />
        <el-table-column prop="email" label="邮箱" />
    </el-table>
</template>

<script setup lang="ts">
import type { User } from '@/types'

defineProps<{
    userData: User[] | undefined
    loading: boolean
}>()
</script>
