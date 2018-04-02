<template>
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
    <slide :v-for="slide in slides" :key="item.id">
      <p>{{ slides.quote }}</p>
      <cite>{{ slides.att }}</cite>
    </slide>
  </carousel>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    components: {
      Carousel,
      Slide
    },
    data: function () {
      return slides
    }
  }
  const slides = [
    {
      'quote': '&ldquo;The answer to life<br> is knowing when to stop&rdquo;',
      'att': '&ndash; My Mom, when I was a kid :)'
    },
    {
      'quote': '"&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;"',
      'att': '&ndash; Albert Einstein'
    },
    {
      'quote': '"&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;"',
      'att': '&ndash; Albert Einstein'
    },
    {
      'quote': '"&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;"',
      'att': '&ndash; Albert Einstein'
    },
    {
      'quote': '"&ldquo;Design is not just what it looks like and feels like. Design is how it works&rdquo;"',
      'att': '&ndash; Steve Jobs, 2003'
    },
    {
      'quote': '"&ldquo;A picture is worth a thousand words.<br> An interface is worth a thousand pictures&rdquo;"',
      'att': '&ndash; Ben Shneiderman'
    },
    {
      'quote': '"&ldquo;We do not see things as they are;<br> we see things as we are&rdquo;"',
      'att': '&ndash; The Talmud'
    },
    {
      'quote': '"&ldquo;Measure twice,<br> cut once"',
      'att': '&ndash; Unknown'
    },
    {
      'quote': '"&ldquo;You can use an eraser on the drafting table or a sledge hammer on the construction site.&rdquo;"',
      'att': '&ndash;Frank Lloyd Wright'
    },
    {
      'quote': '"&ldquo;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away&rdquo;',
      'att': '&ndash; Antoine de Saint-Exupery'
    },
    {
      'quote': '"&ldquo;Design should never say, &lsquo;Look at me.&rsquo;<br> It should always say, &lsquo;Look at this.&rsquo;"',
      'att': '&ndash; David Craib'
    },
    {
      'quote': '"&ldquo;Good web design is about the character of the content, not the character of the designer.&rdquo;"',
      'att': '&ndash; Jeffrey Zeldman'
    },
    {
      'quote': '"&ldquo;Good design, when it&rsquo;s done well, becomes invisible. It&rdquo;s only when it&rdquo;s done poorly that we notice it.&rdquo;',
      'att': '&ndash; Jared Spool'
    },
    {
      'quote': '"&ldquo;Good design is about effective communication,<br> not decoration at the expense of legibility.&rdquo;"',
      'att': '&ndash; Vitaly Friedman'
    },
    {
      'quote': '"&ldquo;Good designers want to be proved wrong, bad designers hope to be proved right.&rdquo;"',
      'att': '&ndash; Andy Budd'
    },
    {
      'quote': '"&ldquo;The ability to simplify means to eliminate the unnecessary so that the necessary may speak.&rdquo;"',
      'att': '&ndash; Hans Hofmann'
    },
    {
      'quote': '"&ldquo;Simple is hard. Easy is harder. Invisible is hardest.&rdquo;"',
      'att': '&ndash; Jean-Louis Gass&eacute;e'
    },
    {
      'quote': '"&ldquo;As far as the customer is concerned,<br> the interface is the product.&rdquo;"',
      'att': '&ndash; Jef Raskin'
    },
    {
      'quote': '"&ldquo;A lot of what we are doing <br>is getting design out of the way.&rdquo;"',
      'att': '&ndash; Jonathan Ive'
    },
    {
      'quote': '"&ldquo;The letter I have written today is longer than usual because I lacked the time to make it shorter&rdquo;"',
      'att': '&ndash; Blaise Pascal'
    },
    {
      'quote': '"&ldquo;If the user can&rsquo;t use it, it doesn&rsquo;t work"',
      'att': '&ndash; Susan Dray'
    },
    {
      'quote': '"&ldquo;If there&rsquo;s a &lsquo;trick&rsquo; to it, the UI is broken"',
      'att': '&ndash; Douglas Anderson'
    },
    {
      'quote': '"&ldquo;Know the user, and You are not the user.&rdquo;"',
      'att': '&ndash; Unknown'
    },
    {
      'quote': '"&ldquo;Usability is like oxygen, you don&rsquo;t notice it<br> until it&rdquo;s missing&rdquo;"',
      'att': '&ndash; Unknown'
    }
  ]
</script>

<style lang="scss" scoped>
  @import './src/assets/css/_base.scss';

  .VueCarousel.slideCarousel {
    margin-bottom: .75em;
    background: $accent-red !important;
    margin: 0 1em;
    padding: .75em .5em 1em .5em;
    @include shadow;
    @include clearfix;

    p {
      color: $ivory !important;
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
      // width: 100%;
      // display: inner;
    }

  }

</style>
