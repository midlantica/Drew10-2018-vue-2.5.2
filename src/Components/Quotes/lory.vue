<template>
  <!-- <div> -->
    <lory :options="{ enableMouseEvents: true, infinite: 1 }">

      <item>
        <blockquote>
          <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
          <cite>&ndash; My Mom, when I was a kid :)</cite>
        </blockquote>
      </item>

      <item>
        <blockquote>
          <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
          <cite>&ndash; Albert Einstein</cite>
        </blockquote>
      </item>

      <item>
        <blockquote>
          <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
          <cite>&ndash; Albert Einstein</cite>
        </blockquote>
      </item>

    </lory>
  <!-- </div> -->
</template>

<script>
  import { Lory, Item, Prev, Next } from 'vue-lory'
  export default {
    components: {
      Lory,
      Item,
      Prev,
      Next
    }
  }
</script>

<style lang="scss" scoped>
  @import './src/assets/css/_base.scss';

  .slider.js_slider {
    // background: lighten(black,30);
    // width: 500px;
    // margin: 0 1em;
    color: $ivory !important;
    margin: 0 1em;
    // width: calc(23.5%);
    background: darkred !important;
    @include shadow;
    @include clearfix;

    .frame.js_frame {
      // background: navy !important;

      ul.slides.js_slides {
        // background: CornflowerBlue !important;
        color: initial;
        li.js_slide {
          // color: $ivory !important;
          // background: LightBlue !important;
          // border: green 1px solid !important;
          color: $ivory !important;
          .active {
            // color: pink !important;
          }

          blockquote {
            color: $ivory !important;
            display: block !important;
            // background: darkred !important;

            > p {
              color: $ivory !important;
              padding: .75em .5em 0em .5em;
              text-align: center;
              letter-spacing: .08em;
              font-size: .7em !important;
            }

            > cite {
              color: $ivory !important;
              font-style: italic;
              margin: 0 4em 0 0;
              display: block;
              text-align: right;
              font-size: .7em !important;
              letter-spacing: .08em;
            }

          }
        }
      }
    }
  }

</style>
