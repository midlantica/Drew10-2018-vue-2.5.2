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
    <slide
      v-for="(image, index) in images"
      v-bind:image="image"
      v-bind:index="index"
      v-bind:key="image.id"
    >
      <img :src="image" :alt="image.slice(25,-4)">
    </slide>
  </carousel>
</template>

<script>
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
      const imgPath = 'static/img/portfolio/jpg/'
      setTimeout(() => {
        this.images = [
          imgPath + 'CivicInc_Bridge_01.jpg',
          imgPath + 'CivicInc_Bridge_02.jpg',
          imgPath + 'CivicInc_Bridge_03.jpg',
          imgPath + 'CivicInc_Funding_01.jpg',
          imgPath + 'CivicInc_Funding_02.jpg',
          imgPath + 'CivicInc_Land_01.jpg',
          imgPath + 'CivicInc_Land_02.jpg',
          imgPath + 'jpay_web_home.jpg',
          imgPath + 'jpay_web_signed_in.jpg',
          imgPath + 'jpay_web_money.jpg',
          imgPath + 'jpay_web_email.jpg',
          imgPath + 'jpay_web_stamps.jpg',
          imgPath + 'inmate_kiosk.jpg',
          imgPath + 'inmate_kiosk_UI_home.jpg',
          imgPath + 'inmate_kiosk_UI_home_signed_in.jpg',
          imgPath + 'inmate_kiosk_UI_buy_jp3.jpg',
          imgPath + 'inmate_kiosk_UI_music.jpg',
          imgPath + 'inmate_kiosk_UI_music_songs_list.jpg',
          imgPath + 'inmate_kiosk_UI_email_inbox.jpg',
          imgPath + 'inmate_kiosk_UI_email_read.jpg',
          imgPath + 'inmate_kiosk_UI_buys.jpg',
          imgPath + 'inmate_kiosk_UI_manage.jpg',
          imgPath + 'icons_red.jpg',
          imgPath + 'jpay_app_home.jpg',
          imgPath + 'jpay_app_home_prefs.jpg',
          imgPath + 'jpay_app_money_prefs.jpg',
          imgPath + 'jpay_app_email.jpg',
          imgPath + 'jpay_app_logos.jpg',
          imgPath + 'jpay_app_UI_old.jpg',
          imgPath + 'jpayinc_website_old.jpg',
          imgPath + 'jpayinc_website.jpg',
          imgPath + 'jpayinc_website_responsive.jpg',
          imgPath + 'jpay_infographgic_cloud.jpg',
          imgPath + 'jpay_icons_doc.jpg',
          imgPath + 'icons_doc_parole.jpg',
          imgPath + 'jpay_icons_cards_kiosk.jpg',
          imgPath + 'jpay_infographic_01.jpg',
          imgPath + 'jpay_infographic_02.jpg',
          imgPath + 'jpay_inforgraphic_money.jpg',
          imgPath + 'jpay_icons_email.jpg',
          imgPath + 'mlotto_logo.jpg',
          imgPath + 'mlotto_screens.jpg',
          imgPath + 'mlotto_web.jpg',
          imgPath + 'mlotto_brochure.jpg',
          imgPath + 'mlotto_UI_home.jpg',
          imgPath + 'mlotto_UI_play.jpg',
          imgPath + 'mlotto_UI_favs.jpg',
          imgPath + 'mlotto_UI_picks.jpg',
          imgPath + 'mlotto_UI_wallet.jpg',
          imgPath + 'jp4_unit.jpg',
          imgPath + 'jp4_home_screen.jpg',
          imgPath + 'jp4_email.jpg',
          imgPath + 'jp4_movie.jpg',
          imgPath + 'jp4_movie_parts.jpg',
          imgPath + 'jp4_music_album.jpg',
          imgPath + 'jp4_music_home.jpg',
          imgPath + 'jp4_music.jpg',
          imgPath + 'jp4_radio.jpg',
          imgPath + 'jp4_commissary.jpg',
          imgPath + 'jp3_unit.jpg',
          imgPath + 'jp3_screens.jpg',
          imgPath + 'jpay_mural.jpg',
          imgPath + 'jpay_email.jpg',
          imgPath + 'newsletter_hero1.jpg',
          imgPath + 'newsletter_hero2.jpg',
          imgPath + 'prisonride_home.jpg',
          imgPath + 'prisonride_profile.jpg',
          imgPath + 'valentina_website.jpg',
          imgPath + 'celebrity_cruise_lines.jpg'
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

    @media (min-width: 0px) and (max-width: 796px) {
      min-height: 200px;
    }

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
        font-size: 1.75em;
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

