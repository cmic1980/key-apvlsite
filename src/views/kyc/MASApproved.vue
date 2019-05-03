<template>
    <div class="app-container">
        <FormList :is-show-done="true" :list="formList"/>
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
            this.$store.dispatch('form/getFormListByStatus', 4)
        }, data() {
            return {}
        }, computed: mapState({
            formList: function (state) {
                return state.form.all
            }
        })
    }
</script>

