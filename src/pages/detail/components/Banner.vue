<template>
    <div>
        <div class="banner">
            <div class="img-content" @click="showGallary = true">
                <img class="img" src="http://img1.qunarzz.com/sight/p0/201305/08/8638c7dbd656cafac8d65eac.jpg_600x330_af87cf27.jpg" />
            </div>
            <div class="title-content">
                <div class="imgs iconfont">&#xe691; 24张</div>
                <div class="title">
                    <div>黑山谷(AAAAA景区)</div>
                    <span class="iconfont">视频 &#xe638;</span>
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close='handleGalaryClose'></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1708/ef/ef538bb8d9911483a3.img.jpg_600x330_c3a0d8fa.jpg', 'http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_600x330_f7a62e65.jpg']
    }
  },
  computed: {

  },
  methods: {
    handleGalaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
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
