<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe600;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe86e;</span>
            内容
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe601;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['city'])
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
    display: flex;
    line-height: $headerHeight;
    background-color: $bgColor;
    color: #ffffff;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            position: relative;
            width: 0.44rem;
            text-align: center;
            left: 0.1rem;
            top: 0.1rem;
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
        min-width: 1.2rem;
        padding: 0.1rem;
        float: right;
        text-align: center;
        color: #ffffff;
    }
}
</style>
