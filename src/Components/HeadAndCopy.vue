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

<style lang="scss" scoped>
  @import "./src/assets/css/_base.scss";

  .headBlock {
    display: grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    grid-column-gap: 6px;
    justify-items: start;
    align-items: center;
    // @include clearfix;

    a.drewhead {
      background-image: url(../assets/img/drew_head.png);
      background-repeat: no-repeat;
      width: 72px;
      height: 88px;
      display: block;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    h1 {
      font-family: $font-subhead;
      color: $accent-red;
      font-size: 1.8rem;
      margin: .25em 0 0;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      transition: .25s ease-in;
    }

  }

  p {
    font-size: 0.9rem;
    color: $grey;
    margin: 1em 0em .5em .75em;
    line-height: 2.6em;
    letter-spacing: 0.06em;
  }

</style>
