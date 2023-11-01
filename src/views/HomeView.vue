<template>
    <div class="show-table-wrapper">
        <UserTable :user-data="userData" :loading="loading"></UserTable>
    </div>
</template>

<script lang="ts" setup>
import UserTable from '@/components/UserTable.vue'

import { ref, onMounted } from 'vue'
import type { User } from '@/types'
import { getAllUser } from '@/request'

const userData = ref<User[]>()
const loading = ref(true)

onMounted(async () => {
    const data = await getAllUser()
    loading.value = false
    if (data) {
        userData.value = data
    } else {
        ElMessage.error('无法获取用户列表')
    }
})
</script>

<style scoped>
.show-table-wrapper {
    margin: 100px auto;
    max-width: 500px;
    height: 600px;
    overflow: auto;
}
</style>
