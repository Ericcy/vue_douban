<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage1"
    :page-size="10"
    layout="total, prev, pager, next"
    :total="40">
  </el-pagination>
</template>
<script>
  const jsonp = require("jsonp")
  import axios from 'axios'
  export default{
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        count:10
      };
    },
    created(){
//      getData()
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.$emit('page',val)
        var str = window.location.hash;
        str = str.slice(2,str.length);
        jsonp("http://api.douban.com/v2/movie/" + str +"?start=" + val + "&count=" + this.count , null, (err, data) => {
          this.items = data.subjects;
          console.log(data)
        })
      },
//      getData(val){
//
//      }
    },

  }
</script>
<style scoped>
  .el-pagination{
    /*position: fixed;*/
    margin:10px auto 50px;
    height: 10px;
    bottom:0;
    clear:both;
  }
</style>
