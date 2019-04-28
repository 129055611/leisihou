<template>
    <div class="conent">
      <div class="header">
        <span>首页/数据管理/商家列表
</span>
        <img src='//elm.cangdu.org/img/default.jpg' >
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="店铺名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="店铺地址"
          prop="address"
        >
        </el-table-column>
        <el-table-column
          label="商品介绍"
          prop="description">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button plain type="small">添加商品</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination

        @current-change="handleCurrentChange"

        :page-size="5"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
</template>

<script>
  import  Axios from 'axios'
  export default {
    data() {
      return {
        tableData: [],
        currentRow: null,
        list: "",
          val: 1,
        num:0,
        count:0
      };
    },
    mounted(){

    },
    created() {
      Axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20").then((item) => {
        console.log(item.data)
        this.tableData = item.data
      })

    },

    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.num=(val-1)*20
        Axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset="+this.num+"&limit=20").then((item) => {
          console.log(item);
          this.tableData = item.data
        });
      }
    },
  }
</script>

<style scoped lang="scss">
  .header{
    width: 100%;
    height: 60px;
    background-color: #eff2f7;
  span:nth-of-type(1){
    line-height: 60px;
    padding-left: 40px;
    font-size: 14px;
    color: #97a8be;
  }
  img{
    width: 36px;
    height: 36px;
    float: right;
    margin-right: 40px;
    margin-top: 12px;
    border-radius: 20px;
  }
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
