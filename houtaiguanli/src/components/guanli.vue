<template>
    <div class="conent">
      <div class="header">
        <span>首页/数据管理/管理员列表
</span>
        <img src='//elm.cangdu.org/img/default.jpg' >
      </div>
      <el-table
        :data="name"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="user_name"
          label="姓名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="注册日期"
          width="200">
        </el-table-column>
        <el-table-column
          prop="city"
          label="地址"
          width="200">
        </el-table-column>
        <el-table-column
          prop="admin"
          label="权限"
          width="200">
        </el-table-column>
      </el-table>

      <el-pagination

        @current-change="handleCurrentChange"

        :page-size="5"
        layout="total, prev, pager, next"
        :total=count>
      </el-pagination>
    </div>
</template>

<script>
	export default {
		name: "guanli",
    data(){
      return{
        name:'',
        val:1,
        num:0,
        count:0
      }
    },
    mounted() {
      this.axios.get('https://elm.cangdu.org/admin/all?offset=0&limit=20').then(res=>{
        console.log(res.data.data);
        this.name=res.data.data
      }),
        this.axios
          .get("https://elm.cangdu.org/admin/count")
          .then((res)=>{
            this.count=res.data.count
          })
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.num=(val-1)*20
        this.axios.get('https://elm.cangdu.org/admin/all?offset='+this.num+'&limit=20').then(res=>{
          console.log(res.data);
          this.name=res.data.data
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
</style>
