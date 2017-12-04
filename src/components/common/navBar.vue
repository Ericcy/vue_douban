<template>
  <div class="nav">
    <el-row>
      <el-col :span="3" class="navBar"><a href="https://movie.douban.com/">豆瓣电影</a></el-col>
      <el-col :span="16">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="in_theaters">正在热映{{activeIndex}}</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="coming_soon">即将上映</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="top250">Top250</router-link></el-menu-item>
          <el-col :span="5" class="search"><el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input10">
          </el-input></el-col>
          <el-col :span="2" class="search btn"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        </el-menu>
        <div class="line"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'navBar',
    data () {
      return{
        activeIndex: '1',
        input10: ''
      }
    },

    methods: {

      handleSelect(key, keyPath) {
        //this.index = key[0];
        console.log(key[0], keyPath);
        //this.activeIndex = key[0]
//        console.log( typeof key[0])
      }
    },
  }
</script>
<style scoped>
  .nav{
    background-color: #eaeaea;
  }
  .nav .navBar a{
    display: inline-block;
    color:#ddd;
    height: 60px;
    line-height: 60px;
    font-size:20px;
    font-family:"楷书";
    font-weight:700;
  }
  .nav .el-menu-demo{
    background-color: #eaeaea;
    border-bottom:0;
  }
  .nav .search{
    line-height: 60px;
    margin-left:50px;
  }
  .nav .btn{
    margin-left:0;
  }
</style>
