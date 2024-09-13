<template>
  <div class="login-container">
        <div class="login-form">
            <h2 class="login-header">Login</h2>
            <IndexForm />
        </div>
    </div>
</template>

<script setup>
import IndexForm from '~/components/Index/IndexForm.vue';

// import { IndexForm } from '~/components/Index/Form.vue';
// Optional script if needed
</script>

<style scoped lang="less">
@import './index.less';

// @use "~/assets/scss/main.scss";
// @use "~/pages/index/index.less";
</style>