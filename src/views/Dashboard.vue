<template>
    <div class="dashboard-container">
        <div class="dashboard-text">User Name: admin</div>
        <div class="dashboard-text">Roles: administrator</div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard'
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .dashboard {
        &-container {
            margin: 30px;
        }
        &-text {
            font-size: 30px;
            line-height: 46px;
        }
    }
</style>
