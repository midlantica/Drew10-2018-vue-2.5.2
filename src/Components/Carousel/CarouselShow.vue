<template>
  <carousel class="druCarousel"
    :perPage=1
    :navigationEnabled="true"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayTimeout="2500"
    :autoplayHoverPause="true"
    :loop="true"
    :navigationClickTargetSize="0"
    navigationNextLabel="<div class='navvy rightnav'>▶︎</div>"
    navigationPrevLabel="<div class='navvy leftnav'>◀︎</div>"
  >
    <!-- CivicInc -->
    <slide><img src="@/assets/img/portfolio/jpg/CivicInc_Bridge_01.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/CivicInc_Bridge_02.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/CivicInc_Bridge_03.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/CivicInc_Funding_01.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/CivicInc_Funding_02.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/CivicInc_Land_01.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/CivicInc_Land_02.jpg"></slide>
    <!-- JPAY.COM -->
    <slide><img src="@/assets/img/portfolio/jpg/jpay_web_home.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_web_signed_in.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_web_money.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_web_email.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_web_stamps.jpg"></slide>
    <!-- INMATE KIOSK -->
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_home.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_home_signed_in.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_buy_jp3.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_music.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_music_songs_list.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_email_inbox.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_email_read.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_buys.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/inmate_kiosk_UI_manage.jpg"></slide>
    <!-- JPAY APP -->
    <slide><img src="@/assets/img/portfolio/jpg/icons_red.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_app_home.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_app_home_prefs.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_app_money_prefs.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_app_email.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_app_logos.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_app_UI_old.jpg"></slide>
    <!-- JPAYINC -->
    <!-- #### <slide><img src="@/assets/img/portfolio/jpg/jpayinc_website_old.jpg"></slide> -->
    <slide><img src="@/assets/img/portfolio/jpg/jpayinc_website.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpayinc_website_responsive.jpg"></slide>
    <!-- ICONS -->
    <slide><img src="@/assets/img/portfolio/jpg/jpay_infographgic_cloud.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_icons_doc.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/icons_doc_parole.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_icons_cards_kiosk.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_infographic_01.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_infographic_02.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_inforgraphic_money.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_icons_email.jpg"></slide>
    <!-- MLOTTO -->
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_logo.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_screens.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_web.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_brochure.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_UI_home.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_UI_play.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_UI_favs.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_UI_picks.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/mlotto_UI_wallet.jpg"></slide>
    <!-- JP4 -->
    <slide><img src="@/assets/img/portfolio/jpg/jp4_unit.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_home_screen.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_email.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_movie.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_movie_parts.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_music_album.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_music_home.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_music.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_radio.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp4_commissary.jpg"></slide>
    <!-- JP3 -->
    <slide><img src="@/assets/img/portfolio/jpg/jp3_unit.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jp3_screens.jpg"></slide>
    <!-- JPAY MISC -->
    <slide><img src="@/assets/img/portfolio/jpg/jpay_mural.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/jpay_email.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/newsletter_hero1.jpg"></slide>
    <!-- #### <slide><img src="@/assets/img/portfolio/jpg/newsletter_hero2.jpg"></slide> -->
    <slide><img src="@/assets/img/portfolio/jpg/prisonride_home.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/prisonride_profile.jpg"></slide>
    <!-- MISC OLD -->
    <slide><img src="@/assets/img/portfolio/jpg/valentina_website.jpg"></slide>
    <slide><img src="@/assets/img/portfolio/jpg/celebrity_cruise_lines.jpg"></slide>
  </carousel>
</template>

<script>
/* eslint-disable indent */
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style lang="scss">
  @import './src/assets/css/_base.scss';

  .VueCarousel.druCarousel {
    margin-top: .5em;
    width: calc(100%) !important;
    // width: calc(100% / 79);
    @include shadow;

    img {
      width: calc(100%);
      height: auto;
      background-size: cover;
      margin: 0px;
      margin-bottom: -4px;
    }

    .navvy {
      font-size: 1em;
      cursor: pointer;
      color: white;
      -webkit-text-stroke: 1px lighten(grey, 40);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
      // background: red !important;
      &:hover {
        color: lighten(grey, 30);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, .85);
        // background: $blue-dark;
      }
      &.leftnav {
        transform: translateY(0%) translateX(130%);
      }
      &.rightnav {
        transform: translateY(0%) translateX(-130%);
      }
    }
  }
</style>
