<template>
  <div class="skillsGrid">
    <iconUiux class="icon uiux" />
    <iconHtml5 class="icon html5" />
    <iconCss3 class="icon css3" />
    <iconJs class="icon js" />

    <iconSketch class="icon sketch" />
    <iconSass class="icon sass" />
    <iconVue class="icon vue" />
    <iconSvg class="icon svg" />

    <iconTerminal class="icon terminal" />
    <iconNode class="icon node" />
    <iconWebpack class="icon webpack" />
    <iconAxure class="icon axure" />
  </div>
</template>

<script>
  import iconUiux from '@/Components/Icons/Icon-uiux'
  import iconHtml5 from '@/Components/Icons/Icon-html5'
  import iconCss3 from '@/Components/Icons/Icon-css3'
  import iconJs from '@/Components/Icons/Icon-js'
  import iconSketch from '@/Components/Icons/Icon-sketch'
  import iconSass from '@/Components/Icons/Icon-sass'
  import iconVue from '@/Components/Icons/Icon-vue'
  import iconSvg from '@/Components/Icons/Icon-svg'
  import iconTerminal from '@/Components/Icons/Icon-terminal'
  import iconNode from '@/Components/Icons/Icon-node'
  import iconWebpack from '@/Components/Icons/Icon-webpack'
  import iconAxure from '@/Components/Icons/Icon-axure'
  export default {
    components: {
      iconUiux,
      iconHtml5,
      iconCss3,
      iconJs,
      iconSketch,
      iconSass,
      iconVue,
      iconSvg,
      iconTerminal,
      iconNode,
      iconWebpack,
      iconAxure
    }
  }
</script>

<style lang="scss" scoped>
  @import "./src/assets/css/_base.scss";

  .skillsGrid {
    display: grid;
    width: 100%;
    flex-wrap: wrap;
    // justify-content: stretch;
    // justify-content: space-around;
    // justify-content: space-between;
    justify-content: space-between;
    justify-items: center;
    //
    margin: .5em auto 0;
    align-items: center;
    grid-template-columns: repeat(4, minmax(auto, auto));
    grid-row-gap: 2.5em;
    grid-column-gap: 0em;
    // grid-column-gap: 1.5em;
    // background: beige;
    margin-bottom: .5em;
    transition: .25s ease-in;


    @media (min-width: 736px) and
      (max-width: 1024px)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-column-gap: 2.5em;
      grid-row-gap: 1em;
      // justify-content: stretch;
      // grid-column-gap: 0em;
      // background: lightblue;
    }

    @media (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      // justify-content: center;
      // grid-row-gap: 1.5em;
      // grid-column-gap: 0em;
      // grid-column-gap: 0em;
      // background: rgba(246, 128, 97, .5); // pale orange

    }

    @media (min-width: 414px) and (max-width: 736)
    {
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: 1.5em;
      // grid-column-gap: 0em;
      grid-row-gap: .75em;
      grid-row-gap: 1.25em;
      // background: aqua;
    }

    @media (min-width: 0px) and (max-width: 414px)
    {
      grid-template-columns: repeat(3, minmax(auto, auto));
      // grid-row-gap: 1.5em;
      // grid-column-gap: 5em;
      // background: yellow;
      grid-row-gap: .75em;
    }

    // @media (max-width: 310px)
    // {
    //   grid-template-columns: repeat(2, minmax(auto, auto));
    //   // grid-row-gap: 0.75em;
    //   // grid-column-gap: 0em;
    //   // background: orange;
    //   grid-row-gap: .75em;
    // }

    // @media (max-width: 210px)
    // {
    //   grid-template-columns: repeat(1, minmax(auto, auto));
    //   // grid-row-gap: 0.5em;
    //   // grid-column-gap: 0em;
    //   // background: red;
    // }

    .icon {
      // margin: auto;
    }
  }

</style>
