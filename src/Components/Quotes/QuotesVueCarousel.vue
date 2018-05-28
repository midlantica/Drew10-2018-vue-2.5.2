<template>
  <carousel class="slideCarousel"
    :perPage=1
    :navigationEnabled="true"
    :paginationEnabled="false"
    :autoplay="false"
    :autoplayTimeout="2500"
    :autoplayHoverPause="true"
    :loop="true"
    :navigationClickTargetSize="0"
    navigationNextLabel="<div class='navvy rightnav'>▶︎</div>"
    navigationPrevLabel="<div class='navvy leftnav'>◀︎</div>"
  >
    <slide
      v-for="(quote, index) in quotes"
      v-bind:quote="quote"
      v-bind:index="index"
      v-bind:key="quote.id"
    >
      <p>{{ quote.quote }}</p>
      <cite>{{ quote.att }}</cite>
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
    data () {
      return {
        quotes: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.quotes = [
          {
            'quote': '"The answer to life is knowing when to stop"',
            'att': '– My Mom, when I was a kid :)'
          },
          {
            'quote': '"If you can\'t explain it simply, you don\'t understand it well enough."',
            'att': '– Albert Einstein'
          },
          {
            'quote': '"If you can\'t explain it simply, you don\'t understand it well enough."',
            'att': '– Albert Einstein'
          },
          {
            'quote': '"Everything should be made as simple as possible, but not simpler."',
            'att': '– Albert Einstein'
          },
          {
            'quote': '"Design is not just what it looks like and feels like. Design is how it works"',
            'att': '– Steve Jobs, 2003'
          },
          {
            'quote': '"A picture is worth a thousand words. An interface is worth a thousand pictures"',
            'att': '– Ben Shneiderman'
          },
          {
            'quote': '"We do not see things as they are; we see things as we are"',
            'att': '– The Talmud'
          },
          {
            'quote': '"Measure twice, cut once"',
            'att': '– Unknown'
          },
          {
            'quote': '"You can use an eraser on the drafting table or a sledge hammer on the construction site."',
            'att': '–Frank Lloyd Wright'
          },
          {
            'quote': '"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away',
            'att': '– Antoine de Saint-Exupery'
          },
          {
            'quote': '"Design should never say, &lsquo;Look at me.\' It should always say, &lsquo;Look at this.\'"',
            'att': '– David Craib'
          },
          {
            'quote': '"Good web design is about the character of the content, not the character of the designer."',
            'att': '– Jeffrey Zeldman'
          },
          {
            'quote': '"Good design, when it\'s done well, becomes invisible. It\'s only when it\'s done poorly that we notice it.',
            'att': '– Jared Spool'
          },
          {
            'quote': '"Good design is about effective communication, not decoration at the expense of legibility."',
            'att': '– Vitaly Friedman'
          },
          {
            'quote': '"Good designers want to be proved wrong, bad designers hope to be proved right."',
            'att': '– Andy Budd'
          },
          {
            'quote': '"The ability to simplify means to eliminate the unnecessary so that the necessary may speak."',
            'att': '– Hans Hofmann'
          },
          {
            'quote': '"Simple is hard. Easy is harder. Invisible is hardest."',
            'att': '– Jean-Louis Gasse'
          },
          {
            'quote': '"As far as the customer is concerned, the interface is the product."',
            'att': '– Jef Raskin'
          },
          {
            'quote': '"A lot of what we are doing <br>is getting design out of the way."',
            'att': '– Jonathan Ive'
          },
          {
            'quote': '"The letter I have written today is longer than usual because I lacked the time to make it shorter"',
            'att': '– Blaise Pascal'
          },
          {
            'quote': '"If the user can\'t use it, it doesn\'t work"',
            'att': '– Susan Dray'
          },
          {
            'quote': '"If there\'s a \'trick\' to it, the UI is broken"',
            'att': '– Douglas Anderson'
          },
          {
            'quote': '"Know the user, and You are not the user."',
            'att': '– Unknown'
          },
          {
            'quote': '"Usability is like oxygen, you don\'t notice it until it\'s missing"',
            'att': '– Unknown'
          }
        ]
      }, 1000)
    }
  }
</script>

<style lang="scss">
  @import './src/assets/css/_base.scss';

  .VueCarousel.slideCarousel {
    background: $accent-red !important;
    margin: .75em 0 .5em !important;
    padding: 1em 3em 1em;
    // width: calc(400px);
    @include shadow;
    @include clearfix;

    .VueCarousel-wrapper {
      //
      .VueCarousel-inner {
        // flex-basis: 500px;
        // width: calc(100%);

        p {
          font-size: .85em !important;
          color: $ivory !important;
          text-align: center;
          letter-spacing: .08em;
          font-size: .7em;
          letter-spacing: -0.002em;
        }

        cite {
          font-size: .75em;
          color: $ivory;
          font-style: italic;
          margin: 0 4em 0 0;
          display: block;
          text-align: right;
          letter-spacing: .08em;
          // width: 100%;
          // display: inner;
        }
      }

    }


  }

  .VueCarousel-navigation button.VueCarousel-navigation-button.VueCarousel-navigation-next,
  .VueCarousel-navigation button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
    //
    > .navvy {
      font-size: 1.5em;
      cursor: pointer;
      color: rgba(254, 254, 254, .25);
      // -webkit-text-stroke: 1px rgba(254, 254, 254, .25);
      // text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
      // background: red !important;
      &:hover {
        color: rgba(254, 254, 254, .5);
        // text-shadow: 1px 1px 2px rgba(0, 0, 0, .85);
        // background: $blue-dark;
      }
      &.leftnav {
        transform: translateY(0%) translateX(150%);
      }
      &.rightnav {
        transform: translateY(0%) translateX(-150%);
      }

    }
  }

</style>
