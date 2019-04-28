<template>
    <div class="conent">
      <div class="header">
        <span>首页/数据管理/用户列表
</span>
        <img src='//elm.cangdu.org/img/default.jpg' >
      </div>
      <div class="block">
        <el-table
          ref="singleTable"
          :data="name"
          highlight-current-row

          style="width: 100%">
          <el-table-column
            type="index"
            width="150">
          </el-table-column>
          <el-table-column
            property="registe_time"
            label="日期"
            width="200">
          </el-table-column>
          <el-table-column
            property="username"
            label="姓名"
            width="200">
          </el-table-column>
          <el-table-column
            property="city"
            label="地址">
          </el-table-column>
        </el-table>



        <el-pagination

          @current-change="handleCurrentChange"

          :page-size="5"
          layout="total, prev, pager, next"
          :total=count>
        </el-pagination>

      </div>
    </div>
</template>

<script>

	export default {
		name: "yonghu",
    data(){
		  return{
		    name:'',
        val:1,
        num:0,
        count:''

      }
    },
   mounted() {
		  this.axios.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=20').then(res=>{
        console.log(res.data);
        this.name=res.data
      }),
        this.axios
          .get("https://elm.cangdu.org/v1/users/count")
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
        this.num=(val-1)*5
        this.axios.get('https://elm.cangdu.org/v1/users/list?offset='+this.num+'&limit=20').then(res=>{
          console.log(res.data);
          this.name=res.data
        })

      }
    },
  }
</script>

<style  scoped lang="scss">
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
