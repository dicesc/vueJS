<template>
    <div class="alphabet" @touchstart='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd'>
        <ul>
            <li class="text" v-for="key in letters" :key="key" :ref="key" @click="handleClick">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStart: false,
      lastIndex: -1
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let value in this.cities) {
        letters.push(value)
      }
      return letters
    },
    offsetTop () {
      let firstItem = this.$refs.A[0].offsetTop
      return firstItem
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStart = true
    },
    handleTouchMove (e) {
      if (this.touchStart) {
        let endY = e.touches[0].clientY - 79
        let offsetTop = this.offsetTop
        let index = Math.floor((endY - offsetTop) / 20)
        if (index >= 0 && index < this.letters.length && index !== this.lastIndex) {
          this.$emit('change', this.letters[index])
          this.lastIndex = index
        }
      }
    },
    handleTouchEnd () {
      this.touchStart = false
    }
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
    top: 1.59rem;

    .text {
        font-size: 0.3rem;
        width: 0.4rem;
        height: 0.4rem;
        text-align: center;
        color: $bgColor;
    }
}
</style>
