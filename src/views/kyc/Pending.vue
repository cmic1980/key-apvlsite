<template>
  <div class="app-container">
    <FormList :is-show-deny="true" :is-show-approve="true" :list="list" :is-show-submit-time="true" :is-show-approved-time="false"/>
  </div>
</template>

<script>
import FormList from '@/components/kyc/FormList.vue'

export default {
  name: 'Layout',
  components: {
    FormList
  }, data() {
    return {
      list: [{
        id: '1',
        name: 'CITIC Securities Company Limited',
        type: 'Corporate',
        actionTime: '2019-04-07 14:09:19',
        status: 'Pending',
        email: 'swhysc@swhysc.com'
      }, {
        id: '2',
        name: 'The Hongkong and Shanghai Banking Corporation Limited',
        type: 'Corporate',
        actionTime: '2019-04-11 11:59:12',
        status: 'Pending',
        email: 'whb@gmail.com'
      }, {
        id: '3',
        name: 'Jack Ma',
        type: 'Individual',
        actionTime: '2019-04-11 11:59:12',
        status: 'Resubmit',
        email: 'jack.ma@alibaba.com'
      }]
    }
  }
}
</script>

