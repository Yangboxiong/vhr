<template>
  <el-container>
    <el-header>
      <div class="header">
        <div>
          <el-button type="primary" icon="el-icon-plus">添加员工</el-button>
        </div>
        <div style="display: flex; justify-content: flex-end;">
          <el-button type="success"><i class="el-icon-refresh"></i></el-button>
        </div>
      </div>
    </el-header>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column fixed="left" type="selection" width="35"></el-table-column>
      <el-table-column prop="ztmc" label="账套名称" align="center"></el-table-column>
      <el-table-column prop="jbgz" label="基本工资" align="center"></el-table-column>
      <el-table-column prop="jtbt" label="交通补贴" align="center"></el-table-column>
      <el-table-column prop="wcbt" label="午餐补贴" align="center"></el-table-column>
      <el-table-column prop="jj" label="奖金" align="center"></el-table-column>
      <el-table-column prop="qysj" label="启用时间" align="center"></el-table-column>
      <el-table-column label="养老金" align="center">
        <el-table-column prop="ylbilv" label="比率" align="center"></el-table-column>
        <el-table-column prop="yljishu" label="基数" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="医疗保险" align="center">
        <el-table-column prop="bxbilv" label="比率" align="center"></el-table-column>
        <el-table-column prop="bxjishu" label="基数" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="公积金" align="center">
        <el-table-column prop="gjbilv" label="比率" align="center"></el-table-column>
        <el-table-column prop="gjjishu" label="基数" align="center"></el-table-column>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <el-table-column prop="edit" label="编辑" align="center">
          <el-button>编辑</el-button>
        </el-table-column>
        <el-table-column prop="delete" label="删除" align="center">
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-footer>
      <div class="header">
        <div>
          <el-button type="danger" round disabled>批量删除</el-button>
        </div>
        <div style="display: flex; justify-content: flex-end;">
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        'ztmc': '市场部工资账套',
        'jbgz': 9000,
        'jtbt': 500,
        'wcbt': 800,
        'jj': 4000,
        'qysj': '2018-01-24',
        'ylbilv': 0.07,
        'yljishu': 2000,
        'bxbilv': 0.07,
        'bxjishu': 2000,
        'gjbilv': 0.07,
        'gjjishu': 2000
      },
      {
        'ztmc': '人事部工资账套',
        'jbgz': 9000,
        'jtbt': 500,
        'wcbt': 800,
        'jj': 4000,
        'qysj': '2018-01-24',
        'ylbilv': 0.07,
        'yljishu': 2000,
        'bxbilv': 0.07,
        'bxjishu': 2000,
        'gjbilv': 0.07,
        'gjjishu': 2000
      },
      {
        'ztmc': '运维部工资账套',
        'jbgz': 9000,
        'jtbt': 500,
        'wcbt': 800,
        'jj': 4000,
        'qysj': '2018-01-24',
        'ylbilv': 0.07,
        'yljishu': 2000,
        'bxbilv': 0.07,
        'bxjishu': 2000,
        'gjbilv': 0.07,
        'gjjishu': 2000
      }]
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer{ padding: 0; }
  .header{ display: flex; width: 100%; height: 100%; justify-content: space-between; align-items: center; }
  .header > div{ flex: 1; display: flex; }
</style>
