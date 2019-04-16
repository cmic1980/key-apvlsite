<template>
  <div class="app-container">
    <div class="table">
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row>
        <el-table-column
          prop="userId"
          label="Id"
          width="60px"
        />
        <el-table-column
          prop="userName"
          label="User name"
          width="200px"
        />
        <el-table-column
          prop="name"
          label="Name"
          width="150px"
        />
        <el-table-column
          prop="roles"
          label="Roles"
          width="200px"/>
        <el-table-column
          prop="status"
          width="100px"
          label="Status"/>

        <el-table-column
          prop="lastLoginTime"
          label="Last login time"/>

        <el-table-column label="Actions" width="200px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="editUser(scope.row)">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="cmd">
      <el-button size="mini" type="primary" @click="addUser">Add User</el-button>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="Add User"
      width="800px">
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible = false">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      dialogVisible: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.list = [{
        userId: 1,
        userName: 'moon.lu@ctx.sg',
        name: 'moon lu',
        lastLoginTime: '2019-04-07 14:09:19',
        status: 'Normal',
        roles: 'Legal Approver'
      }, {
        userId: 2,
        userName: 'lisa.jiang@ctx.sg',
        name: 'lisa jiang',
        lastLoginTime: '2019-04-07 14:09:19',
        status: 'Disabled',
        roles: 'Operator'
      }, {
        userId: 2,
        userName: 'bob.zhang@ctx.sg',
        name: 'bob zhang',
        lastLoginTime: '2019-04-07 14:09:19',
        status: 'Normal',
        roles: 'Operator, Administrator'
      }]
      this.listLoading = false
    },
    addUser() {
      this.dialogVisible = true
    },
    editUser() {
      this.dialogVisible = true
    }
  }
}
</script>
