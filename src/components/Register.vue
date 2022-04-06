<template>
  <!--Shift+Alt+F 快捷键整理-->
  <div class="register_container">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="register_box"
    >
      <h3 class="title">注册</h3>
      <el-form-item label="用户名" prop="name">
        <!--v-model双向数据绑定-->
        <el-input placeholder="长度在 6 到 12 个字符" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="长度在 6 到 12 个字符" v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="phonenum">
        <el-input placeholder="请输入邮箱号" v-model="form.phonenum"></el-input>
        <button @click="getCode()" class="code-btn" :disabled="!show">
          <span v-show="show">获取验证码</span>
          <span v-show="!show" class="count">{{ count }}s</span>
        </button>
      </el-form-item>
      <el-form-item label="验证码" prop="phoneCode" class="pr">
        <el-input placeholder="邮箱验证码" v-model="form.phoneCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">注册</el-button>
        <el-button type="info" @click="reset('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        password: "",
        phonenum: "",
        verifyCode: "",
        show:true
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
      radio: 3,
    };
  },
  methods: {
    //表单提交
    submitForm(form) {
      this.$refs[form].validate(async (valid) => {
        console.log(valid);
        if (!valid) return;
        const res = await this.$http.post("login", this.form);
        console.log(res);
        if (res.data.meta.status === 200) {
          // 将登录成功后的token保存在客户端的sesstionStrage中
          // 作用就是项目中出现登录接口以外的API必须登录后才能访问，token只应在当前网站期间打开有效
          this.$message.success("注册成功");
          window.sessionStorage.setItem("token", res.data.data.token);
          this.$router.push("/home");
        } else {
          this.$message.error("注册失败");
        }
      });
    },
    //重置表单内容
    reset(form) {
      this.$refs[form].resetFields();
    },

    // 获取邮箱验证码
    getCode(tel, code) {
      
    },
  },
};
</script>

<--!scoped单范围标签-->
<style lang="less" scoped>
.register_container {
}
.register_box {
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
.title {
  //居中
  text-align: center;
}
.el-button.is-disabled,
.el-button.is-disabled:focus,
.el-button.is-disabled:hover {
  background: none;
}
</style>