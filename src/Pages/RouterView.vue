<template>
  <div class="grid">

    <div></div>

    <main>

      <header>
        <Navvy/>
      </header>

      <router-view></router-view>

      <footer>
        <Navvy/>
      </footer>

    </main>

    <div></div>

  </div>
</template>

<script>
  // import '../assets/js/javascripts.js'
  import Navvy from '@/Components/Navvy'
  export default {
    components: {
      Navvy
    }
  }
</script>

<style lang="scss" scoped>
  @import "./src/assets/css/_base.scss";

  .grid {
    display: grid;
    // COLUMNS ||  ||  ||
    grid-template-columns:
      minmax(0, 1fr) repeat(1, minmax(auto, 1024px)) minmax(0, 1fr);
    grid-gap: 0em;
    // @include shadow;

    > main {
      display: grid;
      // ROWS
      grid-template-rows: 1fr auto 1fr;
      background: white; // ivory
      @include shadow;

      header,
      footer {
        // background-color: #aaa;
        // padding: 1em;
      }
    }
  }

</style>
