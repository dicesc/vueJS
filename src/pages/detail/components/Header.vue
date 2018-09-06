<template>
    <div class="header">
        <router-link to="/" tag="div" class="back">
            <div class="iconfont back-icon">&#xe600;</div>
        </router-link>
        <div class="fix-back" :style="opacity">
            <p>城市选择</p>
            <router-link to="/">
                <div class="iconfont header-back">&#xe600;</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      opacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handScroll () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 40) {
        let opacity = (scrollTop - 40) / 100.0
        if (opacity <= 1) {
          this.opacity = {
            opacity: opacity
          }
        }
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;

    .back {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        background-color: rgba(0, 0, 0, 0.5);
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .back-icon {
            color: #fff;
        }
    }

    .fix-back {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: $bgColor;
        height: $headerHeight;
        line-height: $headerHeight;
        font-size: 0.32rem;
        text-align: center;
        color: #ffffff;

        .header-back {
            position: absolute;
            width: 0.64rem;
            text-align: center;
            color: #ffffff;
            top: 0;
            left: 0;
        }
    }
}
</style>
