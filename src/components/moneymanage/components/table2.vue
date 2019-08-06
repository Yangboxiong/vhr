<template>
  <el-container>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed="left" type="selection" width="35"></el-table-column>
      <el-table-column prop="xm" label="姓名" width="100"></el-table-column>
      <el-table-column prop="gh" label="工号" width="100"></el-table-column>
      <el-table-column prop="dzyj" label="电子邮件" width="200"></el-table-column>
      <el-table-column prop="dhhm" label="电话号码" width="100"></el-table-column>
      <el-table-column prop="ssbm" label="所属部门" width="100" align="center"></el-table-column>
      <el-table-column prop="gzzt" label="工资账套" align="center">
        <el-tooltip class="item" effect="dark" content="这里也不会" placement="right">
          <el-tag size="mini">不会</el-tag>
        </el-tooltip>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center" fixed="right">
        <el-button type="danger">修改账套</el-button>
      </el-table-column>
    </el-table>
    <el-footer>
      <div class="header">
        <div>

        </div>
        <div style="display: flex; justify-content: flex-end;">
          <el-pagination background layout="prev, pager, next" :total="200"></el-pagination>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          'xm': '江南一点雨',
          'gh': '00000001',
          'dzyj': 'laowang@qq.com',
          'dhhm': '18565558897',
          'ssbm': '总办',
          'gzzt': '人事部工资账套'
        },
        {
          'xm': '江南一点雨',
          'gh': '00000001',
          'dzyj': 'laowang@qq.com',
          'dhhm': '18565558897',
          'ssbm': '总办',
          'gzzt': '人事部工资账套'
        },
        {
          'xm': '江南一点雨',
          'gh': '00000001',
          'dzyj': 'laowang@qq.com',
          'dhhm': '18565558897',
          'ssbm': '总办',
          'gzzt': '人事部工资账套'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .el-footer{ padding: 0;}
  .header {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .header>div {
    flex: 1;
    display: flex;
  }
</style>
