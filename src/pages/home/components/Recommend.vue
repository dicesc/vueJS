<template>
  <div>
    <p class="recommend-title">热门推荐</p>
    <ul>
      <router-link tag="li" class="list" v-for="item in recommendList" :key="item.id" :to="'/Detail/' + item.id">
        <img class="left-img" :src="item.imgUrl" />
        <div class="content">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <button class="button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  background: #eeeeee;
  line-height: 0.6rem;
  padding-left: 0.15rem;
}

.list {
  background: #ffffff;
  display: flex;

  .left-img {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0.2rem;
  }

  .content {
    flex: 1;
    min-width: 0;

    .title {
      font-size: 0.32rem;
      color: @212121;
      line-height: 0.44rem;
      margin-top: 0.26rem;
      ellipsis();
    }

    .desc {
      font-size: 0.26rem;
      color: #cccccc;
      line-height: 0.3rem;
      margin-top: 0.1rem;
      ellipsis();
    }

    .button {
      background: #ed8f00;
      color: #fff;
      font-size: 0.26rem;
      line-height: 0.4rem;
      margin-top: 0.2rem;
      padding-left: 0.15rem;
      padding-right: 0.15rem;
      border-radius: 0.05rem;
    }
  }
}
</style>
