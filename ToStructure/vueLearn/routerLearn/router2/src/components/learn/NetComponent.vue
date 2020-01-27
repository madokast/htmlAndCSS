<template>
  <div>
    <h2>网络模块封装</h2>
    <p>2124 2235 = 1:11</p>
    <p>2341 0010 146 拦截器</p>
    <p>1354 </p>
    <button @click="ajax">axios请求</button>
  </div>
</template>

<script>
  //https://httpbin.org/
  //可以做网络请求模拟

  //http://123.207.32.32/
  //视频老师的服务器
  //http://123.207.32.32:8000/home/multidata
  //测试数据

  import axios from 'axios'

  // axios({
  //   url:'http://123.207.32.32:8000/home/multidata'
  // }).then(res=>{
  //   console.log("axios访问http://123.207.32.32:8000/home/multidata")
  //   console.log(res);
  // });

  axios.defaults.baseURL='';
  //分布式服务器

  const instance = axios.create({
    baseURL:'',
    timeout:5000
  });

  // instance.get();


  //--------------------------------------------------------------
  //拦截器


  export default {
    name: "NetComponent",
    methods:{
      ajax(){
      //   axios({
      //     url:'http://123.207.32.32:8000/home/data',
      //     method:'get',
      //     params:{
      //       type:'pop',
      //       page:1
      //     }
      //   }).then(res=>{
      //     console.log("axios访问http://123.207.32.32:8000/home/data");
      //     console.log(res);
      //   });

        axios.all([
          axios({url:'http://123.207.32.32:8000/home/multidata'}),
          axios({url:'http://123.207.32.32:8000/home/data'})
        ]).then(res=>{
          console.log(res);
        });
      }
    }
  }
</script>

<style scoped>

</style>
