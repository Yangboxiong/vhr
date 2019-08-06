<template>
  <el-container>
    <el-header>
      <div class="title">微人事</div>
      <div>
        <i class="fa fa-bell-o" style="cursor: pointer; color: #fff; margin-right: 30px;"></i>
        <el-dropdown>
          <div style="display: flex; justify-content: center; align-items: center; color: #fff;">
            系统管理员
            <img src="../../assets/img/64573ce2edc0728.jpg" style="width: 40px; border-radius: 50%; margin-left: 10px;">
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>系统设置</el-dropdown-item>
            <hr color="#ECECEC" style="margin: 5px 0;" size="1">
            <el-dropdown-item>注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router default-opened="3" default-active="ygztsz">

          <el-submenu index="1">
            <template slot="title"><i class="fa fa-user-circle-o" style="color: rgb(32, 160, 255); width: 14px; margin-right: 5px;"></i>员工资料</template>
            <el-menu-item index="basicinfo">基本资料</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="fa fa-address-card-o" style="color: rgb(32, 160, 255); width: 14px; margin-right: 5px;"></i>人事管理</template>
            <el-menu-item index="ygjc">员工奖惩</el-menu-item>
            <el-menu-item index="tgpx">员工培训</el-menu-item>
            <el-menu-item index="ygtx">员工调薪</el-menu-item>
            <el-menu-item index="ygdd">员工调动</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="fa fa-money" style="color: rgb(32, 160, 255); width: 14px; margin-right: 5px;"></i>薪资管理</template>
            <el-menu-item index="gzztgl">工资账套管理</el-menu-item>
            <el-menu-item index="ygztsz">员工账套设置</el-menu-item>
            <el-menu-item index="gzbgl">工资表管理</el-menu-item>
            <el-menu-item index="ymcl">月末处理</el-menu-item>
            <el-menu-item index="gzbcx">工资表查询</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"><i class="fa fa-bar-chart" style="color: rgb(32, 160, 255); width: 14px; margin-right: 5px;"></i>统计管理</template>
            <el-menu-item index="zhxxtj">综合信息统计</el-menu-item>
            <el-menu-item index="ygjftj">员工积分统计</el-menu-item>
            <el-menu-item index="rsxxtj">人事信息统计</el-menu-item>
            <el-menu-item index="rsjltj">人事记录统计</el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title"><i class="fa fa-windows" style="color: rgb(32, 160, 255); width: 14px; margin-right: 5px;"></i>系统管理</template>
            <el-menu-item index="jcxxsz">基础信息设置</el-menu-item>
            <el-menu-item index="xtgl">系统管理</el-menu-item>
            <el-menu-item index="czrzgl">操作日志管理</el-menu-item>
            <el-menu-item index="czygl">操作员管理</el-menu-item>
            <el-menu-item index="bfhfsjk">备份恢复数据库</el-menu-item>
            <el-menu-item index="cshsjk">初始化数据库</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>

        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 15px;">
          <el-breadcrumb-item :to="{ path: '/system' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>工资账套管理</el-breadcrumb-item>
        </el-breadcrumb>

        <ygzt-table></ygzt-table>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import YgztTable from './components/table2'
export default {
  components: {
    YgztTable: YgztTable
  }
}
</script>

<style>
  @import url("../../assets/css/public.css")
</style>

<style scoped>
  .el-header {
    background: #20a0ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 22px;
    color: #fff;
  }

  .el-submenu {
    background: #ececec;
  }

</style>
