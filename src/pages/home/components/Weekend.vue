<template>
    <div>
        <p class="recommend-title">周末去哪儿</p>
        <ul>
            <li class="list" v-for="item in weekendList" :key="item.id">
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
  props: {
    weekendList: Array
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
        padding-bottom: 37.09%;

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
