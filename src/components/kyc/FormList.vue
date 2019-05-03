<template>
  <el-table
    v-loading="listLoading"
    :data="list"
    element-loading-text="Loading"
    border
    fit
    highlight-current-row>
    <el-table-column
      prop="id"
      label="Id"
      width="60px"
    />

    <el-table-column label="Corporate/ Individual name" width="400px">
      <template slot-scope="scope">
        <el-button
          type="text"
          size="small"
          @click="viewForm(scope.row)">
          {{ scope.row.name }}
        </el-button>
      </template>
    </el-table-column>
    <el-table-column
      prop="typeName"
      label="Type"
      width="100px"/>
    <el-table-column
      prop="email"
      label="Contact Email"
      width="250px"
    />

    <el-table-column
      prop="statusName"
      width="200px"
      label="Status"/>

    <el-table-column
      v-if="isShowSubmitTime"
      prop="submitTime"
      label="Submit time"/>

    <el-table-column
      v-if="isShowApprovedTime"
      prop="actionTime"
      label="Approved time"/>

    <el-table-column v-if="isShowExpirationTime" label="Expiration Date">
      <template slot-scope="scope">
        <span v-if="scope.row.id==1" style="color: red" >
          {{ scope.row.expirationTime }}
        </span>

        <span v-if="scope.row.id==2" style="color:orange" >
          {{ scope.row.expirationTime }}
        </span>

        <span v-if="scope.row.id==3" >
          {{ scope.row.expirationTime }}
        </span>
      </template>
    </el-table-column>

    <el-table-column label="Actions" width="250px">
      <template slot-scope="scope">
        <el-button
          v-show="isShowApprove"
          type="primary"
          size="mini">Approve
        </el-button>
        <el-button
          v-show="isShowDeny"
          size="mini"
          type="danger">Deny
        </el-button>
        <el-button
          v-show="isShowMasApprove && isShowSendToMas(scope.row)==false"
          type="primary"
          size="mini">MAS Approve
        </el-button>
        <el-button
          v-show="isShowMasDeny && isShowSendToMas(scope.row)==false"
          size="mini"
          type="danger">MAS Deny
        </el-button>
        <el-button
          v-show="isShowSendToMas(scope.row)"
          size="mini"
          type="danger"
          @click="sendToMAS(scope.row)">Send to MAS
        </el-button>
        <el-button
          v-show="isShowDone"
          size="mini"
          type="primary">Done
        </el-button>
        <el-button
          v-show="isShowPurge"
          size="mini"
          type="danger">Purge
        </el-button>
        <el-button
          v-show="isShowRenew"
          size="mini"
          type="primary"
          @click="renew(scope.row)">Renew
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    isShowDeny: {
      type: Boolean,
      default: false
    },
    isShowApprove: {
      type: Boolean,
      default: false
    }, isShowMasDeny: {
      type: Boolean,
      default: false
    },
    isShowMasApprove: {
      type: Boolean,
      default: false
    },
    isShowDone: {
      type: Boolean,
      default: false
    },
    isShowPurge: {
      type: Boolean,
      default: false
    },
    isShowRenew: {
      type: Boolean,
      default: false
    },
    isShowSubmitTime: {
      type: Boolean,
      default: false
    },
    isShowApprovedTime: {
      type: Boolean,
      default: true
    },
    isShowExpirationTime: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      listLoading: true,
      isShowSendToMas: function(item) {
        if (item.status === 'Legal Approved') {
          return true
        } else {
          return false
        }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.listLoading = false
    }, sendToMAS(item) {
      item.status = 'Waiting MAS approval'
    }, renew(item) {
      item.status = 'Finished (Required renew)'
    }, viewForm(item) {
      this.$router.push('/kyc/corp')
    }
  }
}
</script>
