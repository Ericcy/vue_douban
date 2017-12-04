<template>
      <el-col :span="24" class="main">
        <el-row>
          <el-col :span="3" class="sideBar">111</el-col>
          <el-col :span="19">
            <div class="bTitle">{{title}}</div>
            <div class="theaters">
              <ul class="clearfix">
                <li v-for="item in items">
                  <a :href="getSrc(item.id)">
                    <img :src="item.images.large" alt=""/>
                    <div class="msg">
                      <div class="title">{{item.title}}</div>
                      <div>导演：<span v-for="director in item.directors">{{director.name}}</span></div>
                      <div class="cast">主演：<span v-for="(cast,i) in item.casts">{{i>=item.casts.length-1?cast.name:cast.name+"、"}}</span></div>
                      <div>年份：{{item.year}}</div>
                      <div>评分：{{item.rating.average}}</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="40">
          </el-pagination>
        </el-row>
      </el-col>
</template>

<script>
  const jsonp = require("jsonp")
  import axios from 'axios'
  import ElCol from "element-ui/packages/col/src/col";
export default {
  components: {ElCol},
  name: 'HelloWorld',
  data() {
    return {
      activeIndex: '1',
      val: 1,
      count: 10,
      items: [],
      currentPage1: 10,

      title:'',
      src:'https://movie.douban.com/subject/',
      in_th:'/?from=showing'
    };
  },

  created:function(){
    this.getData();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getSrc(id){
      var url = '';
      var str = window.location.hash;
      str = str.slice(2,str.length);
      if(str == 'in_theaters'){
        url = this.src + id + this.in_th
      }else if(str == 'coming_soon'){
        url = this.src + id
      }else{
        url = this.src + id
      }
      return  url
    },
    getData(){
      var str = window.location.hash;
      str = str.slice(2,str.length);
      if(str == 'in_theaters'){
        this.title = "正在热映";
      }else if(str == 'coming_soon'){
        this.title = "即将上映";
      }else{
        this.title = "top250";
      }
      jsonp("http://api.douban.com/v2/movie/" + str +"?start=" + this.val + "&count=" + this.count , null, (err, data) => {
        this.items = data.subjects;
        console.log(data)
      })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.val = val
      var str = window.location.hash;
      str = str.slice(2,str.length);
      jsonp("http://api.douban.com/v2/movie/" + str +"?start=" + this.val + "&count=" + this.count , null, (err, data) => {
        this.items = data.subjects;
        console.log(data)
      })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clearfix:after {
    content: '';
    clear: both;
    display: block;
    height: 0;
  }

  .clearfix {
    *zoom: 1
  }
  .main{
    background-color: #fff;
  }
  .main .sideBar{
    color:#fff;
  }
  .main .bTitle{
    text-indent:15px;
    height: 60px;
    line-height: 60px;
    font-size:20px;
    font-weight:700;
    letter-spacing:.3vw;
    font-family:'Microsoft YaHei';
    text-align:left;
    border-bottom:1px solid #ccc;
  }
  .main .theaters p{
    line-height:1;

  }
  h1, h2 {
    font-weight: normal;
  }
  .theaters ul li{
    display:inline-block;
    float: left;
    border:1px solid #ccc;
    margin:20px;
    padding:10px;
    width:25%;
    height: 525px;
  }
  .theaters ul li img{
    /*padding-top:10px;*/
    margin:0 auto;
  }
  .theaters ul li .msg{
    text-align:left;
  }
  .theaters ul li .msg div{
    margin:5px 20px;
    color:#333;
    font-size:14px;
  }
  .theaters ul li .msg .title{
    /*text-indent:48px;*/
    font-size:18px;
  }
  .theaters ul li .msg .cast{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
