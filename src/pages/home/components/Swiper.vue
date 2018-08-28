<template>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-image" :src="item.url"/></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          url:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png"
        },
        {
          id: "0002",
          url:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg"
        }
      ]
    };
  },
  methods: {
    callback() {}
  }
};
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active {
    background: #ffffff;
}

.swiper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    background-color: #eeeeee;

    .swiper-image {
        width: 100%;
        height: 31.25vw;
    }
}
</style>
