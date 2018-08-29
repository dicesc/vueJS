<template>
    <div class="icons">
        <swiper class="swiper" :options='iconsOption'>
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <img class="icon-img" :src="item.imgUrl" />
                    <p class="icon-title">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsList: Array
  },
  data: function () {
    return {
      iconsOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.swiper >>> .swiper-pagination-bullet-active {
    background: #ffffff;
}

.icons {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;

    .icon {
        overflow: hidden;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        float: left;
        color: #333;
        text-align: center;

        .icon-img {
            width: 70%;
            margin-top: 0.1rem;
        }

        .icon-title {
            margin-top: 0.04rem;
            ellipsis();
        }
    }
}
</style>
