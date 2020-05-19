<template>
  <div class="home-page">
    <carousel />
    <div class="main">
      <div class="story">
        <div class="content-story">
          <h3>Làng nghề truyền thống xã <span>Canh Nậu</span> huyện Thạch Thất</h3>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eum, nihil odit placeat quo rem sit. Dicta
            fugiat itaque laboriosam maxime nam obcaecati odit soluta tenetur ut velit. A, delectus.</p>
        </div>
        <div class="video-intro">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z74iZmylGm4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <section class="section-product-list">
        <divider title="Nội thất phòng khách" />
        <product-section title="Bàn ghế phòng khách" href="/furniture" :product-list="furnitures">
          <slot slot="description">
            <div class="description">
              <span>Đồ gỗ Tình Sáu</span> xin giới thiệu đến các bạn những mẫu bàn ghế phòng khách
              <span>gỗ tự nhiên</span> đẹp, độc đáo và đẳng cấp nhất. Chắc chắn sẽ giúp phòng khách nhà bạn toát lên vẻ
              sang trọng và quý phái
            </div>
          </slot>
        </product-section>
        <product-section title="Kệ tivi" href="/tivi-shelf" :product-list="tvShelves">
          <slot slot="description">
            <div class="description">
              <span>Đồ gỗ Tình Sáu</span> chuyên sản xuất các loại kệ tivi
              <span>gỗ tự nhiên</span> với đa dạng mẫu mã, kích thướng cùng với kiểu dáng bắt mắt giúp tôn lên vẻ đẹp
              cho phòng khách căn nhà bạn.
            </div>
          </slot>
        </product-section>
        <product-section title="Đồng hồ cây" href="/tree-clock" :product-list="tvShelves" />
      </section>

      <section class="section-product-list">
        <divider title="Nội thất phòng thờ" />
      </section>

      <section class="section-product-list">
        <divider title="Nội thất phòng bếp" />
      </section>

      <section class="section-product-list">
        <divider title="Nội thất phòng ngủ" />
      </section>

      <section class="section-product-list">
        <divider title="Quy trình của chúng tôi" />
        <procedure />
      </section>

      <section class="section-product-list">
        <divider title="Cảm nhận của khách hàng" />
        <feedback />
      </section>

      <section class="section-product-list">
        <divider title="Tin tức" />
        <div class="post-list">
          <post v-for="(post, idx) in posts" :key="idx" :title="post.title" :image-src="post.imageSrc" :date="post.date" :month="post.month" />
        </div>
      </section>
    </div>
    <footer-app />
  </div>
</template>

<script>
  import Carousel from '../../components/Carousel'
  import Divider from '../../components/Divider'
  import ProductSection from '../../components/ProductSection'
  import Procedure from '../../components/Procedure'
  import Feedback from '../../components/Feedback'
  import Post from '../../components/Post'
  import FooterApp from '../../layouts/FooterApp'

  export default {
    name: 'HomePage',
    components: {
      FooterApp,
      Post,
      Feedback,
      Procedure,
      ProductSection,
      Divider,
      Carousel
    },
    data() {
      return {
        posts: [
          {
            title: 'Báo giá sập thờ gỗ mít, gỗ gụ năm 2020',
            date: 3,
            month: 5
          },
          {
            title: 'Kích thước bộ bàn ghế tay 10'
          },
          {
            title: 'Làng nghề mộc Canh Nậu, bạn có biết?'
          }
        ],
        furnitures: [
          {
            name: 'Tay 12 huong da',
            price: '26.000.000'
          },
          {
            name: 'Tay 12 huong da',
            price: '26.000.000'
          },
          {
            name: 'Tay 12 huong da',
            price: '26.000.000'
          },
          {
            name: 'Tay 12 huong da',
            price: '26.000.000'
          }
        ],
        tvShelves: [
          {
            name: 'Ke cot nho',
            price: '26.000.000'
          },
          {
            name: 'Ke cot nho',
            price: '26.000.000'
          },
          {
            name: 'Ke cot nho',
            price: '26.000.000'
          },
          {
            name: 'Ke cot nho',
            price: '26.000.000'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .main {
    width: 1200px;
    margin: 0 auto;
  }

  .section-product-list {
    margin-top: 28px;
  }

  .story {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 1200px;
    margin: 0 auto;
    height: 400px;

    .content-story, .video-intro {
      flex: 1;
      padding: 10px;
    }

    .content-story {
      h3 {
        font-size: 40px;
        word-break: break-word;
        color: #35495e;
        span {
          color: #C4956A;
        }
      }
    }
  }

  .post-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
