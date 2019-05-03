<template>
    <div class="app-container">
        <div style=" padding: 4px;">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Corporate Information" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="Controlling Person Details" name="2">
                    ...
                </el-collapse-item>
                <el-collapse-item title="Details of shareholder/beneficial owner (individual)" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="Details of shareholder/beneficial owner (corporate)" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div v-if="form.status<4">
            <div style="margin-top: 10px;">
                <el-radio v-model="action" label="1">Approve</el-radio>
                <el-radio v-model="action" label="2" style="margin-left: 8px">Deny</el-radio>
            </div>
            <div v-show="action==2" style="margin-top: 10px; margin-left: 4px; font-size: 10pt; font-style: italic;">
                The following comments will be sent to applicant by email and shown in the top of the KYC register page.
            </div>
            <div v-show="action==2" style="margin-top: 10px;">
                <el-input
                    :rows="8"
                    v-model="comments"
                    type="textarea"
                    placeholder="Please type your comments"/>
            </div>
            <div class="cmd">
                <el-button size="mini" type="primary" @click="submit">Submit</el-button>

                <el-button size="mini" type="primary" @click="cancel">Cancel</el-button>
            </div>
        </div>

        <div class="cmd" v-if="form.status==4">
            <el-button size="mini" type="primary" @click="done">Done</el-button>
            <el-button size="mini" type="primary" @click="cancel">Cancel</el-button>
        </div>

        <div class="cmd" v-if="form.status==5">
            <el-button size="mini" type="primary" @click="purge">Purge</el-button>
            <el-button size="mini" type="primary" @click="cancel">Cancel</el-button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                activeNames: ['1'],
                action: '1',
                comments: '',
                reason: '1',
                formId: this.$route.query.formId,
            }
        },
        methods: {
            handleChange(val) {
                console.log(val)
            }, submit() {
                if (this.action == "1") {
                    this.$store.dispatch('form/approve', this.formId)
                }

                if (this.action == "2") {
                    this.$store.dispatch('form/deny', this.formId)
                }

                this.$router.go(-1)
            }, done() {
                this.$store.dispatch('form/done', this.formId)
                this.$router.go(-1)
            }, purge() {
                this.$store.dispatch('form/purge', this.formId)
                this.$router.go(-1)
            },cancel(){
                this.$router.go(-1)
            }
        }, created() {
            this.$store.dispatch('form/getFormById', this.formId)
        }, computed: mapState({
            form: function (state) {
                return state.form.item
            }
        })
    }
</script>
