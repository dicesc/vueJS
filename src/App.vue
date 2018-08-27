<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input type="text" v-model="textValue" />
    <button @click="addItem">提交</button>
    <ul>
      <router-view v-for="(item,index) of lists" :content="item" :index="index" @delete="handleDelete" :key="index"/>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      textValue: '',
      lists: []
    }
  },
  methods: {
    addItem () {
      this.lists.push(this.textValue)
      this.textValue = ''
    },
    handleDelete(index){
      this.lists.splice(index,1)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
