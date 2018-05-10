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
    grid-gap: 1.75em;
    flex-wrap: wrap;
    justify-content: center;
    // justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(4, minmax(auto, 130px));
    // background: beige;
    // width: 100%;

    @media (max-width: 1024px) and (min-width: 710px) {
      grid-template-columns: repeat(6, minmax(auto, 130px));
      justify-content: space-between;
      // background: orange;
    }

    // @media (max-width: 964px) {
    //   grid-template-columns: repeat(4, minmax(auto, 130px));
    // }

    @media (max-width: 410px) {
      grid-template-columns: repeat(3, minmax(auto, 130px));
    }

    @media (max-width: 310px) {
      grid-template-columns: repeat(2, minmax(auto, 130px));
    }

    @media (max-width: 210px) {
      grid-template-columns: repeat(1, minmax(auto, 130px));
    }

    .icon {
      margin: auto;
      // width: 88px;
      // height: 60px;
      // background: orange;

      &.uiux {
        // grid-area: uiux;
        // background: url("../assets/img/icons/uiux.svg");
      }

      &.terminal {
        // grid-area: terminal;
        // background: url("../assets/img/icons/terminal.svg");
      }

      &.yo {
        // grid-area: yo;
        // background: url("../assets/img/icons/yeoman.svg");
      }

      &.html5 {
        // grid-area: html5;
        // background: url("../assets/img/icons/html5.svg");
      }

      &.sublime_text {
        // grid-area: sublime_text;
        // background: url("../assets/img/icons/sublime.svg");
      }

      &.javascript {
        // grid-area: javascript;
        // background: url("../assets/img/icons/javascript.svg");
      }

      &.css3 {
        // grid-area: css3;
        // background: url("../assets/img/icons/css.svg");
      }

      &.sass {
        // grid-area: sass;
        // background: url("../assets/img/icons/sass.svg");
      }

      &.axure {
        // grid-area: axure;
        // background: url("../assets/img/icons/axure.svg");
      }

      &.cs {
        // grid-area: cs;
        // background: url("../assets/img/icons/cs.svg");
      }

      &.compass {
        // grid-area: compass;
        // background: url("../assets/img/icons/compass.svg");
      }

      &.ruby {
        // grid-area: ruby;
        // background: url("../assets/img/icons/ruby.svg");
      }

      &.meteor {
        // grid-area: meteor;
        // background: url("../assets/img/icons/meteor.svg");
      }

      &.react {
        // grid-area: react;
        // background: url("../assets/img/icons/react.svg");
      }

      &.angular {
        // grid-area: angular;
        // background: url("../assets/img/icons/angular.svg");
      }

      &.svg {
        // grid-area: svg;
        // background: url("../assets/img/icons/svg.svg");
      }

      &.cs_icons {
        // grid-area: cs_icons;
        // background: url("../assets/img/icons/cs_icons.svg");
      }

      &.sketch {
        // grid-area: sketch;
        // background: url("../assets/img/icons/sketch.svg");
      }

      &.sketch {
        // grid-area: node;
        // background: url("../assets/img/icons/sketch.svg");
      }

      &.vue {
        // grid-area: vue;
        // background: url("../assets/img/icons/vue.svg");
      }

      &.webpack {
        // grid-area: webpack;
        // background: url("../assets/img/icons/webpack.svg");
      }
    }
  }

</style>
