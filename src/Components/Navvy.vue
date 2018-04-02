<template>
  <nav>
    <div class="logoName"><h1><router-link to="/">DREW HARPER</router-link></h1></div>
    <div class="jobDesc">
      <div class="jobDescBox"><h2>UI/UX DESIGNER FRONT&nbsp;END&nbsp;DEV</h2></div>
    </div>
    <div class="contactInfo">
      <div class='contact'>
        <div class='email'><a href='mailto:druharper@gmail.com'>DRUHARPER@GMAIL.COM</a></div>
        <div class='resume'>
          Resume:
          <a href='@/../static/img/resume/drew_harper_resume_portfolio.docx'>Word Big</a>/<a href='@/../static/img/resume/drew_harper_resume_portfolio_short.docx'>Small</a> &
          <a href='@/../static/img/resume/drew_harper_resume_portfolio.pdf'>PDF</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "./src/assets/css/_base.scss";

  // GRID GRID GRID GRID GRID GRID GRID GRID GRID
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // flex-flow: row wrap;
    // justify-content: flex-start;
    // justify-content: space-around;
    // flex-grow: auto;
    align-items: center;
    padding: .25em .75em;
    // border: 1px solid red;

    @media only screen and (min-width: $XLargeScreen) {
      //
    }

    @media only screen and (max-width: $XLargeScreen) {
    }

    @media only screen and (max-width: $LargeScreen) {
      justify-content: center;
      //
    }

    // ORANGEEEEEEEEEEEEEEEE
    @media only screen and (device-width: 768px) and (device-height: 1024px) {
      //
      // background: transparentize(red, .75) !important;
    }

    @media only screen and (max-width: $MidScreen) {
      justify-content: center;
      // background: Orange;
    }

    @media only screen and (max-width: $MidScreenSm) {
      //
    }

    @media only screen and (max-width: $XSmallScreen) {
      //
      // background: grey;
    }

  }

  .logoName, .jobDesc, .contactInfo {
    // transition: .5s ease-in-out;
    // border: 1px solid transparentize(white, .85);

    @media only screen and (max-width: 800px) {
      // border: 1px solid transparentize(yellow, .0);
      flex-grow: 1 !important;
      justify-content: center;
      // background: blue;
      width: 100%;
      margin-right: 0 !important;
    }

    @media only screen and (max-width: $XSmallScreen) {
      // border: 1px solid transparentize(yellow, .0);
      flex-grow: 1 !important;
      justify-content: center;
      // background: blue;
      width: 100%;
      margin-right: 0 !important;
    }


  }

  .logoName {
    // justify-content: center !important;
    margin-right: 1em;
    // flex-grow: 0;
    // background: transparentize(grey, .5); // GREYYYYYYYY
    flex-grow: 0;
    justify-content: flex-start;

    @media only screen and (max-width: $XLargeScreen) {
      // justify-content: center !important;
      // background: red;
      margin-right: 1em;
      flex-grow: 0;
    }

    @media only screen and (max-width: $MidScreenSm) {
      // justify-content: center !important;
      // background: red;
      flex-grow: 1 !important;
      margin-right: 0em;
      // align-items: flex-start;
      //
    }

    @media only screen and (max-width: 800px) {
      //
      flex-grow: 1 !important;
    }

    @media only screen and (max-width: $XSmallScreen) {
      // justify-content: center !important;
      // background: red;
      flex-grow: 1 !important;
      margin-right: 0em;
      // align-items: flex-start;
      //
    }

  }

  .jobDesc {
    margin-right: 1em;
    flex-grow: 1;
    // background: transparentize(yellow, .75); // YYYYYYYYYELLOW

    .jobDescBox {
      width: 13em !important;
      font-size: 0.8em;
      // background: purple;

      @media only screen and (min-width: $XLargeScreen) {
        font-size: 0.875em;
        width: 13em;
        margin: 0 !important;
        // background: green;
      }

      @media only screen and (max-width: $XLargeScreen) {
        font-size: 0.875em;
        width: 13em;
        margin: 0 !important;
        // background: green;
      }
    }

    @media only screen and (max-width: $LargeScreen) {
      flex-grow: 1 !important;
      //
      .jobDescBox {
        // width: 100%;
        font-size: 0.875em;
        // background: purple;
        // width: 100% !important;
        width: 13em;
        margin: 0 !important;
      }
    }

    @media only screen and (max-width: 800px) {
      .jobDescBox {
        width: 100% !important;
      }
    }

    @media only screen and (min-width: $SmallScreen) {
      flex-grow: 1;

      .jobDescBox {
        // width: 100%;
        font-size: 0.875em;
        // background: purple;
        width: 100%;
        // width: 26em;
        margin: 0 auto;
      }
    }

    @media only screen and (min-width: $XSmallScreen) {
      flex-grow: 1;

      .jobDescBox {
        // width: 100%;
        font-size: 0.875em;
        // background: purple;
        width: 100%;
        // width: 26em;
        margin: 0 auto;
      }
    }


  }

  .contactInfo {
    flex-grow: 0;

    @media only screen and (min-width: $XLargeScreen) {
      flex-grow: 0 !important;
      //
    }

    // MAAXXXXXXX
    @media only screen and (max-width: $XLargeScreen) {
      flex-grow: 0 !important;
      //
    }

    @media only screen and (max-width: 800px) {
      flex-grow: 0 !important;
      // background: red !important;
      width: initial;
    }

    @media only screen and (min-width: $MidScreenSm) {
      // flex-grow: 0 !important;
    }

    @media only screen and (min-width: $XSmallScreen) {
      // flex-grow: 0;
    }

  }

  // H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1
  // H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1 H1
  nav h1 {
    font-size: 4em;
    font-weight: normal;
    // padding: .05em .25em .05em 0.2em;
    letter-spacing: .06em;
    margin: initial;
    font-family: $font-head;
    color: $ivory;
    line-height: 1;
    text-align: center;
    @include text-shadow(rgba($accent-red, 1) 5px 0px 3px);

    @media only screen and (max-width: $XSmallScreen) {
      font-size: 3.4em;
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
      font-size: 4em;
    }


    a {
      margin: 0em 0 0em 0;
      text-decoration: none;
      &:visited {
        color: $ivory;
      }
      &:hover {
        color: $accent;
      }
    }

  }

  // H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2
  // H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2
  nav h2 {
    font-family: $font-subhead;
    font-size: 2em;
    // padding: 0.45em 0 0 0;
    // margin: 0.3em .5em .05em .5em;
    margin: 0.15em 0em 0.1em;
    color: $ivory;
    letter-spacing: 0.06em;
    line-height: 0.925;
    font-weight: normal;
    text-align: center;
    @include text-shadow(rgba($accent-red, 1) 3px 0px 3px);

    /* SAMSUNG S7 360 x 640 */
    @media only screen
      and (min-device-width: 360px)
      and (max-device-width: 640px)
      and (orientation: portrait)
      // and (-webkit-min-device-pixel-ratio: 3)
      // and (-webkit-device-pixel-ratio: 4)
    {
    //
      // font-size: 1.9em;
    }



    @media only screen and (max-width: $XSmallScreen) {
      font-size: 1.7em;
    }

  }

  // CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
  // CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
  .contact {
    color: $ivory;
    padding: 0;
    font-family: $font-subhead;
    font-size: 1.4em;
    text-align: center;
    margin: initial;

    /* SAMSUNG S7 360 x 640 */
    @media only screen
      and (min-device-width: 360px)
      and (max-device-width: 640px)
      and (orientation: portrait)
      // and (-webkit-min-device-pixel-ratio: 3)
      // and (-webkit-device-pixel-ratio: 4)
    {
    //
      font-size: 1.35em;
    }


    .email {
      font-size: 1.02em;
      line-height: 1.3em;
      padding: 0;
      letter-spacing: .05em;

      @media only screen and (max-width: 800px) {
        float: left;
        clear: left;
        font-size: 0.678em;
        line-height: 1.5em;
      }

      @media only screen and (max-width: $XSmallScreen) {
        // float: left;
        clear: left;
        font-size: 0.575em;
        // line-height: 1.5em;
      }

      a {
        color: $ivory;
        text-decoration: none;

        &:hover {
          color: $accent;
        }
      }
    }

    .resume {
      font-size: 0.755em;
      line-height: 1em;
      margin: .0em 0 0 0;
      padding: 0;
      letter-spacing: .05em;

      @media only screen and (max-width: 800px) {
        float: left;
        font-size: 0.678em;
        margin-left: .5em;
        line-height: 1.5em;
      }

      @media only screen and (max-width: $XSmallScreen) {
        // float: left;
        font-size: 0.575em;
        // margin-left: .5em;
        // line-height: 1.5em;
      }

      a {
        color: $ivory;
        text-decoration: none;

        &:hover {
          color: $accent;
        }
      }
    }
  }

</style>
