<template>
  <div>
    <div class="search">
      <input class="search-input" placeholder="请输入您要所在的城市" v-model='searchValue' />
    </div>
    <div class="search-result" v-show="searchValue.length" ref="result">
      <ul>
        <li class="result-item border-topbottom" v-for="item in resultList" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
        <li class="result-item border-topbottom" v-show="showNoData">您搜索的城市不存在</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      searchValue: '',
      resultList: []
    }
  },
  methods: {
    handleClick (city) {
      this.$store.dispatch('changeCity', city)
    }
  },
  watch: {
    searchValue (newValue) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!newValue) {
        this.resultList = []
        return
      }
      this.timer = setTimeout(() => {
        let tempArray = []
        for (let item in this.cities) {
          for (let city of this.cities[item]) {
            if (city.spell.indexOf(newValue) > -1 || city.name.indexOf(newValue) > -1) {
              tempArray.push(city)
            }
          }
        }
        this.resultList = tempArray
      }, 100)
    }
  },
  computed: {
    showNoData () {
      return !this.resultList.length && this.searchValue.length
    }
  },
  mounted () {
    let resultHtml = this.$refs.result
    this.scroll = new Bscroll(resultHtml)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  background: $bgColor;
  height: 0.72rem;
  padding: 0.1rem;

  .search-input {
    width: 100%;
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666666;
  }
}

.search-result {
  background-color: #eee;
  z-index: 3;
  position: absolute;
  overflow: hidden;
  top: 1.76rem;
  left: 0;
  right: 0;
  bottom: 0;

  .result-item {
    width: 100%;
    background-color: #ffffff;
    padding-left: 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }
}
</style>
