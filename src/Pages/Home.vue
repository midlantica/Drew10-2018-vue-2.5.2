<!-- /* eslint-disable indent */ -->
<template>
  <div class="innerGrid">
    <div class="contentGrid">

      <section class="sectionOne">
        <HeadAndCopy/>

        <Skills/>
      </section>

      <section class="sectionTwo">
        <CarouselShow/>
        <About/>
        <Quotes/>
      </section>

    </div>

  </div>
</template>

<script>
  import HeadAndCopy from '@/Components/HeadAndCopy'
  import CarouselShow from '@/Components/Carousel/CarouselShow'
  import About from '@/Components/About'
  import Skills from '@/Components/Skills'
  // import Quotes from '@/Components/Quotes/QuotesVueCarousel2'
  // import Quotes from '@/Components/Quotes/QuotesVueSwiper'
  // import Quotes from '@/Components/Quotes/QuotesSiema'
  // import Quotes from '@/Components/Quotes/QuotesVueAgile'
  import Quotes from '@/Components/Quotes/QuoteBasic'
  export default {
    components: {
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes
    }
  }
</script>

<style lang="scss" scoped>
  // @import "./src/assets/css/_base.scss";
</style>
