<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="current-list">
                    <div class="wrap-button">
                        <div class="button">
                            北京
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="current-list">
                    <div class="wrap-button" v-for="item in hotCities" :key="item.id">
                        <div class="button">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(value,key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item-cell" v-for="item in value" :key="item.id">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    valueChange: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    valueChange: function (newValue, oldValue) {
      if (newValue) {
        let el = this.$refs[newValue][0]
        this.scroll.scrollToElement(el)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
    &:before {
        border-color: #cccccc;
    }

    &:after {
        border-color: #cccccc;
    }
}

.list {
    background-color: #ffffff;
    overflow: hidden;
    position: absolute;
    top: 1.75rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;

    .title {
        line-height: 0.54rem;
        height: 0.54rem;
        background: #eeeeee;
        padding-left: 0.2rem;
        color: #666666;
        font-size: 0.26rem;
    }

    .current-list {
        padding: 0.1rem;
        overflow: hidden;
        width: 90%;

        .wrap-button {
            float: left;
            width: 33.33%;
        }

        .button {
            margin: 0.1rem;
            padding: 0.1rem;
            text-align: center;
            border: 0.01rem solid #eeeeee;
            border-radius: 0.1rem;
        }
    }

    .item-list {
        .item-cell {
            padding-left: 0.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            border-bottom: 0.02rem solid #cccccc;
        }
    }
}
</style>
