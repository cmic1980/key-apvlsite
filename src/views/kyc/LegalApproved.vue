<template>
    <div class="app-container">
        <FormList :is-show-mas-deny="true" :is-show-mas-approve="true" :list="formList" :isShowApprove="false" :isShowDeny="false"/>
    </div>
</template>

<script>
    import FormList from '@/components/kyc/FormList.vue'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'Layout',
        components: {
            FormList

        },
        data() {
            return {}
        }, created() {
            this.$store.dispatch('form/getFormListByStatus', 3)
        }, computed: mapState({
            formList: function (state) {
                return state.form.all
            }
        })

    }
</script>

