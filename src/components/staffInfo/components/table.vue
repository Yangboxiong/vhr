<template>
  <el-container>

    <el-header>
      <div class="header">
        <div>
          <el-input placeholder="通过员工名搜索员工" prefix-icon="el-icon-search" style="width: 350px; margin-right: 10px;"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary">高级搜索</el-button>
        </div>
        <div style="display: flex; justify-content: flex-end;">
          <el-button type="success" filed=""><i class="fa fa-lg fa-level-up"></i> 导入数据</el-button>
          <el-button type="success"><i class="fa fa-lg fa-level-down"></i> 导出数据</el-button>
          <el-button type="primary" icon="el-icon-plus">添加员工</el-button>
        </div>
      </div>
      <div></div>
    </el-header>

    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column fixed="left" type="selection" width="35"></el-table-column>
      <el-table-column fixed="left" prop="xm" label="姓名" width="100"></el-table-column>
      <el-table-column prop="gh" label="工号" width="100"></el-table-column>
      <el-table-column prop="xb" label="性别" width="50" align="center"></el-table-column>
      <el-table-column prop="csrq" label="出生日期" width="100" align="center"></el-table-column>
      <el-table-column prop="sfzhm" label="身份证号码" width="180"></el-table-column>
      <el-table-column prop="hyzk" label="婚姻状况" width="80" align="center"></el-table-column>
      <el-table-column prop="mz" label="民族" width="70" align="center"></el-table-column>
      <el-table-column prop="jg" label="籍贯" width="80" align="center"></el-table-column>
      <el-table-column prop="zzmm" label="政治面貌" width="100" align="center"></el-table-column>
      <el-table-column prop="dzyj" label="电子邮件" width="180"></el-table-column>
      <el-table-column prop="dhhm" label="电话号码" width="110"></el-table-column>
      <el-table-column prop="lxdz" label="联系地址" width="220"></el-table-column>
      <el-table-column prop="ssbm" label="所属部门" width="100" align="center"></el-table-column>
      <el-table-column prop="zw" label="职位" width="100"></el-table-column>
      <el-table-column prop="zc" label="职称" width="80" align="center"></el-table-column>
      <el-table-column prop="pyxx" label="聘用形式" width="80" align="center"></el-table-column>
      <el-table-column prop="rzrq" label="入职日期" width="120" align="center"></el-table-column>
      <el-table-column prop="zzrq" label="转正日期" width="120" align="center"></el-table-column>
      <el-table-column prop="htqsrq" label="合同起始日期" width="120" align="center"></el-table-column>
      <el-table-column prop="htjzrq" label="合同截止日期" width="120" align="center"></el-table-column>
      <el-table-column prop="htqx" label="合同期限" width="80" align="center"></el-table-column>
      <el-table-column prop="zgxl" label="最高学历" width="80" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="270">
        <el-button>编辑 </el-button>
        <el-button type="primary">查看高级资料</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>

    <el-footer>
      <div class="header">
        <div>
          <el-button type="danger" round disabled>批量删除</el-button>
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
      tableData: [{
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      },
      {
        xm: '江南一点雨',
        gh: '00000001',
        xb: '男',
        csrq: '1990-01-01',
        sfzhm: '610122199801011256',
        hyzk: '已婚',
        mz: '汉族',
        jg: '陕西',
        zzmm: '普通公民',
        dzyj: 'laowang@qq.com',
        dhhm: '18565558897',
        lxdz: '深圳市南山区',
        ssbm: '总办',
        zw: '技术总监',
        zc: '教授',
        pyxx: '劳务合同',
        rzrq: '2018-01-01',
        zzrq: '2018-04-01',
        htqsrq: '2018-01-01',
        htjzrq: '2020-01-01',
        htqx: '2年',
        zgxl: '本科'
      }]
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    margin: 0;
    padding: 0;
  }

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
