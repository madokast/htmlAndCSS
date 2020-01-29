<template>
  <div>
    <button @click="getList">获取员工列表</button>
    <button @click="emptyList">清空员工列表</button>
    <br>
    <button @click="addEmp">添加员工</button>
    <button @click="updateEmp">修改员工</button>
    <input type="text" v-model="id">
    <input type="text" v-model="name">
    <br>
    <button @click="getEmp">获取员工</button>
    <button @click="delEmp">删除员工</button>
    <input type="text" v-model="id">

    <hr/>
    <table>
      <thead>
      <td>id</td>
      <td>name</td>
      </thead>
      <tr v-for="e in emps">
        <td>{{e.id}}</td>
        <td>{{e.name}}</td>
      </tr>
    </table>
    <p>{{message}}</p>
  </div>
</template>

<script>
  import {request} from "../../network/request";

  export default {
    name: "SpringbootTest",
    data(){
      return{
        emps:[],
        message:"新页面",
        id:0,
        name:'请输入姓名'
      };
    },
    methods:{
      getList(){
        this.message="正在发送请求";
        request({
          url:'http://localhost:8079/emps',
          // method:'get'
        }).then(res=>{
          console.log(res);
          this.emps = res.data;
          this.message="拿到请求";
        }).catch(err=>{
          this.message="请求失败";
        })
      },
      emptyList(){
        this.emps=[];
        this.message='删除了员工列表';
      },
      addEmp(){
        const newEmp = {id:this.id,name:this.name};
        this.message="正在添加员工" + newEmp;
        request({
          url:'http://localhost:8079/emp',
          method:'post',
          data:newEmp
        }).then(res=>{
          console.log(res.data);
          this.message=res.data;
        }).catch(err=>{
          this.message="请求失败";
        })
      },
      getEmp(){
        request({
          url:'http://localhost:8079/emp/' + this.id,
          method: 'get'
        }).then(res=>{
          this.message = "员工信息为{"+ res.data.id + "," + res.data.name + "]";
        }).catch(err=>console.log(err))
      },
      updateEmp(){
        const emp = {
          id:this.id,
          name:this.name
        };
        console.log(emp);
        request({
          url:'http://localhost:8079/emp/',
          method:'put',
          data:emp
        }).then(res=>{
          this.message="旧员工信息为{"+ res.data.id + "," + res.data.name + "]";
        }).catch(err=>console.log(err))
      },
      delEmp(){
        request({
          url:'http://localhost:8079/emp/' + this.id,
          method:'delete'
        }).then(res=>{
          this.message = "被删除的员工信息为{"+ res.data.id + "," + res.data.name + "]";
        }).catch(err=>console.log(err));
      }
    }
  }
</script>

<style scoped>

</style>
