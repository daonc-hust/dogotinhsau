<template>
  <div class="navbar-app">
    <el-menu
      default-active="1"
      class="menubar-app"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">Trang chủ</el-menu-item>
      <el-menu-item index="2">Bàn ghế</el-menu-item>
      <el-menu-item index="3">Kệ Tivi</el-menu-item>
      <el-menu-item index="4">Đồng hồ cây</el-menu-item>
      <el-submenu index="5">
        <template slot="title">Phòng ngủ</template>
        <el-menu-item index="5-1">Giường ngủ</el-menu-item>
        <el-menu-item index="5-2">Tủ quần áo</el-menu-item>
        <el-menu-item index="5-3">Bàn trang điểm</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">Đồ thờ</template>
        <el-menu-item index="6-1">Án gian</el-menu-item>
        <el-menu-item index="6-2">Sập thờ</el-menu-item>
      </el-submenu>
      <el-menu-item index="7">Bài viết</el-menu-item>
      <el-menu-item index="8"><a href="https://www.ele.me" target="_blank">Liên hệ</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    methods: {
      handleSelect() {

      }
    }
  }
</script>

<style lang="scss">
  .navbar-app {
    text-align: center;
    margin: 0 auto;
    background: #545c64;
    .menubar-app {
      margin: 0 auto;
      width: 1100px;
    }
  }
</style>
