<template>
    <div>
      <div class="header">
        <span>首页/数据管理/食品列表
</span>
        <img src='//elm.cangdu.org/img/default.jpg' >
      </div>
      <template>
        <el-table
          :data="names"
          style="width: 100%">
          <el-table-column type="expand">
            <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{  }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{props.row.item_id}}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.restaurant_id}}</span>
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
            label="食品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="食品介绍"
            prop="description">
          </el-table-column>
          <el-table-column
            label="评分"
            prop="rating">
          </el-table-column>
          <el-table-column
            label="操作"
            prop="desc">
            <template scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      </template>

      <el-pagination

        @current-change="handleCurrentChange"

        :page-size="20"
        layout="total, prev, pager, next"
        :total=count>
      </el-pagination>

    </div>
</template>

<script>
	export default {
		name: "shipin",
    data(){
		 return{
		   names:'',
       val:1,
       num:0,
       count:0

     }
    },
    mounted() {
      this.axios.get('https://elm.cangdu.org/shopping/v2/foods?offset=40&limit=20&restaurant_id=undefined').then(res=>{
        console.log(res.data);
        this.names=res.data

      })
      this.axios
        .get("https://elm.cangdu.org/shopping/v2/foods/count?restaurant_id=undefined")
        .then((res)=>{
          console.log(res.data.count);

          this.count=res.data.count
        })

    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.num=(val-1)*5
        this.axios.get('https://elm.cangdu.org/shopping/v2/foods?offset='+this.num+'&limit=20&restaurant_id=undefined').then(res=>{
          console.log(res.data);
          this.names=res.data
        })

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
