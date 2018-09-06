<template>
    <div class="gallary" @click="handleGallaryClick">
        <div class="img-content">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallary >>> .swiper-container {
    overflow: inherit;
}

.gallary {
    position: absolute;
    background-color: #000000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .img-content {
        width: 100%;
        height: 0;
        padding-bottom: 100%;

        .img {
            width: 100%;
        }

        .swiper-pagination {
            color: #ffffff;
            bottom: -2rem;
        }
    }
}
</style>
