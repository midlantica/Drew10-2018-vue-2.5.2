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

    // DEFAULT 4 COLUMNS >>>>>>>>
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'uiux      html5  css3     javascript'
      'sketch    sass   vue      svg'
      'terminal  npm    webpack  axure';
    // grid-auto-flow: row dense;
    justify-items: center;
    align-items: stretch;
    grid-gap: 1.5em 0em;
    // border: 0 !important;
    // border: 1px solid pink;
    // @include clearfix;

    // ##################################################
    /* ----------- Laptop / Desktop  ----------- */

    @media screen
      and (min-width: 650px)
      and (max-width: 1040px)
      // and (-webkit-min-device-pixel-ratio: 1)
    {
      //
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure'  !important;
      grid-gap: 0em 0em;
      // background: red;
    }

    // @media only screen
    //   and (min-device-width: 936px)
    //   and (max-device-width: 516px)
    //   and (-webkit-min-device-pixel-ratio: 2)
    //   and (min-resolution: 192dpi)
    // {
    //   //
    //   background: red !important;
    // }

    // ##################################################
    /* ----------- iPhone 4 and 4S ----------- */

    @media only screen
      and (min-device-width: 0px) // ZEROOOOO
      and (max-device-width: 479px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      // ZEROOO WIDTH
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'uiux     html5'
        'css3     sketch'
        'sass     javascript'
        'vue      svg'
        'terminal npm'
        'webpack  axure';
        grid-gap: 0em 0em;
        // background: blue;
    }

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'uiux     html5'
        'css3     sketch'
        'sass     javascript'
        'vue      svg'
        'terminal npm'
        'webpack  axure';
      grid-gap: 0em 0em;
      justify-items: center;
      align-items: center;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'uiux   html5   css3'
        'sketch sass    javascript'
        'vue    svg     terminal'
        'npm    webpack axure';
      grid-gap: 0em 0em;
      justify-items: center;
      align-items: center;
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
    }

    /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'uiux   html5   css3'
        'sketch sass    javascript'
        'vue    svg     terminal'
        'npm    webpack axure';
      grid-gap: .5em 0em;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      //
      // display: grid;
      // grid-template-columns: repeat(3, 1fr);
      // grid-template-areas:
      //   'uiux   html5   css3'
      //   'sketch sass    javascript'
      //   'vue    svg     terminal'
      //   'npm    webpack axure';
      // grid-gap: 1em 0em;
      // background: magenta;
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
      // display: grid;
      // grid-template-columns: repeat(4, 1fr);
      // grid-template-areas:
      //   'uiux      html5  css3     javascript'
      //   'sketch    sass   vue      svg'
      //   'terminal  npm    webpack  axure';
      // grid-gap: 1em 0em;
      // background: magenta;
    }

    /* SAMSUNG S7 360 x 640 */
    @media only screen
      and (min-device-width: 360px)
      and (max-device-width: 640px)
      and (orientation: portrait)
      // and (-webkit-min-device-pixel-ratio: 3)
      // and (-webkit-device-pixel-ratio: 4)
    {
      //
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'uiux   html5   css3'
        'sketch sass    javascript'
        'vue    svg     terminal'
        'npm    webpack axure';
      grid-gap: 1em 0em;
      // background: magenta;
    }

    @media only screen
      and (min-device-width: 360px)
      and (max-device-width: 640px)
      and (orientation: landscape)
      // and (-webkit-min-device-pixel-ratio: 3)
      // and (-webkit-device-pixel-ratio: 4)
    {
      //
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        'uiux      html5  css3     javascript'
        'sketch    sass   vue      svg'
        'terminal  npm    webpack  axure';
      grid-gap: 1em 0em;
      // background: magenta;
    }

    /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'uiux   html5   css3'
        'sketch sass    javascript'
        'vue    svg     terminal'
        'npm    webpack axure';
      grid-gap: 0em 0em;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
      display: grid;
      grid-template-columns: repeat(6, 1fr)  !important;
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure'  !important;
      grid-gap: 0em 0em;
      // background: red !important;
    }

    /* ----------- Pixel 2 ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 411px)
      and (max-device-width: 731px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      //
      display: grid;
      grid-template-columns: repeat(4, 1fr) !important;
      grid-template-areas:
        'uiux      html5  css3     javascript'
        'sketch    sass   vue      svg'
        'terminal  npm    webpack  axure' !important;
      grid-gap: 0em 0em;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 411px)
      and (max-device-width: 731px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      //
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 411px)
      and (max-device-width: 731px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
      display: grid;
      grid-template-columns: repeat(6, 1fr) !important;
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure' !important;
      grid-gap: 0em 0em;
      // background: red !important;
    }
    /* ----------- iPhone 6+, 7+ and 8+ ----------- */
    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 414px)
      and (max-device-width: 736px)
      and (-webkit-min-device-pixel-ratio: 3)
    {
      //
      display: grid;
      grid-template-columns: repeat(4, 1fr) !important;
      grid-template-areas:
        'uiux      html5  css3     javascript'
        'sketch    sass   vue      svg'
        'terminal  npm    webpack  axure' !important;
      grid-gap: 0em 0em;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 414px)
      and (max-device-width: 736px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 414px)
      and (max-device-width: 736px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: landscape)
    {
      //
      display: grid;
      grid-template-columns: repeat(6, 1fr) !important;
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure' !important;
      grid-gap: 0em 0em;
    }

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3)
    {
      //
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'uiux   html5   css3'
        'sketch sass    javascript'
        'vue    svg     terminal'
        'npm    webpack axure';
      grid-gap: 1em 0em;
      // background: magenta;

    }

    /* Portrait */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: landscape)
    {
      //
    }

    // ##################################################
    /* ----------- Nexus 7 ----------- */

    @media only screen
      and (min-device-width: 600px)
      and (max-device-width: 960px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        'uiux      html5  css3     javascript'
        'sketch    sass   vue      svg'
        'terminal  npm    webpack  axure';
      grid-gap: 0em 0em;
    }

    // ##################################################
    /* ----------- iPad 1, 2, Mini and Air ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (-webkit-min-device-pixel-ratio: 1)
    {
      //
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 1)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 1)
    {
      //
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure';
      grid-gap: 0em 0em;
    }

    /* ----------- iPad 3, 4 and Pro 9.7" ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas:
        'uiux  html5  css3      javascript  sketch   sass'
        'vue   svg    terminal  npm         webpack  axure';
      grid-gap: 0em 0em;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* ----------- iPad Pro 10.5" ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 834px)
      and (max-device-width: 1112px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Portrait */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 834px)
      and (max-device-width: 834px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Landscape */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 1112px)
      and (max-device-width: 1112px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* ----------- iPad Pro 12.9" ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 1024px)
      and (max-device-width: 1366px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Portrait */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 1024px)
      and (max-device-width: 1024px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Landscape */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 1366px)
      and (max-device-width: 1366px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }
      }
      // IIIIIIIIII      CCCCCCCCCCCCC     OOOOOOOOO     NNNNNNNN        NNNNNNNN
// I::::::::I   CCC::::::::::::C   OO:::::::::OO   N:::::::N       N::::::N
// I::::::::I CC:::::::::::::::C OO:::::::::::::OO N::::::::N      N::::::N
// II::::::IIC:::::CCCCCCCC::::CO:::::::OOO:::::::ON:::::::::N     N::::::N
//   I::::I C:::::C       CCCCCCO::::::O   O::::::ON::::::::::N    N::::::N
//   I::::IC:::::C              O:::::O     O:::::ON:::::::::::N   N::::::N
//   I::::IC:::::C              O:::::O     O:::::ON:::::::N::::N  N::::::N
//   I::::IC:::::C              O:::::O     O:::::ON::::::N N::::N N::::::N
//   I::::IC:::::C              O:::::O     O:::::ON::::::N  N::::N:::::::N
//   I::::IC:::::C              O:::::O     O:::::ON::::::N   N:::::::::::N
//   I::::IC:::::C              O:::::O     O:::::ON::::::N    N::::::::::N
//   I::::I C:::::C       CCCCCCO::::::O   O::::::ON::::::N     N:::::::::N
// II::::::IIC:::::CCCCCCCC::::CO:::::::OOO:::::::ON::::::N      N::::::::N
// I::::::::I CC:::::::::::::::C OO:::::::::::::OO N::::::N       N:::::::N
// I::::::::I   CCC::::::::::::C   OO:::::::::OO   N::::::N        N::::::N
// IIIIIIIIII      CCCCCCCCCCCCC     OOOOOOOOO     NNNNNNNN         NNNNNNN

  .icon {
    width: 94px;
    height: 64px;
    background-size: 94px 64px;
    background-size: cover !important;
    // margin-bottom: 1.3em;
    // border: 1px dashed DarkKhaki; // <<<<<<<<<<<<<<<<<<<

    // &:nth-child(9n),
    // &:nth-child(10n),
    // &:nth-child(11n),
    // &:nth-child(12n) {
    //   margin-bottom: 0 ;
    // }
        // ##################################################
    /* ----------- iPhone 4 and 4S ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      // margin: 0 !important;

      // &:nth-child(9n),
      // &:nth-child(10n),
      // &:nth-child(11n),
      // &:nth-child(12n) {
      //   margin-bottom: 0  !important;
      // }
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
      margin: 0 !important;

      // &:nth-child(7n),
      // &:nth-child(8n),
      // &:nth-child(9n),
      // &:nth-child(10n),
      // &:nth-child(11n),
      // &:nth-child(12n) {
      //   margin: 0 !important;
      // }
    }

    /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      // margin: 0 0 0em !important;

      // &:nth-child(10n),
      // &:nth-child(11n),
      // &:nth-child(12n) {
      //   margin-bottom: .5em !important;
      //   // border: 1px solid red;
      // }
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 320px)
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
    }
        /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      // margin: 0 0 0.25em;

      // &:nth-child(10n),
      // &:nth-child(11n),
      // &:nth-child(12n) {
      //   margin-bottom: .5em;
      //   // border: 1px solid red;
      // }
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
    }

    /* ----------- Pixel 2 ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 411px)
      and (max-device-width: 731px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      // margin: 0 !important;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 411px)
      and (max-device-width: 731px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait)
    {
      //
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 411px)
      and (max-device-width: 731px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape)
    {
      //
    }
        /* ----------- iPhone 6+, 7+ and 8+ ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 414px)
      and (max-device-width: 736px)
      and (-webkit-min-device-pixel-ratio: 3)
    {
      //
      // margin: 0 !important;
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 414px)
      and (max-device-width: 736px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait)
    {
      //
      // margin: 0 1.1em;
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 414px)
      and (max-device-width: 736px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: landscape)
    {
      //
    }

    /* ----------- iPhone X ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3)
    {
      // margin: 0 0 0.25em !important;

      // &:nth-child(10n),
      // &:nth-child(11n),
      // &:nth-child(12n) {
      //   margin-bottom: .5em !important;
      //   // border: 1px solid red;
      // }
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: landscape)
    {
      //
    }

    // ##################################################
    /* ----------- Nexus 7 ----------- */

    @media only screen
      and (min-device-width: 600px)
      and (max-device-width: 960px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
      // margin: 0 0 0em !important;

      // &:nth-child(9n),
      // &:nth-child(10n),
      // &:nth-child(11n),
      // &:nth-child(12n) {
      //   margin-bottom: 0em !important;
      //   // border: 1px solid red;
      // }
    }

    // ##################################################
    /* ----------- iPad 1, 2, Mini and Air ----------- */
        /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (-webkit-min-device-pixel-ratio: 1)
    {
      //
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 1)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 1)
    {
      //
    }

    /* ----------- iPad 3, 4 and Pro 9.7" ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      // margin: 0 0 0em !important;

      // &:nth-child(7n),
      // &:nth-child(8n),
      // &:nth-child(9n),
      // &:nth-child(10n),
      // &:nth-child(11n),
      // &:nth-child(12n) {
      //   margin-bottom: 0.5em !important;
      //   // border: 1px solid red;
      // }
    }

    /* Portrait */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Landscape */
    @media only screen
      and (min-device-width: 768px)
      and (max-device-width: 1024px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* ----------- iPad Pro 10.5" ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 834px)
      and (max-device-width: 1112px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Portrait */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 834px)
      and (max-device-width: 834px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Landscape */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 1112px)
      and (max-device-width: 1112px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* ----------- iPad Pro 12.9" ----------- */

    /* Portrait and Landscape */
    @media only screen
      and (min-device-width: 1024px)
      and (max-device-width: 1366px)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Portrait */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 1024px)
      and (max-device-width: 1024px)
      and (orientation: portrait)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

    /* Landscape */
    /* Declare the same value for min- and max-width to avoid colliding with desktops */
    /* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
    @media only screen
      and (min-device-width: 1366px)
      and (max-device-width: 1366px)
      and (orientation: landscape)
      and (-webkit-min-device-pixel-ratio: 2)
    {
      //
    }

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
