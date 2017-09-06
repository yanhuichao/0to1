<template>
  <div class="app">
    <div class="pure-g">
      <div class="sidebar pure-u-1 pure-u-sm-1-4">
          <blogHeader></blogHeader>
          <blogSideBar></blogSideBar>
        </div>
        <div class="content pure-u-1 pure-u-sm-3-4">
          <blogContent></blogContent>
          <blogFooter></blogFooter>
        </div>
    </div>
  </div>
</template>

<script>
import blogHeader from './components/Header.vue'
import blogSideBar from './components/SideBar.vue'
import blogContent from './components/Content.vue'
import blogFooter from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: '一个萝卜一个坑'
    }
  },
  components: {
    blogHeader,
    blogSideBar,
    blogContent,
    blogFooter
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  align-content: center;
}

@media (min-width: 48em) {
    .content {
        padding: 2em 3em 0;
        margin-left: 22.5%;
    }

    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0%;
    }

    .header {
        margin: 80% 2em 0;
        text-align: right;
    }

    .footer {
        text-align: center;
    }
}

</style>
