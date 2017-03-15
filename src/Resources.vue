<template>
  <div id="app">
  {{ resources }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    var message = 'Here are Resources'
    this.$http.get('/resources').then(response => {message:'success'}, response => {message:'error'})
    return {
      resources: message
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
