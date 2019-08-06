<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="部门管理" name="one">
      <div class="tabs">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText" prefix-icon="el-icon-search"></el-input>
        <el-tree class="filter-tree" :data="data" :props="defaultProps" :filter-node-method="filterNode" ref="tree"></el-tree>
      </div>
    </el-tab-pane>
    <el-tab-pane label="职位管理" name="two">
      <div class="tabs">
        <el-header style="display: flex; justify-content: center; align-items: center;">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-plus" v-model="input2" style="margin-right: 10px;"></el-input>
          <el-button type="primary">搜索</el-button>
        </el-header>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column fixed="left" type="selection" width="35"></el-table-column>
          <el-table-column prop="bh" label="编号"></el-table-column>
          <el-table-column prop="zwmc" label="职位名称"></el-table-column>
          <el-table-column prop="cjsj" label="创建时间"></el-table-column>
          <el-table-column prop="cj" label="操作" width="150">
            <el-button>编辑 </el-button>
            <el-button type="danger">删除</el-button>
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
      </div>
    </el-tab-pane>
    <el-tab-pane label="职称管理" name="three">
      <div class="tabs">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="formInline.user" placeholder="添加昵称" prefix-icon="el-icon-plus"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="正高级" value="one"></el-option>
              <el-option label="副高级" value="two"></el-option>
              <el-option label="中级" value="three"></el-option>
              <el-option label="初级" value="four"></el-option>
              <el-option label="员级" value="five"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData1" border stripe style="width: 100%">
          <el-table-column fixed="left" type="selection" width="35"></el-table-column>
          <el-table-column prop="bh" label="编号"></el-table-column>
          <el-table-column prop="zcmc" label="职称名称"></el-table-column>
          <el-table-column prop="zcjb" label="职称级别"></el-table-column>
          <el-table-column prop="cjsj" label="创建时间"></el-table-column>
          <el-table-column prop="cj" label="操作" width="150">
            <el-button>编辑 </el-button>
            <el-button type="danger">删除</el-button>
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
      </div>
    </el-tab-pane>
    <el-tab-pane label="奖惩规则" name="four">奖惩规则</el-tab-pane>
    <el-tab-pane label="权限组" name="five">
      <div class="tabs">
        <el-collapse v-model="activeName1" accordion>
          <el-collapse-item :title="item.text" :name="item.id" v-for="item of cardList" :key="item.id">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>可访问的资源</span>
                <el-button style="float: right; padding: 3px 0; color: red;" type="text"><i class="el-icon-delete"></i></el-button>
              </div>
              <el-tree :data="data1" show-checkbox :props="defaultProps"></el-tree>
              <el-footer style="display: flex; align-items: center; justify-content: flex-end;">
                <el-button>取消修改</el-button>
                <el-button type="primary">确认修改</el-button>
              </el-footer>
            </el-card>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName1: '1',
      activeName: 'first',
      filterText: '',
      cardList: [{
        id: '1',
        text: '部门经理'
      },
      {
        id: '2',
        text: '人事专员'
      },
      {
        id: '3',
        text: '招聘主管'
      },
      {
        id: '4',
        text: '培训主管'
      },
      {
        id: '5',
        text: '薪酬绩效主管'
      },
      {
        id: '6',
        text: '测试角色1'
      },
      {
        id: '7',
        text: '测试角色2'
      },
      {
        id: '8',
        text: '方法'
      }],
      data: [{
        label: '股东会',
        children: [{
          label: '董事会',
          children: [{
            label: '总办',
            children: [{
              label: '财务部'
            },
            {
              label: '市场部',
              children: [{
                label: '华北市场部',
                children: [{
                  label: '石家庄市场部'
                }]
              },
              {
                label: '华南市场部'
              },
              {
                label: '西北市场部',
                children: [{
                  label: '西安市场部'
                }]
              }]
            },
            {
              label: '技术部'
            },
            {
              label: '运维部'
            }]
          }]
        }]
      }],
      data1: [{
        label: '所有',
        children: [{
          label: '员工资料',
          children: [{
            label: '基本资料'
          }]
        },
        {
          label: '人事管理',
          children: [{
            label: '员工奖惩'
          },
          {
            label: '员工培训'
          },
          {
            label: '员工调薪'
          },
          {
            label: '员工调动'
          }]
        },
        {
          label: '薪资管理',
          children: [{
            label: '工资账套管理'
          },
          {
            label: '员工账套管理'
          },
          {
            label: '工资表管理'
          },
          {
            label: '月末处理'
          },
          {
            label: '工资表查询'
          }]
        },
        {
          label: '统计管理',
          children: [{
            label: '综合信息统计'
          },
          {
            label: '员工积分统计'
          },
          {
            label: '人事信息统计'
          },
          {
            label: '人事记录统计'
          }
          ]
        },
        {
          label: '系统资料',
          children: [{
            label: '基础信息设置'
          },
          {
            label: '系统管理'
          },
          {
            label: '操作日志管理'
          },
          {
            label: '操作员管理'
          },
          {
            label: '备份恢复数据库'
          },
          {
            label: '初始化数据库'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [{
        bh: '29',
        zwmc: '技术总监',
        cjsj: '2018-01-11'
      },
      {
        bh: '30',
        zwmc: '运营总监',
        cjsj: '2018-01-11'
      },
      {
        bh: '31',
        zwmc: '市场总监',
        cjsj: '2018-01-11'
      },
      {
        bh: '32',
        zwmc: '总经理',
        cjsj: '2018-01-11'
      }],
      tableData1: [{
        bh: '09',
        zcmc: '教授',
        zcjb: '正高级',
        cjsj: '2018-01-11'
      },
      {
        bh: '09',
        zcmc: '教授',
        zcjb: '正高级',
        cjsj: '2018-01-11'
      },
      {
        bh: '09',
        zcmc: '教授',
        zcjb: '正高级',
        cjsj: '2018-01-11'
      }],
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {

    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  }
}
</script>

<style scoped>
  .el-footer,
  .el-header {
    padding: 0;
  }

  .tabs {
    width: 700px;
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
