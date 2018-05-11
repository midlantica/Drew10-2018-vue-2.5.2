/* eslint-disable indent */
<template>
  <RouterView/>
</template>

<script>
  import RouterView from '@/Pages/RouterView'
  import Extras from '@/Pages/Extras'
  import Home from '@/Pages/Home'
  export default {
    name: 'app',
    components: {
      RouterView,
      Home,
      Extras
    }
  }
  require('@/assets/css/fonts/veneer/veneer.css')
  require('@/assets/css/fonts/American_typewriter/american_typewriter/american_typewriter.css')
  require('@/assets/css/vendor/html5Boilerplate.css')
  require('@/assets/css/vendor/normalize.css')
</script>

<style lang="scss">
  @import "./src/assets/css/_base.scss";
  // @import "./src/assets/css/_layout.scss";
  // @import "./src/assets/css/_innerGrid.scss";
  @import "./src/assets/css/_styles.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
  }
</style>
