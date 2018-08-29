<template>
  <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" v-if="showSwiper">
    <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-image" :src="item.imgUrl" /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  methods: {
    callback () { }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
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
