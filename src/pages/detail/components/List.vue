<template>
    <div class="list">
        <div class="title-div" v-for="(item,idx) in categoryList" :key="idx">
            <div class="item-title border-bottom">
                <span class="ticket-img"></span> {{item.title}}
            </div>
            <div v-if="item.children" class="children">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  },
  data () {
    return {
    }
  },
  methods: {
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
    .title-div {
        .ticket-img {
            display: inline-block;
            position: relative;
            width: 0.36rem;
            height: 0.36rem;
            top: 0.08rem;
            left: 0.2rem;
            background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: 0.1rem;
            background-size: 0.4rem 3rem;
        }

        .item-title {
            line-height: 0.8rem;
            font-size: 0.32rem;
            padding: 0, 0.2rem;
        }

        .children {
            padding-left: 0.2rem;
        }
    }
}
</style>
