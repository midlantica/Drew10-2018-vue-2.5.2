<template>
  <div class="quotesBlock">
    <carousel class="slideCarousel"
      :perPage=1
      :navigationEnabled="false"
      :paginationEnabled="false"
      :autoplay="false"
      :autoplayTimeout="2500"
      :autoplayHoverPause="true"
      :loop="true"
      :navigationClickTargetSize="0"
    >
      <slide>
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </slide>
      <slide>
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </slide>
      <slide>
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </slide>
      <slide>
        <p>&ldquo;Design is not just what it looks like and feels like. Design is how it works&rdquo;</p>
        <cite>&ndash; Steve Jobs, 2003</cite>
      </slide>
      <slide>
        <p>&ldquo;A picture is worth a thousand words.<br> An interface is worth a thousand pictures&rdquo;</p>
        <cite>&ndash; Ben Shneiderman</cite>
      </slide>
      <slide>
        <p>&ldquo;We do not see things as they are;<br> we see things as we are&rdquo;</p>
        <cite>&ndash; The Talmud</cite>
      </slide>
      <slide>
        <p>&ldquo;Measure twice,<br> cut once"</p>
        <cite>&ndash; Unknown</cite>
      </slide>
      <slide>
        <p>&ldquo;You can use an eraser on the drafting table or a sledge hammer on the construction site.&rdquo;</p>
        <cite>Frank Lloyd Wright</cite>
      </slide>
      <slide>
        <p>&ldquo;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away&rdquo;</p>
        <cite>&ndash; Antoine de Saint-Exupery</cite>
      </slide>
      <slide>
        <p>&ldquo;Design should never say, &lsquo;Look at me.&rsquo;<br> It should always say, &lsquo;Look at this.&rsquo;</p>
        <cite>&ndash; David Craib</cite>
      </slide>
      <slide>
        <p>&ldquo;Good web design is about the character of the content, not the character of the designer.&rdquo;</p>
        <cite>&ndash; Jeffrey Zeldman</cite>
      </slide>
      <slide>
        <p>&ldquo;Good design, when it&rsquo;s done well, becomes invisible. It&rdquo;s only when it&rdquo;s done poorly that we notice it.&rdquo;</p>
        <cite>&ndash; Jared Spool</cite>
      </slide>
      <slide>
        <p>&ldquo;Good design is about effective communication,<br> not decoration at the expense of legibility.&rdquo;</p>
        <cite>&ndash; Vitaly Friedman</cite>
      </slide>
      <slide>
        <p>&ldquo;Good designers want to be proved wrong, bad designers hope to be proved right.&rdquo;</p>
        <cite>&ndash; Andy Budd</cite>
      </slide>
      <slide>
        <p>&ldquo;The ability to simplify means to eliminate the unnecessary so that the necessary may speak.&rdquo;</p>
        <cite>&ndash; Hans Hofmann</cite>
      </slide>
      <slide>
        <p>&ldquo;Simple is hard. Easy is harder. Invisible is hardest.&rdquo;</p>
        <cite>&ndash; Jean-Louis Gass&eacute;e</cite>
      </slide>
      <slide>
        <p>&ldquo;As far as the customer is concerned,<br> the interface is the product.&rdquo;</p>
        <cite>&ndash; Jef Raskin</cite>
      </slide>
      <slide>
        <p>&ldquo;A lot of what we are doing <br>is getting design out of the way.&rdquo;</p>
        <cite>&ndash; Jonathan Ive</cite>
      </slide>
      <slide>
        <p>&ldquo;The letter I have written today is longer than usual because I lacked the time to make it shorter&rdquo;</p>
        <cite>&ndash; Blaise Pascal</cite>
      </slide>
      <slide>
        <p>&ldquo;If the user can&rsquo;t use it, it doesn&rsquo;t work</p>
        <cite>&ndash; Susan Dray</cite>
      </slide>
      <slide>
        <p>&ldquo;If there&rsquo;s a &lsquo;trick&rsquo; to it, the UI is broken</p>
        <cite>&ndash; Douglas Anderson</cite>
      </slide>
      <slide>
        <p>&ldquo;Know the user, and You are not the user.&rdquo;</p>
        <cite>&ndash; Unknown</cite>
      </slide>
      <slide>
        <p>&ldquo;Usability is like oxygen, you don&rsquo;t notice it<br> until it&rdquo;s missing&rdquo;</p>
        <cite>&ndash; Unknown</cite>
      </slide>
    </carousel>
  </div>
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

  .quotesBlock {
    // width: calc(100% / 23);
  }

  .VueCarousel.slideCarousel {
    // width: initial;
    // width: 300px !important;
    // flex-basis: 300px;
    // width: calc(100%) !important;
    width: calc(100% / 3.9) !important;
    // width: calc(100% / 1);
    background: $accent-red !important;
    padding: .75em 0 1em .5em;
    @include shadow;
    // @include clearfix;

    .VueCarousel-wrapper {
      width: calc(100%) !important;
      // display: block;
      // width: 500px !important;
    }

    .VueCarousel-inner {
      width: calc(100%) !important;
      // display: block;
      // width: 500px;
      // flex-basis: 500px !important;
    }

    p {
      color: $ivory !important;
      text-align: center;
      letter-spacing: .08em;
      font-size: .7em;
      padding: 0 .5em;
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

</style>
