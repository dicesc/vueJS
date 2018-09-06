<template>
  <div class="header">
    <detail-banner :bannerInfo="bannerInfo"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

import axois from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList

  },
  data () {
    return {
      bannerInfo: {},
      categoryList: []
    }
  },
  mounted () {
    let that = this
    axois.get('/api/detail.json').then((res) => {
      if (res.data.ret) {
        let data = res.data.data
        that.bannerInfo = data
        that.categoryList = data.categoryList
      }
    })
  }
}
</script>

<style lang='stylus' scoped>
.content {
  height: 40rem;
}
</style>
