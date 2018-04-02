<template>
  <div class="quotesBlock">
    <agile class="druAgile"
      :arrows="false"
      :dots="false"
      :autoplay="false"
      :autoplaySpeed="5000"
      :infinite="true"
      :pauseOnHover="true"
      :speed="500"
      :mobileFirst="false"
    >
      <div class="slide">
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </div>
      <div class="slide">
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </div>
      <div class="slide">
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </div>
    </agile>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import VueAgile from 'vue-agile'
  //
  // Vue.use(VueAgile)
  export default {
    VueAgile
  }
</script>

<style lang="scss">
  @import './src/assets/css/_base.scss';

  .quotesBlock {
    // width: 100%;
    width: 538px;
    // display: block;
  }

  .agile {
    // width: calc(100% / 1);
    // width: calc(100%);
    // max-width: 853px;
    // width: 476px !important;
    //background: rgb(128, 0, 0) !important;
    &.druAgile {
      color: $ivory !important;
      background: rgb(128, 0, 0) !important;
      @include clearfix;
      @include shadow;
      // width: 476px;
      // width: initial !important;
      // color: $ivory !important;
      //background: rgb(128, 0, 0) !important;
    }
    .agile__list {
      //
      .agile__track {
        // width: calc(100%) !important;
        .slide {
          padding: .5em;

          p {
            color: $ivory !important;
            padding: 0.25em 0.5em 0em;
            text-align: center;
            letter-spacing: .08em;

            font-size: .8em !important;
          }
          cite {
            color: $ivory !important;
            font-style: italic;
            margin: 0 4em 0 0;
            // display: block;
            text-align: right;
            font-size: .7em !important;
            letter-spacing: .08em;
            display: block;
          }
        }
      }
    }
  }

</style>
