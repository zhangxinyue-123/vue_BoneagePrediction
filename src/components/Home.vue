<template>
  <el-container
    class="home_content"
    style="height: 500px; border: 1px solid #eee"
  >
    <el-header style="text-align: right; font-size: 12px">
      <span style="font-size:20px " >欢迎登陆骨龄预测后台系统</span>
      <div>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item></el-dropdown-item>
            <el-dropdown-item
              ><el-button v-on:click="loginout" type="info"
                >退出登录</el-button
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-user"></i>用户管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/memberdoc">医生管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/memberuser">用户管理</router-link>
              </el-menu-item>
            </el-menu-item-group>

            <!-- <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-document-add"></i>药品管理</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>科室管理</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main> 
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "...",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  methods: {
    loginout: function () {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    getMenuList: async function () {
      const res = await this.$http.get("menus");
      console.log(res);
      if (res.data.meta.status !== 200) {
        this.$message.error(res.data.meta);
      } else {
        this.menulist = res.data.data;
      }
    },
  },
  created: function () {
    this.getMenuList();
  },
};
</script>

<style lang="less" scoped>
.home_content {
  height: 80%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  position: relative;
  margin-top: 80%;
}
.el-aside {
  color: #333;
}
</style>
