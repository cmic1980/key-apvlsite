<template>
  <div class="app-container">
    <FormList :is-show-renew="true" :list="formList"/>
  </div>
</template>

<script>
import FormList from '@/components/kyc/FormList.vue'

export default {
  name: 'Layout',
  components: {
    FormList
  }
}
</script>

