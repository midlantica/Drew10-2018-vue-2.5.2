<template>
  <carousel class="druCarousel"
    :perPage="1"
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
    <slide v-for="(image, index) in images"
      v-bind:image="image"
      v-bind:index="index"
      v-bind:key="image.id"
    >
      <img :src="image" alt="">
    </slide>
  </carousel>
</template>

<script>
/* eslint-disable indent */
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    components: {
      Carousel,
      Slide
    },
    data () {
      return {
        images: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.images = [
          'static/img/portfolio/jpg/CivicInc_Bridge_01.jpg',
          'static/img/portfolio/jpg/CivicInc_Bridge_02.jpg',
          'static/img/portfolio/jpg/CivicInc_Bridge_03.jpg',
          'static/img/portfolio/jpg/CivicInc_Funding_01.jpg',
          'static/img/portfolio/jpg/CivicInc_Funding_02.jpg',
          'static/img/portfolio/jpg/CivicInc_Land_01.jpg',
          'static/img/portfolio/jpg/CivicInc_Land_02.jpg',
          'static/img/portfolio/jpg/jpay_web_home.jpg',
          'static/img/portfolio/jpg/jpay_web_signed_in.jpg',
          'static/img/portfolio/jpg/jpay_web_money.jpg',
          'static/img/portfolio/jpg/jpay_web_email.jpg',
          'static/img/portfolio/jpg/jpay_web_stamps.jpg',
          'static/img/portfolio/jpg/inmate_kiosk.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_home.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_home_signed_in.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_buy_jp3.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_music.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_music_songs_list.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_email_inbox.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_email_read.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_buys.jpg',
          'static/img/portfolio/jpg/inmate_kiosk_UI_manage.jpg',
          'static/img/portfolio/jpg/icons_red.jpg',
          'static/img/portfolio/jpg/jpay_app_home.jpg',
          'static/img/portfolio/jpg/jpay_app_home_prefs.jpg',
          'static/img/portfolio/jpg/jpay_app_money_prefs.jpg',
          'static/img/portfolio/jpg/jpay_app_email.jpg',
          'static/img/portfolio/jpg/jpay_app_logos.jpg',
          'static/img/portfolio/jpg/jpay_app_UI_old.jpg',
          'static/img/portfolio/jpg/jpayinc_website_old.jpg',
          'static/img/portfolio/jpg/jpayinc_website.jpg',
          'static/img/portfolio/jpg/jpayinc_website_responsive.jpg',
          'static/img/portfolio/jpg/jpay_infographgic_cloud.jpg',
          'static/img/portfolio/jpg/jpay_icons_doc.jpg',
          'static/img/portfolio/jpg/icons_doc_parole.jpg',
          'static/img/portfolio/jpg/jpay_icons_cards_kiosk.jpg',
          'static/img/portfolio/jpg/jpay_infographic_01.jpg',
          'static/img/portfolio/jpg/jpay_infographic_02.jpg',
          'static/img/portfolio/jpg/jpay_inforgraphic_money.jpg',
          'static/img/portfolio/jpg/jpay_icons_email.jpg',
          'static/img/portfolio/jpg/mlotto_logo.jpg',
          'static/img/portfolio/jpg/mlotto_screens.jpg',
          'static/img/portfolio/jpg/mlotto_web.jpg',
          'static/img/portfolio/jpg/mlotto_brochure.jpg',
          'static/img/portfolio/jpg/mlotto_UI_home.jpg',
          'static/img/portfolio/jpg/mlotto_UI_play.jpg',
          'static/img/portfolio/jpg/mlotto_UI_favs.jpg',
          'static/img/portfolio/jpg/mlotto_UI_picks.jpg',
          'static/img/portfolio/jpg/mlotto_UI_wallet.jpg',
          'static/img/portfolio/jpg/jp4_unit.jpg',
          'static/img/portfolio/jpg/jp4_home_screen.jpg',
          'static/img/portfolio/jpg/jp4_email.jpg',
          'static/img/portfolio/jpg/jp4_movie.jpg',
          'static/img/portfolio/jpg/jp4_movie_parts.jpg',
          'static/img/portfolio/jpg/jp4_music_album.jpg',
          'static/img/portfolio/jpg/jp4_music_home.jpg',
          'static/img/portfolio/jpg/jp4_music.jpg',
          'static/img/portfolio/jpg/jp4_radio.jpg',
          'static/img/portfolio/jpg/jp4_commissary.jpg',
          'static/img/portfolio/jpg/jp3_unit.jpg',
          'static/img/portfolio/jpg/jp3_screens.jpg',
          'static/img/portfolio/jpg/jpay_mural.jpg',
          'static/img/portfolio/jpg/jpay_email.jpg',
          'static/img/portfolio/jpg/newsletter_hero1.jpg',
          'static/img/portfolio/jpg/newsletter_hero2.jpg',
          'static/img/portfolio/jpg/prisonride_home.jpg',
          'static/img/portfolio/jpg/prisonride_profile.jpg',
          'static/img/portfolio/jpg/valentina_website.jpg',
          'static/img/portfolio/jpg/celebrity_cruise_lines.jpg'
        ]
      }, 2000)
    }
  }
</script>

<style lang="scss">
  @import './src/assets/css/_base.scss';

  .VueCarousel.druCarousel {
    margin-top: .5em;
    // width: calc(100%) !important;
    // width: calc(100% / 79);
    // width: 488px;
    background: lightgrey;
    // border: 10px red solid;
    min-height: 363px;
    @include shadow;
    @include clearfix;

    img {
      width: calc(100%);
      height: auto;
      background-size: cover;
      margin: 0px;
      margin-bottom: -4px;
      // @include shadow;
    }

    .VueCarousel-navigation button.VueCarousel-navigation-button.VueCarousel-navigation-next,
    .VueCarousel-navigation button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
      //
      .navvy {
        font-size: 1.5em;
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
  }

</style>

