<template>
  <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-image" :src="item.url" /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [
        { id: '0001', url: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png' },
        { id: '0002', url: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg' },
        { id: '0003', url: 'http://img1.qunarzz.com/piao/fusion/1808/75/f8fb10ac96bb7502.jpg_750x200_573f9de3.jpg' },
        { id: '0004', url: 'http://img1.qunarzz.com/piao/fusion/1808/b0/a123fba6d7e3dd02.jpg_750x200_1425741a.jpg' },
        { id: '0005', url: 'http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg' }
      ]
    }
  },
  methods: {
    callback () { }
  }
}
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
