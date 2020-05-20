<template>
  <div class="navbar-app">
    <el-menu
      :default-active="activePage"
      class="menubar-app"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#d5b989">
      <el-menu-item index="">
        <nuxt-link to="/">Trang chủ</nuxt-link>
      </el-menu-item>
      <el-menu-item index="furniture">
        <nuxt-link to="/furniture">Bàn ghế</nuxt-link>
      </el-menu-item>
      <el-menu-item index="tivi-shelf">
        <nuxt-link to="/tivi-shelf">Kệ Tivi</nuxt-link>
      </el-menu-item>
      <el-menu-item index="tree-clock">
        <nuxt-link to="/tree-clock">Đồng hồ cây</nuxt-link>
      </el-menu-item>
      <el-submenu index="bedroom">
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
      <el-submenu index="worship">
        <template slot="title">Đồ thờ</template>
        <el-menu-item index="6-1">
          <nuxt-link to="/worship/an-gian">Án gian</nuxt-link>
        </el-menu-item>
        <el-menu-item index="6-2">
          <nuxt-link to="/worship/sap-tho">Sập thờ</nuxt-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="posts">
        <nuxt-link to="/posts">Bài viết</nuxt-link>
      </el-menu-item>
      <el-menu-item index="contact">
        <nuxt-link to="/contact">Liên hệ</nuxt-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    computed: {
      activePage() {
        const pathSplit = this.$route.fullPath.split('/')
        const idMenuActive = pathSplit[1]
        return idMenuActive
      }
    },
    methods: {
      handleSelect() {

      }
    }
  }
</script>

<style lang="scss">
  .el-menu-item {
    a {
      text-decoration: none !important;
      display: block;
    }
  }

  .navbar-app {
    text-align: center;
    margin: 0 auto;
    background: #545c64;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: .5s;
  }

  @media screen and (max-width: 767px){
    .navbar-app {
      display: none;
    }
  }

  @media screen and (min-width: 1200px){
    .navbar-app {
      text-align: center;
      margin: 0 auto;
      background: #545c64;
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: .5s;

      /*@media screen and (min-width: 1200px){*/
        .menubar-app {
          margin: 0 auto;
          width: 800px;
        }
      /*}*/
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
