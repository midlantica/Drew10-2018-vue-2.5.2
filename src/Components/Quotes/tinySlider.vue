<template>
  <div class="quotesWidth">
    <tiny-slider
      :mouse-drag="true"
      :loop="true"
      :items="1"
      gutter="0"
    >
      <div class="quote">Slider item #1</div>
      <div class="quote">Slider item #2</div>
      <div class="quote">Slider item #3</div>

    </tiny-slider>
  </div>
</template>

<script>
  import VueTinySlider from 'vue-tiny-slider'
  export default {
    components: {
      'tiny-slider': VueTinySlider
    }
  }
</script>

<style lang="scss" scoped>
  @import './src/assets/css/_base.scss';

  // #######################
  // #######################
  // QUOTE & slide
  .VueCarousel.slideCarousel {
    // background: $accent-red !important;
    margin: 0 1em;
    padding: .25em 1em .75em 1em;
    // display: block;
    @include shadow;
    background: $accent-red !important;

    .slide.quote {
      // height: 100px;
      display: block;
      margin: 0 1em;
      @include clearfix;
      background: $accent-red !important;

      blockquote {
        color: $ivory;
        display: block;
        margin: 0 1em;
        @include clearfix;
        background: $accent-red !important;

        p {
          padding: .75em .5em 0em .5em;
          text-align: center;
          letter-spacing: .08em;
          font-size: .7em;
        }

        cite {
          color: $ivory;
          font-style: italic;
          margin: 0 4em 0 0;
          display: block;
          text-align: right;
          font-size: .7em;
          letter-spacing: .08em;
        }
      }
    }
  }
  @import './node_modules/tiny-slider/src/tiny-slider';

  .quotesWidth {
    // width: calc(100%) !important;
    // width: 100% !important;
    margin: 0 1em !important;
    // display: block !important;
    background: purple !important;
    border: 1px red solid !important;
  }

  #tns1 {
    width: calc(100%) !important;
    .quote {
      width: calc(100%) !important;
    }
  }

  // .tns-slider {
  //   display: inline-block !important;
  //   // width: calc(100%) !important;
  //   background: azul !important;
  // }

  // .tns-controls {
  //   display: none;
  // }

  // .tns-inner {
  //   width: 100%;
  // }

  // .Carousel .Navigation {
  //   display: none;
  // }


  .quote {
    // height: 100px;
    display: block;
    // width: 100%;
    // margin: 0 1em;
    @include clearfix;
    background: $accent-red !important;

    blockquote {
      color: $ivory;
      display: block;
      margin: 0 1em;
      @include clearfix;
      background: $accent-red !important;

      p {
        padding: .75em .5em 0em .5em;
        text-align: center;
        letter-spacing: .08em;
        font-size: .7em;
      }

      cite {
        color: $ivory;
        font-style: italic;
        margin: 0 4em 0 0;
        display: block;
        text-align: right;
        font-size: .7em;
        letter-spacing: .08em;
      }
    }
  }
</style>
