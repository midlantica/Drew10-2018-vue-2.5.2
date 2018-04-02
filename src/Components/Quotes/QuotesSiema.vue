<template>
  <div class="slider">
    <Siema :slides="slides"></Siema>
  </div>
</template>

<script>
  import Siema from 'vue-siema'
  export default {
    name: 'hello',
    components: {
      Siema
    },
    data () {
      return {
        sliderIndex: 2,
        slides: [ // ⚠️️ Warning: vue-siema uses internal v-html be sure to sanitize!
          `<div class="slide">
              <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
              <cite>&ndash; My Mom, when I was a kid :)</cite>
            </div>`,
          `<div class="slide">
              <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
              <cite>&ndash; My Mom, when I was a kid :)</cite>
            </div>`,
          `<div class="slide">
              <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
              <cite>&ndash; My Mom, when I was a kid :)</cite>
          </div>`,
          `<div class="slide">
              <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
              <cite>&ndash; My Mom, when I was a kid :)</cite>
          </div>`
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./src/assets/css/_base.scss";

  .slider {
    color: $ivory !important;
    background: $accent-red !important;
    // width: 100%;

    .siema {
      // color: $ivory !important;
      // background: $accent-red !important;
      // font-size: 2em;
      // border: 5px solid purple;

      .inner-siema {
        color: $ivory !important;
        width: 100% !important;

        .siema-slide {
          color: $ivory !important;
          background: $accent-red !important;
          height: 100px;
          color: $ivory !important;
          background: $accent-red;
          margin: 0 1em;
          @include shadow;
          @include clearfix;


        }
      }
    }
  }

  .slider.slide {
    color: $ivory !important;
    background: $accent-red !important;
    // margin: 0 1em;
    @include shadow;
    @include clearfix;

    p {
      color: $ivory !important;
      // padding: .75em .5em 0em .5em;
      // text-align: center;
      // letter-spacing: .08em;
      // font-size: .7em;
      // width: 100%;
      // display: inner;
    }

    cite {
      color: $ivory;
      font-style: italic;
      margin: 0 4em 0 0;
      display: block;
      text-align: right;
      font-size: .7em;
      letter-spacing: .08em;
      // width: 100%;
      // display: inner;
    }

  }

  .slider > .siema > .inner-siema > .siema-slide {
    color: $ivory !important;
    border: 10px solid red;
    background: $accent-red !important;
  }

</style>
