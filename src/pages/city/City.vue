<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list :hotCities='hotCities' :cities='cities' :valueChange='valueChange'></city-list>
    <city-alphabet :cities='cities' @change='handleChange'></city-alphabet>
  </div>
</template>

<script>
import axois from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      valueChange: ''
    }
  },
  mounted () {
    let that = this
    axois.get('/api/city.json').then(function (e) {
      if (e.data.ret && e.data.data) {
        let data = e.data.data
        that.cities = data.cities
        that.hotCities = data.hotCities
      }
    })
  },
  methods: {
    handleChange (e) {
      this.valueChange = e
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
