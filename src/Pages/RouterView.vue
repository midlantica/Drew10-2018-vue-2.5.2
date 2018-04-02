<template>
  <div class="container">

    <header>
      <Navvy/>
    </header>

    <router-view></router-view>

    <footer>
      <Navvy/>
    </footer>

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
