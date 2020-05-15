<template>
  <div class="procedure">
    <div class="step">
      <img width="80" height="80" src="https://image.flaticon.com/icons/svg/1078/1078011.svg" alt="setup" />
      <p class="name">1. Tư vấn</p>
      <p class="description">Thảo luận và đưa ra những tư vấn cụ thể về vật liệu và giá thành</p>
    </div>
    <div class="step">
      <img width="80" height="80" src="https://image.flaticon.com/icons/svg/1078/1078011.svg" alt="setup" />
      <p class="name">2. Thiết kế</p>
      <p class="description">Sang trọng và tiện nghi phù hợp với không gian nhà bạn</p>
    </div>
    <div class="step">
      <img width="80" height="80" src="https://image.flaticon.com/icons/svg/1078/1078011.svg" alt="setup" />
      <p class="name">3. Thi công</p>
      <p class="description">Triển khai và sản xuất theo đúng tiến độ đề ra</p>
    </div>
    <div class="step">
      <img width="80" height="80" src="https://image.flaticon.com/icons/svg/1078/1078011.svg" alt="setup" />
      <p class="name">4. Bàn giao</p>
      <p class="description">Lắp đặt, hoàn thiện và bàn giao sản phẩm</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Procedure',

  }
</script>

<style lang="scss">
  .procedure {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .step {
    text-align: center;
    padding: 20px;

    /*.icon-step {*/
    /*  width: 120px;*/
    /*  height: 120px;*/
    /*  border-radius: 50%;*/
    /*  :hover {*/
    /*    background: #FF5364;*/
    /*  }*/
    /*}*/

    .name {
      font-size: 24px;
      font-weight: bold;
    }

    .description {
      color: #8898aa;
    }
  }
</style>
