<template>
    <div class="alphabet">
        <ul>
            <li class="text" v-for="(value,key) in cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.alphabet {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0rem;
    bottom: 0rem;
    top: 1.75rem;

    .text {
        font-size: 0.3rem;
        width: 0.4rem;
        text-align: center;
        padding: 0.05rem;
        color: $bgColor;
    }
}
</style>
