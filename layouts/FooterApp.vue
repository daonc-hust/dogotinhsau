<template>
  <div class="footer-app">
    <div class="categories">
      <div class="category contact">
        <h3>Liên hệ</h3>
        <p><i class="el-icon-phone"></i>0364279276 | 0963922451</p>
        <p><i class="el-icon-location"></i>Số 1, đường Phúc Lợi, thôn 3 xã Canh Nậu, huyện Thạch Thất, thành phố Hà Nội
        </p>
        <p><i class="el-icon-bank-card"></i>Tài khoản Vietcombank <span>0451000411974</span> <br /> NGUYEN CONG DUNG -
          Chi nhánh Thành Công</p>
      </div>
      <div class="category post-recent">
        <h3>Bài viết gần đây</h3>
        <div class="box-post" v-for="(post, idx) in posts" :key="idx">
          <img :src="post.imageSrc" :alt="post.title">
          <nuxt-link :to="post.href">{{ post.title }}</nuxt-link>
        </div>
      </div>
      <div class="category facebook-link">
        <h3>Facebook</h3>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%C4%90%E1%BB%93-G%E1%BB%97-T%C3%ACnh-S%C3%A1u-1689613371096403%2F&tabs=timeline&width=340&height=210&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2131814083765058" width="340" height="210" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
    <div class="footer-line">Bản quyền 2020
      <nuxt-link to="/">dogotinhsau.com</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterApp',
    data() {
      return {
        posts: [
          {
            title: 'Báo giá sập thờ gỗ mít, gỗ gụ năm 2020',
            imageSrc: 'https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
            href: '/',
            date: 3,
            month: 5
          },
          {
            title: 'Kích thước bộ bàn ghế tay 10',
            imageSrc: 'https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
            href: '/',
          },
          {
            title: 'Làng nghề mộc Canh Nậu, bạn có biết?',
            imageSrc: 'https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
            href: '/',
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .footer-app {
    padding-top: 20px;
  }

  @media screen and (min-width: 1200px){
    .categories {
      width: 1200px;
      margin: 0 auto;
    }
  }

  .categories {
    display: flex;
    justify-content: center;
    /*width: 1200px;*/
    /*margin: 0 auto;*/
  }

  .category {
    flex: 1;
    position: relative;
    padding: 12px;

    p {
      line-height: 2rem;
    }

    span {
      font-weight: 600;
      color: #FF5364;
    }

    i {
      /*color: #fff;*/
      margin-right: 10px;
      font-size: 24px;
      vertical-align: middle;
    }

    .box-post {
      display: flex;
      padding: 12px;
      img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        color: cornflowerblue;
        word-break: break-word;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    h3 {
      margin-bottom: 20px;
      color: #35495e;

      &:after {
        content: '';
        width: 50px;
        height: 3px;
        background: #526488;
        position: absolute;
        top: 40px;
        left: 12px;
      }
    }
  }

  .footer-line {
    font-size: 13px;
    text-align: center;

    a {
      color: cornflowerblue;
      text-decoration: underline;
    }
  }
</style>
