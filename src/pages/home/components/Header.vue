<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#58916;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#58930;</span>
            内容
        </div>
        <div class="header-right">
            城市
            <span class="iconfont">&#58954;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
    display: flex;
    line-height: 0.86rem;
    background-color: $bgColor;
    color: #ffffff;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            font-size: 0.4rem;
            text-align: center;
        }
    }

    .header-input {
        flex: 1;
        height: 0.64rem;
        line-height: 0.64rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        background-color: #ffffff;
        border-radius: 0.1rem;
        color: #cccccc;
    }

    .header-right {
        width: 1.24rem;
        float: right;
        text-align: center;
    }
}
</style>
