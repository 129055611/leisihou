<template>
  <div class="box">
  <div class="left">
    <el-col :span="4">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo left1"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="sy">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="yh">用户列表</el-menu-item>
            <el-menu-item index="2-2" @click="sj">商家列表</el-menu-item>
            <el-menu-item index="2-3" @click="sp">食品列表</el-menu-item>
            <el-menu-item index="3-4" @click="dd">订单列表</el-menu-item>
            <el-menu-item index="4-5" @click="gl">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-plus"></i>
            <span>添加数据</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">添加商铺</el-menu-item>
            <el-menu-item index="3-2">添加商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>图表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">用户分布</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5 ">
          <template slot="title">
            <i class="el-icon-edit"></i>
            <span>编辑</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">文本编辑</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">管理员设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-warning"></i>
            <span>说明</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">说明</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
      }

    },
    methods:{
      sy(){
        this.$router.push({ path: "/shouye" });
      },
      yh(){
        this.$router.push({ path: "/yonghu" });
      },
      sj(){
        this.$router.push({ path: "/shangjia" });
      },
      gl(){
        this.$router.push({ path: "/guanli" });
      },
      sp(){
        this.$router.push({ path: "/shipin" });
      },
      dd(){
        this.$router.push({ path: "/dingdan" });
      },
    }
  }
</script>


<style scoped>
  .box{
    display: flex;
  }
  .left{
   width: 22%;
  }
  .right{
    width: 78%;
    height: 100%;
    overflow: auto;
  }
  .el-menu-vertical-demo{
    background: #324057;
    width: 22%;
    height: 100%;
    position: fixed;
    left: 0;

  }


</style>
