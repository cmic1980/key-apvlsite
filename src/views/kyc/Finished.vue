<template>
  <div class="app-container">
    <FormList :is-show-renew="true" :list="list" :is-show-approved-time="false" :is-show-expiration-time="true"/>
  </div>
</template>

<script>
import FormList from '@/components/kyc/FormList.vue'

export default {
  name: 'Layout',
  components: {
    FormList
  },
  data() {
    return {
      list: [{
        id: '1',
        name: 'CITIC Securities Company Limited',
        type: 'Corporate',
        actionTime: '2019-04-07 14:09:19',
        expirationTime: '2019-04-07',
        status: 'Finished (Required renew)',
        email: 'swhysc@swhysc.com'
      }, {
        id: '2',
        name: 'The Hongkong and Shanghai Banking Corporation Limited',
        type: 'Corporate',
        actionTime: '2019-05-11 11:59:12',
        expirationTime: '2019-05-08',
        status: 'Finished (Required renew)',
        email: 'whb@gmail.com'
      }, {
        id: '3',
        name: 'Jack Ma',
        type: 'Individual',
        actionTime: '2019-04-11 11:59:12',
        expirationTime: '2021-04-11',
        status: 'Finished',
        email: 'jack.ma@alibaba.com'
      }]
    }
  }
}
</script>

