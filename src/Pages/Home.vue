<!-- /* eslint-disable indent */ -->
<template>
  <div class="innerGrid">
    <div class="contentGrid">

      <!-- <h1 class="headDiv dude">Duuuude</h1> -->

      <section class="sectionOne">
        <HeadAndCopy/>

        <iconUiux/>
        <iconHtml5/>
        <iconCss3/>
        <iconJs/>
        <iconSketch/>
        <iconSass/>
        <iconVue/>
        <iconSvg/>
        <iconTerminal/>
        <iconNpm/>
        <iconWebpack/>
        <iconAxure/>

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
  import iconUiux from '@/Components/Icons/icon-uiux'
  import iconHtml5 from '@/Components/Icons/icon-html5'
  import iconCss3 from '@/Components/Icons/icon-css3'
  import iconJs from '@/Components/Icons/icon-js'
  import iconSketch from '@/Components/Icons/icon-sketch'
  import iconSass from '@/Components/Icons/icon-sass'
  import iconVue from '@/Components/Icons/icon-vue'
  import iconSvg from '@/Components/Icons/icon-svg'
  import iconTerminal from '@/Components/Icons/icon-terminal'
  import iconNpm from '@/Components/Icons/icon-npm'
  import iconWebpack from '@/Components/Icons/icon-webpack'
  import iconAxure from '@/Components/Icons/icon-axure'
  export default {
    components: {
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes,
      iconUiux,
      iconHtml5,
      iconCss3,
      iconJs,
      iconSketch,
      iconSass,
      iconVue,
      iconSvg,
      iconTerminal,
      iconNpm,
      iconWebpack,
      iconAxure
    }
  }
</script>

<style lang="scss" scoped>
  // @import "./src/assets/css/_base.scss";
</style>
