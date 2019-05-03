<template>
    <div class="app-container">
        <FormList :is-show-deny="true" :is-show-approve="true" :list="formList" :is-show-submit-time="true"
                  :is-show-approved-time="false"/>
    </div>
</template>

<script>
    import FormList from '@/components/kyc/FormList.vue'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'Layout',
        components: {
            FormList
        }, created() {
            this.$store.dispatch('form/getFormListByStatus', 1)
        }, data() {
            return {
            }
        }, computed: mapState({
            formList: function (state) {
                return state.form.all
            }
        })
    }
</script>

