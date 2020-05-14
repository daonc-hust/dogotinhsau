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
      <el-menu-item index="1">
        <nuxt-link to="/">Trang chủ</nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">
        <nuxt-link to="/furniture">Bàn ghế</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3">
        <nuxt-link to="/tivi-shelf">Kệ Tivi</nuxt-link>
      </el-menu-item>
      <el-menu-item index="4">
        <nuxt-link to="/tree-clock">Đồng hồ cây</nuxt-link>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">Phòng ngủ</template>
        <el-menu-item index="5-1">
          <nuxt-link to="/bedroom/bed">Giường ngủ</nuxt-link>
        </el-menu-item>
        <el-menu-item index="5-2">
          <nuxt-link to="/bedroom/wardrobe">Tủ quần áo</nuxt-link>
        </el-menu-item>
        <el-menu-item index="5-3">
          <nuxt-link to="/bedroom/makeup-table">Bàn trang điểm</nuxt-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">Đồ thờ</template>
        <el-menu-item index="6-1">
          <nuxt-link to="/worship/an-gian">Án gian</nuxt-link>
        </el-menu-item>
        <el-menu-item index="6-2">
          <nuxt-link to="/worship/sap-tho">Sập thờ</nuxt-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="7">
        <nuxt-link to="/posts">Bài viết</nuxt-link>
      </el-menu-item>
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

    .el-menu-item {
      a {
        text-decoration: none !important;
      }
    }
  }
  .el-menu--popup {
    .el-menu-item {
      a {
        text-decoration: none;
        color: #fff;
      }
      .nuxt-link-active {
        color: #ffd04b;
      }
    }
  }
</style>
