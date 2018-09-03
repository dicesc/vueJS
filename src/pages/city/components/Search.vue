<template>
    <div class="search">
        <input class="search-input" placeholder="请输入您要所在的城市" />
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
