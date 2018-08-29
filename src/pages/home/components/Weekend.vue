<template>
    <div>
        <p class="recommend-title">周末去哪儿</p>
        <ul>
            <li class="list" v-for="item in lists" :key="item.id">
                <div class="top-img-wapper">
                    <img class="top-img" :src="item.imgUrl" />
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      lists: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg', title: '就是这个了', desc: '这里是个很好玩的地方哦'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg', title: '重庆必游TOP10', desc: '重庆, 非去不可'},
        {id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg', title: '就是这个了', desc: '这里是个很好玩的地方哦'},
        {id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/source/1507/8e/f41005646c1e8e.jpg_r_640x214_65f25f65.jpg', title: '就是这个了', desc: '这里是个很好玩的地方哦'},
        {id: '0005', imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/08/8638c7dbd656cafac8d65eac.jpg_600x330_af87cf27.jpg', title: '就是这个了', desc: '这里是个很好玩的地方哦'}
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

    .top-img-wapper {
        height: 0;
        overflow: hidden;
        padding-bottom: 33.9%;

        .top-img {
            width: 100%;
        }
    }

    .content {
        padding: 0.1rem;

        .title {
            font-size: 0.32rem;
            color: @212121;
            line-height: 0.44rem;
            margin-top: 0.1rem;
            ellipsis();
        }

        .desc {
            font-size: 0.26rem;
            color: #cccccc;
            line-height: 0.4rem;
            margin-top: 0.1rem;
            ellipsis();
        }
    }
}
</style>
