<template>
  <!--Shift+Alt+F 快捷键整理-->
  <div class="login_container">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login_box"
    >
      <h3 class="login_title">欢迎登陆</h3>
      <el-form-item label="用户名" prop="name">
        <!--v-model双向数据绑定-->
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码"  prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="radio" @change="selectrole">
          <el-radio :label="1">管理员</el-radio>
          <el-radio :label="2">医生</el-radio>
          <el-radio :label="3">用户</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登陆</el-button>
        <el-button type="info" @click="reset('form')">重置</el-button>
        <div><span>忘记密码?</span>
        <span type="botton" @click="register">注册</span></div>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
      radio: 2,
    };
  },
  methods: {
    //表单提交
    submitForm(form) {
      this.$refs.form.validate(async(valid) => {
        // console.log(valid)
        // if (!valid) return
        // const res = await this.$http.post('login', this.loginform)
        // console.log(res)
        // if (res.data.meta.status === 200) {
        //   // 将登录成功后的token保存在客户端的sesstionStrage中
        //   // 作用就是项目中出现登录接口以外的API必须登录后才能访问，token只应在当前网站期间打开有效
        //   this.$message.success('登录成功')
        //   window.sessionStorage.setItem('token', res.data.data.token)
        //   this.$router.push('/home')
        // } else {
        //   this.$message.error('登录失败')
        // }
        this.$router.push('/home')
      });
    },
    //重置表单内容
    reset(form) {
      this.$refs[form].resetFields();
    },
    //选择角色
    selectrole(value) {
      this.radio = value;
    },
    register(){
      this.$router.push('/register'); //跳转到指定页面
    }
  },
};
</script>

<--!scoped单范围标签-->
<style lang="less" scoped>
.login_container {

}
.login_box {
  //宽度
  width: 400px;
  //边距
  margin: 200px auto;
  //边框
  border: 1px solid #dcdfe6;
  //内边距
  padding: 40px;
  border-radius: 10px;
  //阴影
  box-shadow: 0 0 30px #dcdfe6;
}
.login_title {
  //居中
  text-align: center;
}
</style>