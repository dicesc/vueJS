<template>
    <div>
        <div class="banner">
            <div class="img-content" @click="showGallary = true">
                <img class="img" :src="bannerInfo.bannerImg" />
            </div>
            <div class="title-content">
                <div class="imgs iconfont">&#xe691; {{imgCount}}张</div>
                <div class="title">
                    <div>{{bannerInfo.sightName}}</div>
                    <span class="iconfont">视频 &#xe638;</span>
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="bannerInfo.gallaryImgs" v-show="showGallary" @close='handleGalaryClose'></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  components: {
    FadeAnimation,
    CommonGallary
  },
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    bannerInfo: Object
  },
  computed: {
    imgCount () {
      return this.bannerInfo.gallaryImgs ? this.bannerInfo.gallaryImgs.length : 0
    }
  },
  methods: {
    handleGalaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.banner {
    position: relative;

    .img-content {
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;

        .img {
            width: 100%;
        }
    }

    .title-content {
        position: absolute;
        left: 0rem;
        bottom: 0;
        right: 0rem;
        height: 1.26rem;
        padding: 0 0.2rem;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));

        .imgs {
            width: 1.2rem;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 0.2rem;
            font-size: 0.24rem;
            color: #ffffff;
        }

        .title {
            margin-top: 0.2rem;
            display: flex;
            justify-content: space-between;
            color: #ffffff;
            font-size: 0.38rem;
        }
    }
}
</style>
