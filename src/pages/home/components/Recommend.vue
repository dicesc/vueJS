<template>
  <div>
    <p class="recommend-title">热门推荐</p>
    <div class="list" v-for="item in lists" :key="item.id">
      <img class="left-img" :src="item.imgUrl" />
      <div class="content">
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
        <button class="button">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      lists: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg', title: '就是这个了', desc: '这里是个很好玩的地方哦'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg', title: '重庆必游TOP10', desc: '重庆, 非去不可'},
        {id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg', title: '就是这个了', desc: '这里是个很好玩的地方哦'}
      ]
    }
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
