<template>
  <el-container>

    <el-header></el-header>

    <template>
      <el-table :data="tableData" border style="width: 100%">
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
          <template slot-scope="scope">
            <el-button size="mini">查看</el-button>
            <el-button type="primary" size="mini">查看高级资料</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

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

<style>
</style>
