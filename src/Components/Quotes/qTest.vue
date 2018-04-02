<template>
  <carousel
    :perPage=1
    :navigationEnabled="false"
    :paginationEnabled="false"
    :autoplay="false"
    :autoplayTimeout="2500"
    :autoplayHoverPause="true"
    :loop="true"
    :navigationClickTargetSize="0"
    class="slideCarousel"
  >
    <slide>
      <blockquote class="quote">
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>
    <slide>
      <blockquote class="quote">
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </slide>

  </carousel>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style lang="scss" scoped>
  @import './src/assets/css/_base.scss';

  .VueCarousel.slideCarousel {
    margin-bottom: .75em;
    background: maroon;
    // width: 100% !important;
    border: 5px solid purple !important;
    display: flex;
    // @include shadow;

    .VueCarousel-inner {
      // flex-basis: 500px !important;
      //
      .VueCarousel-slide {
        // flex-basis: 500px !important;
        // background: purple;
        flex-basis: 200px !important;

        blockquote.quote {
          min-height: 5em;
          color: $ivory;
          // margin: 0em;
          display: inner;

          p {
            color: $ivory;
            padding: 1em 0em 0em;
            text-align: center;
            letter-spacing: .08em;
            font-size: .7em;
            width: 90%;
            display: inner;
            margin: 0 auto;
          }

          cite {
            color: $ivory;
            font-style: italic;
            margin: .25em 4em 0 0;
            text-align: right;
            font-size: .7em;
            letter-spacing: .08em;
            width: 90%;
            display: inner;
          }
        }
      }
    }
  }

  // .innerGrid section.sectionTwo .VueCarousel.slideCarousel .VueCarousel-wrapper .VueCarousel-inner {
  //   flex-basis: 500px !important;
  //   background: orange !important;
  //   border: 5px solid purple !important;
  // }

</style>
