<template>
  <div class="about">
    <img class="flag">
    <p>I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss" scoped>
  @import './src/assets/css/_base.scss';

  .about {
    margin-bottom: .75em;
    background-image: url('../assets/img/bg/bg_bag_y.png');
    background-repeat: repeat;
    // width: calc(100%);
    // width: 500px;
    @include shadow;
    @include clearfix;
    @include font-smoothing(off);

    .flag {
      width: 104px;
      height: 59px;
      margin: 1em ;
      float: left;
      clear: left;
      background: url('../assets/img/british_american_flag.png');
      background-repeat: none;
      background-size: cover;
    }

    p {
      color: lighten($grey, 15);
      font-size: .8em;
      font-weight: bold;
      margin: 1em 1em 0.7em 10.7em;
      padding: 0.9em 0 0 0;
      @include font-smoothing(on);
    }
  }

</style>
