<template>
  <div class="sliderHolder">
  <!-- <no-ssr placeholder="Loading...">
    <p>This part is rendered on the client-side only</p>
  </no-ssr> -->
  <!-- <no-ssr> -->
  <!-- <code> -->
  <swiper
    :options="swiperOption"
    class="slideCarousel"
  >
    <swiper-slide>
      <blockquote>
        <p>&ldquo;The answer to life<br> is knowing when to stop&rdquo;</p>
        <cite>&ndash; My Mom, when I was a kid :)</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;If you can&rsquo;t explain it simply,<br> you don&rsquo;t understand it well enough.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </blockquote>
    </swiper-slide>
    <!-- <swiper-slide>
      <blockquote>
          <p>&ldquo;It is vain to do with more what can be done with fewer&rdquo;</p>
      </blockquote>
    </swiper-slide> -->
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;Of all of our inventions for mass communication, pictures still speak the most universally understood language.&rdquo;</p>
        <cite>&ndash; Walt Disney</cite>
      </blockquote>
    </swiper-slide> -->
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Design is not just what it looks like and feels like. Design is how it works&rdquo;</p>
        <cite>&ndash; Steve Jobs, 2003</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;A picture is worth a thousand words.<br> An interface is worth a thousand pictures&rdquo;</p>
        <cite>&ndash; Ben Shneiderman</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;We do not see things as they are;<br> we see things as we are&rdquo;</p>
        <cite>&ndash; The Talmud</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Measure twice,<br> cut once"</p>
        <cite>&ndash; Unknown</cite>
      </blockquote>
    </swiper-slide>
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;The dumbest mistake is viewing design as something you do at the end of the process to &lsquo;tidy up&rsquo; the mess, as opposed to understanding it&rdquo;s a &lsquo;day one&rsquo; issue and part of everything.&rdquo;</p>
        <cite>&ndash; Tom Peters</cite>
      </blockquote>
    </swiper-slide> -->
    <swiper-slide>
      <blockquote>
        <p>&ldquo;You can use an eraser on the drafting table or a sledge hammer on the construction site.&rdquo;</p>
        <cite>Frank Lloyd Wright</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away&rdquo;</p>
        <cite>&ndash; Antoine de Saint-Exupery</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Design should never say, &lsquo;Look at me.&rsquo;<br> It should always say, &lsquo;Look at this.&rsquo;</p>
        <cite>&ndash; David Craib</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Good web design is about the character of the content, not the character of the designer.&rdquo;</p>
        <cite>&ndash; Jeffrey Zeldman</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Good design, when it&rsquo;s done well, becomes invisible. It&rdquo;s only when it&rdquo;s done poorly that we notice it.&rdquo;</p>
        <cite>&ndash; Jared Spool</cite>
      </blockquote>
    </swiper-slide>
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;Usability is like love. You have to care, you have to listen, and you have to be willing to change. You'll make mistakes along the way, but that&rdquo;s where growth and forgiveness come in.&rdquo;</p>
        <cite>&ndash; Jeffrey Zeldman</cite>
      </blockquote>
    </swiper-slide> -->
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Good design is about effective communication,<br> not decoration at the expense of legibility.&rdquo;</p>
        <cite>&ndash; Vitaly Friedman</cite>
      </blockquote>
    </swiper-slide>
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;If we want users to like our software, we should design it to behave like a likeable person.&rdquo;</p>
        <cite>&ndash; Alan Cooper</cite>
      </blockquote>
    </swiper-slide> -->
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Good designers want to be proved wrong, bad designers hope to be proved right.&rdquo;</p>
        <cite>&ndash; Andy Budd</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;The ability to simplify means to eliminate the unnecessary so that the necessary may speak.&rdquo;</p>
        <cite>&ndash; Hans Hofmann</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Simple is hard. Easy is harder. Invisible is hardest.&rdquo;</p>
        <cite>&ndash; Jean-Louis Gass&eacute;e</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;As far as the customer is concerned,<br> the interface is the product.&rdquo;</p>
        <cite>&ndash; Jef Raskin</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;A lot of what we are doing <br>is getting design out of the way.&rdquo;</p>
        <cite>&ndash; Jonathan Ive</cite>
      </blockquote>
    </swiper-slide>
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;Don&rsquo;t make something unless it&rdquo;s both necessary and useful. But if it is both necessary and useful, don&rsquo;t hesitate to make it beautiful.&rdquo;</p>
        <cite>&ndash; Josh Porter</cite>
      </blockquote>
    </swiper-slide> -->
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.&rdquo;</p>
        <cite>&ndash; Douglas Adams</cite>
      </blockquote>
    </swiper-slide> -->
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;It&rdquo;s art if can&rsquo;t be explained.<br>
        It&rdquo;s fashion if no one asks for an explanation.<br>
      It&rdquo;s design if it doesn&rsquo;t need explanation.&rdquo;</p>
        <cite>&ndash; Wouter Stokkel</cite>
      </blockquote>
    </swiper-slide> -->
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;Simple design, intense content.&rdquo;</p>
        <cite>&ndash; Edward Tufte</cite>
      </blockquote>
    </swiper-slide> -->
    <swiper-slide>
      <blockquote>
        <p>&ldquo;The letter I have written today is longer than usual because I lacked the time to make it shorter&rdquo;</p>
        <cite>&ndash; Blaise Pascal</cite>
      </blockquote>
    </swiper-slide>
    <!-- <swiper-slide>
      <blockquote>
        <p>&ldquo;If we want users to like our software, we should design it to behave like a likeable person</p>
        <cite>&ndash; Alan Cooper</cite>
      </blockquote>
    </swiper-slide> -->
    <swiper-slide>
      <blockquote>
        <p>&ldquo;If the user can&rsquo;t use it, it doesn&rsquo;t work</p>
        <cite>&ndash; Susan Dray</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;If there&rsquo;s a &lsquo;trick&rsquo; to it, the UI is broken</p>
        <cite>&ndash; Douglas Anderson</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Know the user, and You are not the user.&rdquo;</p>
        <cite>&ndash; Unknown</cite>
      </blockquote>
    </swiper-slide>
    <swiper-slide>
      <blockquote>
        <p>&ldquo;Usability is like oxygen, you don&rsquo;t notice it<br> until it&rdquo;s missing&rdquo;</p>
        <cite>&ndash; Unknown</cite>
      </blockquote>
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carousel',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          breakpoints: {
            slidesPerView: 1,
            spaceBetween: 0,
            // when window width is <= 320px
            320: {
              slidesPerView: 1
              // spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
              slidesPerView: 1
              // spaceBetween: 10
            },
            // when window width is <= 760px
            760: {
              slidesPerView: 1
              // spaceBetween: 10
            },
            // when window width is <= 945px
            945: {
              slidesPerView: 1
              // spaceBetween: 10
            }
          },
          autoplay: {
            delay: 5000
          },
          speed: 500
          // setWrapperSize: 500,
          // width: 500
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './src/assets/css/_base.scss';

  .sliderHolder {
    display: flex;
    // display: block;
    // width: 500px !important;
    // width: 100% !important;
    // border: 1px solid red;
    // @include shadow;
  }

  .slideCarousel {
    // width: 500px !important;
    // width: 100% !important;
    // width: auto !important;
    // border: 1px solid green;
    // margin: 0 1em;

    .swiper-slide {
      // flex-basis: 100%;
      // width: 100% !important;
      // width: 100% !important;
      // flex-basis: inherit !important;
      // background: red;
      blockquote {
        // width: 500px;
        // width: 500px;
        height: 4em;
        color: $ivory;
        background: maroon;
        margin: 0;
        padding: 1em;
        // background: $accent-red !important;
        @include shadow;
        @include clearfix;

        p {
          color: $ivory !important;
          padding: 0 .5em;
          text-align: center;
          letter-spacing: .08em;
          font-size: .7em;
          min-height: 3em;
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

    }
  }


</style>
