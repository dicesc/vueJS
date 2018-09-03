<template>
    <div class="header">
        <p>城市选择</p>
        <router-link to="/">
            <div class="iconfont header-back">&#58916;</div>
        </router-link>

    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
    background-color: $bgColor;
    height: $headerHeight;
    line-height: $headerHeight;
    font-size: 0.32rem;
    text-align: center;
    color: #ffffff;

    .header-back {
        position: absolute;
        width: 0.64rem;
        text-align: center;
        color: #ffffff;
        top: 0;
        left: 0;
    }
}
</style>
