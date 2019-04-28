<template>
  <div class="hello">
    <h3>elm后台管理系统</h3>
    <div class="a">
      <el-input v-model="input" placeholder="用户名" class="c" v-show="x"></el-input>

      <el-input v-model="input" placeholder="用户名" class="c" v-show="isshow"></el-input>
        <p v-show="isshow" class="d">
          请输入正确的用户名
        </p >




      <el-input v-model="input1" type="password" placeholder="密码" class="c" v-show="x"></el-input>
      <el-input v-model="input1" type="password" placeholder="密码" class="c" v-show="isshow"></el-input>
      <p v-show="isshow" class="d">
        请输入正确密码
      </p >


      <el-button plain @click="open">  登录  </el-button>




      <p class="b">温馨提示：</p>
      <p class="b">未登录过得新用户，自动注册</p>
      <p class="b">租车过得用户可凭账号密码登录</p>
    </div>

  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: '',
      input1:'',
      x:true,
      isshow:false
    }
  },
  methods: {
    open() {
      if(this.input==''||this.input1==''){
        const h = this.$createElement;
        this.$notify({
          title: '错误',
          message: h('i', { style: 'color: teal'}, '请输入正确的手机号和密码')

        });
      }
      let sj=/^1(3|4|5|7|8)\d{9}$/.test(this.input);
      let mm=/^[A-z][0-9]{5,10}$/.test(this.input1);
      if(sj===false){
        this.isshow=true;
        this.x=false
      }else {
        this.isshow=false;
        this.x=true
      }
      if(mm===false){
        this.isshow=true;
        this.x=false
      }else {
        this.isshow=false;
        this.x=true
      }
      if(sj&&mm){
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
        let obj={ user_name: this.input, password: this.input1}
        this.axios.post("https://elm.cangdu.org/admin/login", obj).then(res => {
          if (res.data.status === 1) {
            this.$router.push({ name: "ht" });
          }
        });
      }

    },


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  width: 100%;
  height: 1000px;
  background: #324057;
}
  h3{
    color: white;
    text-align: center;
    font-size:25px ;
    padding-top: 20%;
  }
  .c{
    width: 80%;
    padding-top:10px ;
  }
  .a{
    width: 400px;
    height: 350px;
    background: white;
    margin: 0 auto;
    border-radius: 5px;
    text-align: center;
  }
  .b{
    font-size: 12px;
    color: red;
  }
  button{
    width: 80%;
    background: royalblue;
    color: white;
    margin-top:20px ;
  }
  .d{
    font-size: 10px;
    color: red;
  }

</style>
