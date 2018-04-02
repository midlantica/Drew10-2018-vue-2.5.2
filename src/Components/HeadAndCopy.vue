<template>
  <div>

    <div class="headBlock">
      <router-link to="Extras" class='drewhead' />
      <h1>Don’t let design get in the way of communication</h1>
    </div>

    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "./src/assets/css/_base.scss";

  .headBlock {
    @include clearfix;

    a.drewhead {
      margin: 0.3em 1em 0em 0em;
      padding: 0;
      width: 72px;
      height: 88px;
      background-image: url(../assets/img/drew_head.png);
      float: left;
      display: block;
      clear: left;
    }

    h1 {
      font-family: $font-subhead;
      margin: 0;
      color: $accent-red;
      line-height: 1.1em;
      padding: 0;
      font-size: 6.3vw;
      padding-top: 0.8em;

      @media (min-width: 460px) {
        font-size: 1.9em;
        width: 95%;
        // background: RGBA(222, 189, 235, .5);
        padding-top: 0.7em;
      }

      @media (min-width: 600px) {
        font-size: 2em;
        width: 90%;
        // background: RGBA(172, 234, 206, .5);
        padding-top: 0.6em;
      }

      @media (min-width: 800px) {
        font-size: 2em;
        width: 61%;
        // background: orange;
        padding-top: .6em;
      }

      @media (min-width: 1024px) {
        font-size: 1.6em;
        width: 93%;
        // background: pink;
        padding-top: 0.9em;
      }

    }

  }

  p {
    font-size: 0.9rem;
    color: $grey;
    margin: 1em .5em 1.2em;
    line-height: 2.6em;
    letter-spacing: 0.06em;
  }

</style>
