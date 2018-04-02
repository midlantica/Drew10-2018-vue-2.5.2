<template>
  <div class='skills'>
    <div class="icon uiux" title="UI/UX"></div>
    <div class="icon html5" title="html5"></div>
    <div class="icon css3" title="CSS3"></div>
    <div class="icon javascript" title="JavaScript"></div>
    <div class="icon sketch" title="Sketch"></div>
    <div class="icon sass" title="SASS"></div>
    <div class="icon vue" title="Vue.js"></div>
    <div class="icon svg" title="SVG"></div>
    <div class="icon terminal" title="Command Line"></div>
    <div class="icon npm" title="NPM"></div>
    <div class="icon webpack" title="Webpack"></div>
    <div class="icon axure" title="Axure"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import "./src/assets/css/_base.scss";

  .skills {
    display: grid;
    // grid-template-rows: repeat(1, 1fr);
    // width: 100%;
    // background: pink;
    // margin-right: 10em;

    // DEFAULT 4 COLUMNS >>>>>>>>
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'uiux      html5  css3     javascript'
      'sketch    sass   vue      svg'
      'terminal  npm    webpack  axure';
    // grid-auto-flow: row dense;
    grid-gap: 1.1em 1em;
    // grid-template-rows: auto;
    // background: pink;
    //
    // ** Align Content Horizontally **
    // justify-content: space-around;
    // justify-content: space-evenly;
    //
    // ** Align Content Vertically **
    // align-content: space-around;
    // align-content: space-between;
    //
    justify-items: center;
    align-items: center;
    // border: 1px solid pink;
    // @include clearfix;
    //

    /*
     ___       __      __   __        __
      |  |  | /  \    |__) /  \ |  | /__`
      |  |/\| \__/    |  \ \__/ |/\| .__/
    */
    @media only screen and (min-width: 660px) and (max-width: 1040px) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure';
      grid-gap: 0em 0.5em;
    }

    /*
    ___       __      __   __        __            __   __   __
     |  |  | /  \    |__) /  \ |  | /__`    __    |  \ |__) /__`
     |  |/\| \__/    |  \ \__/ |/\| .__/          |__/ |    .__/

    */
    @media only screen and (min-width: 660px) and (max-width: 1040px)
      and (-webkit-min-device-pixel-ratio: 3) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure';
      grid-gap: 0em 0.5em;
    }

    /*
    ___     __  __ __   __ __                 __
     | |__||__)|_ |_   /  /  \|  /  \|\/||\ |(_
     | |  || \ |__|__  \__\__/|__\__/|  || \|__)

    */
    @media only screen and (min-width: 385px) and (max-width: 430px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'uiux   html5   css3'
        'sketch sass    javascript'
        'vue    svg     terminal'
        'npm    webpack axure';
        grid-gap: 0em 0.5em;
        // border: 1px solid red;
    }

    /*
    ___       __      __   __                        __
     |  |  | /  \    /  ` /  \ |    |  |  |\/| |\ | /__`
     |  |/\| \__/    \__, \__/ |___ \__/  |  | | \| .__/

    */
    @media only screen
      and (min-device-width: 0px) and (max-device-width: 384px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
          'uiux   html5   css3'
          'sketch sass    javascript'
          'vue    svg     terminal'
          'npm    webpack axure';
          grid-gap: 0em 0.5em;
        // grid-gap: 0em 0.5em;
        // border: 2px solid pink;
    }

    // @media (min-width: 768px) and
    //   (-webkit-min-device-pixel-ratio: 2),
    //   (min-width: 768px) and
    //   (min-resolution: 192dpi) {
    //   //
    //   border: 1px solid magenta !important;
    // }


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPHONE 6+ DISPLAY BLOCK!!?!?
    // IPHONE 6+ DISPLAY BLOCK!!?!?
    // IPHONE 6+ DISPLAY BLOCK!!?!?
    @media only screen
    and (min-device-width : 375px) // or 213.4375em
    and (max-device-width : 667px) // or 41.6875em
    and (width : 375px) // or 23.4375em
    and (height : 559px) // or 34.9375em
    // and (orientation : portrait)
    // and (color : 8)
    // and (device-aspect-ratio : 375/667)
    // and (aspect-ratio : 375/559)
    // and (device-pixel-ratio : 2)
    // and (-webkit-min-device-pixel-ratio : 2)
    {
      // background: pink;
      border: none;
      padding-left: .5em;
      @include clearfix;
    }

    //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPAD RETINA ONLY
    // IPAD RETINA ONLY
    // IPAD RETINA ONLY
    @media
    only screen and ( min-resolution: 192dpi) and (min-width: 700px) and (max-width: 1000px),
    only screen and ( min-resolution: 2dppx)  and (min-width: 700px) and (max-width: 1000px)
    {
      border: none;
      // padding-left: .5em;
      @include clearfix;
    }

    //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPHONE 6 PLUS AND MORE...
    // IPHONE 6 PLUS AND MORE...
    // IPHONE 6 PLUS AND MORE...
    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2)
    // and (min-resolution: 192dpi)
    and (min-resolution: 144dpi)
    {
      border: none;
      // padding-left: .5em;
      // border: 1px solid red;
      @include clearfix;
    }

    //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPHONE 6 PLUS ONLYYYYY...
    // IPHONE 6 PLUS ONLYYYYY...
    // IPHONE 6 PLUS ONLYYYYY...
    @media only screen
    and (min-device-width: 376px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi)
    and (min-resolution: 144dpi)
    {
      border: none;
      // padding-left: .5em;
      // border: 1px solid lighten(green, 20);
      @include clearfix;
    }

    // >>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>
    /* Medium screen, retina, stuff to override above media query */
    @media
    only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 700px),
    only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 700px),
    only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 700px),
    only screen and (        min-device-pixel-ratio: 2)      and (min-width: 700px),
    only screen and (                min-resolution: 192dpi) and (min-width: 700px),
    only screen and (                min-resolution: 2dppx)  and (min-width: 700px)
    {
      border: none;
      // padding-left: .5em;
      // border: 1px solid lighten(green, 20);
      @include clearfix;
    }

    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation:portrait)
    and (-webkit-min-device-pixel-ratio: 1)
    {
      border: none;
      // padding-left: .5em;
      // border: 1px solid lighten(green, 20);
      @include clearfix;
    }

    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation:portrait)
    and (-webkit-min-device-pixel-ratio: 1.5)
    and (min-resolution: 144dpi)
    {
      border: none;
      // padding-left: .5em;
      // border: 1px solid lighten(red, 20);
      @include clearfix;
    }

    @media
    (-webkit-min-device-pixel-ratio: 1.25),
    (min-resolution: 120dpi){
        // border: 1px solid darken(yellow, 20) !important;
    }


    @media
    only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 768px)
    // only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 768px),
    // only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 768px),
    // only screen and (        min-device-pixel-ratio: 2)      and (min-width: 768px),
    // only screen and (                min-resolution: 192dpi) and (min-width: 768px),
    // only screen and (                min-resolution: 2dppx)  and (min-width: 768px)
    {
      // border: 1px solid darken(orange, 00) !important;

      // .icon {
      //   border: 1px dashed red;
      //   margin: 0 2em;
      // }
    }


    /* 1.3 dpr */
    @media
    (-webkit-min-device-pixel-ratio: 1.3),
    (min-resolution: 124.8dpi){
        // border: 1px solid lighten(green, 20) !important;
    }

    /* 1.5 dpr */
    @media
    (-webkit-min-device-pixel-ratio: 1.5),
    (min-resolution: 144dpi){
        // border: 1px solid lighten(blue, 20) !important;
    }

  }

  .icon {
    width: 94px;
    height: 64px;
    background-size: 94px 64px;
    background-size: cover !important;
    // border: 1px dashed DarkKhaki; // <<<<<<<<<<<<<<<<<<<

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPHONE 6+ DISPLAY BLOCK!!?!?
    // IPHONE 6+ DISPLAY BLOCK!!?!?
    // IPHONE 6+ DISPLAY BLOCK!!?!?
    @media only screen
    and (min-device-width : 375px) // or 213.4375em
    and (max-device-width : 667px) // or 41.6875em
    and (width : 375px) // or 23.4375em
    and (height : 559px) // or 34.9375em
    // and (orientation : portrait)
    // and (color : 8)
    // and (device-aspect-ratio : 375/667)
    // and (aspect-ratio : 375/559)
    // and (device-pixel-ratio : 2)
    and (-webkit-min-device-pixel-ratio : 2)
    {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 0.6em;
      // border: 1px solid red !important;
    }

    //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPAD RETINA ONLY
    // IPAD RETINA ONLY
    // IPAD RETINA ONLY
    @media
    only screen and ( min-resolution: 192dpi) and (min-width: 700px) and (max-width: 1000px),
    only screen and ( min-resolution: 2dppx)  and (min-width: 700px) and (max-width: 1000px)
    {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 0.25em !important;
      // border: 1px dashed orange !important;
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPAD RETINA ONLY LANDSCAPE
    // IPAD RETINA ONLY LANDSCAPE
    // IPAD RETINA ONLY LANDSCAPE
    @media
    only screen and ( min-resolution: 192dpi) and (min-width: 700px) and (max-width: 1000px),
    only screen and ( min-resolution: 2dppx)  and (min-width: 700px) and (max-width: 1000px)
    and (orientation : landscape)
    {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 0em !important;
      // border: 1px dashed purple !important;
    }


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPAD RETINA ONLY LANDSCAPE
    // IPAD RETINA ONLY LANDSCAPE
    // IPAD RETINA ONLY LANDSCAPE
    @media
    only screen and ( min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1000px),
    only screen and ( min-resolution: 2dppx)  and (min-width: 768px) and (max-width: 1000px)
    and (orientation : landscape)
    {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 0em !important;
      // border: 1px dashed lighten(green, 20) !important;
    }

    // >>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>
    /* Medium screen, retina, stuff to override above media query */
    @media
    only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 600px),
    only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 600px),
    only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 600px),
    only screen and (        min-device-pixel-ratio: 2)      and (min-width: 600px),
    only screen and (                min-resolution: 192dpi) and (min-width: 600px),
    only screen and (                min-resolution: 2dppx)  and (min-width: 600px)
    {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 0em;
      // border: 1px dotted lighten(green, 20) !important;
    }

    // >>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>
    /* Large screen, retina, stuff to override above media query */
    @media
    only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
    only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
    only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
    only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
    only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
    only screen and (                min-resolution: 2dppx)  and (min-width: 1300px)
    {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 0em;
      // border: 1px dashed red !important;
    }


    //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPHONE 6 PLUS ONLYYYYY...
    // IPHONE 6 PLUS ONLYYYYY...
    // IPHONE 6 PLUS ONLYYYYY...
    @media only screen
    and (min-device-width: 376px)
    and (max-device-width: 667px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi)
    and (min-resolution: 144dpi)
    {
      display: block;
      float: left;
      margin: 0;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 1.1em;
      border: none;
      // padding-left: .5em;
      // border: 1px dotted lighten(blue, 30);
      // @include clearfix;
    }


    //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // IPAD 2 iOS 9.0 ...
    // IPAD 2 iOS 9.0 ...
    // IPAD 2 iOS 9.0 ...
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (orientation:portrait)
    and (-webkit-min-device-pixel-ratio: 1)
    {
      display: block;
      float: left;
      padding: 0;
      width: 94px;
      height: 64px;
      margin: 0 0.925em;
      border: none;
      // padding-left: .5em;
      // border: 1px dotted lighten(blue, 30);
      // @include clearfix;
    }

    // >>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>
    //  iPAD PRO
    @media only screen
    // and (min-device-width: 1200px)
    // and (max-device-width: 1600px)
    and ( min-resolution: 192dpi)
    and ( min-resolution: 2dppx)
    and (min-width: 768px)
    and (max-width: 1000px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      border: 1px dashed red;
      margin: 0 10em;
    }

    // @media all and (min-device-width: $XLargeScreen)  {

    // }

    // @media all and (min-device-width: $LargeScreen)  {

    // }
    // @media all and (min-device-width: $MidScreen)  {

    // }

    // @media all and (min-device-width: $MidScreenSm)  {

    // }

    // @media all and (min-device-width: $SmallScreen)  {

    // }

    // @media all and (min-device-width: $XSmallScreen)  {

    // }

    &.uiux {
      grid-area: uiux;
      background: url("../assets/img/icons/uiux.svg");
    }

    &.terminal {
      grid-area: terminal;
      background: url("../assets/img/icons/terminal.svg");
    }

    &.yo {
      grid-area: yo;
      background: url("../assets/img/icons/yeoman.svg");
    }

    &.html5 {
      grid-area: html5;
      background: url("../assets/img/icons/html5.svg");
    }

    &.sublime_text {
      grid-area: sublime_text;
      background: url("../assets/img/icons/sublime.svg");
    }

    &.javascript {
      grid-area: javascript;
      background: url("../assets/img/icons/javascript.svg");
    }

    &.css3 {
      grid-area: css3;
      background: url("../assets/img/icons/css.svg");
    }

    &.sass {
      grid-area: sass;
      background: url("../assets/img/icons/sass.svg");
    }

    &.axure {
      grid-area: axure;
      background: url("../assets/img/icons/axure.svg");
    }

    &.cs {
      grid-area: cs;
      background: url("../assets/img/icons/cs.svg");
    }

    &.compass {
      grid-area: compass;
      background: url("../assets/img/icons/compass.svg");
    }

    &.ruby {
      grid-area: ruby;
      background: url("../assets/img/icons/ruby.svg");
    }

    &.meteor {
      grid-area: meteor;
      background: url("../assets/img/icons/meteor.svg");
    }

    &.react {
      grid-area: react;
      background: url("../assets/img/icons/react.svg");
    }

    &.angular {
      grid-area: angular;
      background: url("../assets/img/icons/angular.svg");
    }

    &.svg {
      grid-area: svg;
      background: url("../assets/img/icons/svg.svg");
    }

    &.cs_icons {
      grid-area: cs_icons;
      background: url("../assets/img/icons/cs_icons.svg");
    }

    &.sketch {
      grid-area: sketch;
      background: url("../assets/img/icons/sketch.svg");
    }

    &.vue {
      grid-area: vue;
      background: url("../assets/img/icons/vue.svg");
    }

    &.npm {
      grid-area: npm;
      background: url("../assets/img/icons/npm.svg");
    }

    &.webpack {
      grid-area: webpack;
      background: url("../assets/img/icons/webpack.svg");
    }
  }

</style>
