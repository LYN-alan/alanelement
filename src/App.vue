<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <el-button type="primary">
    按钮
  </el-button>
  <el-button type="success">
    成功
  </el-button>
  <el-button type="danger">
    危险
  </el-button>
  <el-button>按钮</el-button>
  <el-button size="small">
    按钮
  </el-button>
  
  <Layout />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
