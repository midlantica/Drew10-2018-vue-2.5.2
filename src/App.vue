<!-- /* eslint-disable indent */ -->
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
</script>

<style lang="scss">
  @import '../static/fonts/veneer/veneer.css';
  @import '../static/fonts/American_typewriter/american_typewriter/american_typewriter.css';
  // @import './src/assets/css/vendor/html5Boilerplate.css';
  // @import './src/assets/css/vendor/normalize.css';
  //
  @import './assets/css/_base.scss';
  @import './assets/css/_styles.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
  }
</style>
