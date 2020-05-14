<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <el-radio v-model="radio" label="1">选择1</el-radio>
    <el-radio v-model="radio" label="2">选择2</el-radio>
  </div>
</template>

<script>
//http://localhost:25800/#/hello
export default {
  name: "hello",
  data() {
    return {
      msg: "hello vue",
      radio: "1"
    };
  }
};
</script>

<style>
.hello {
  color: red;
}
</style>