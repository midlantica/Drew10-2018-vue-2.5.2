<template>
  <svg height="60" width="88" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>UI/UX Design</title>
    <defs>
      <path id="b" d="M24.766 9.32c1.355 0 2.453 1.075 2.453 2.401s-1.098 2.402-2.453 2.402c-1.355 0-2.453-1.075-2.453-2.402s1.098-2.402 2.453-2.402zm0 6.404c1.355 0 2.453 1.076 2.453 2.402v7.206c0 1.326-1.098 2.401-2.453 2.401-1.355 0-2.453-1.075-2.453-2.401v-7.206c0-1.326 1.098-2.402 2.453-2.402zM12.62 21.33c0 1.579-.15 2.401 1.433 2.401 1.584 0 1.418-.822 1.418-2.401V11.72c0-1.326 1.098-2.402 2.452-2.402 1.355 0 2.453 1.076 2.453 2.402v9.608c0 4.065-2.368 6.404-6.323 6.404-3.956 0-6.339-2.437-6.339-6.404V11.72c0-1.326 1.098-2.402 2.453-2.402 1.355 0 2.453 1.076 2.453 2.402z"/>
      <filter id="a" height="132.6%" width="130.8%" x="-15.4%" y="-16.3%">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"/>
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      </filter>
      <path id="d" d="M44.56 21.329c0 1.579-.151 2.402 1.433 2.402s1.418-.823 1.418-2.402V11.72c0-1.327 1.098-2.402 2.452-2.402s2.453 1.075 2.453 2.402v9.608c0 4.066-2.368 6.405-6.323 6.405s-6.34-2.438-6.34-6.405V11.72c0-1.327 1.1-2.402 2.454-2.402 1.355 0 2.453 1.075 2.453 2.402zm9.182-8.007v-1.601c0-1.327 1.098-2.402 2.453-2.402 1.354 0 2.453 1.075 2.453 2.402v2.402c0 1.579-.151 2.402 1.433 2.402s1.418-.823 1.418-2.402V11.72c0-1.327 1.098-2.402 2.452-2.402 1.355 0 2.453 1.075 2.453 2.402v1.601c0 2.081-.89 3.71-2.288 4.804 1.399 1.094 2.288 2.723 2.288 4.804v2.402c0 1.326-1.098 2.402-2.453 2.402-1.354 0-2.452-1.076-2.452-2.402v-3.203c0-1.579.166-2.402-1.418-2.402-1.584 0-1.433.823-1.433 2.402v3.203c0 1.326-1.099 2.402-2.453 2.402-1.355 0-2.453-1.076-2.453-2.402V22.93c0-2.053.913-3.696 2.342-4.804-1.43-1.108-2.342-2.751-2.342-4.804z"/>
      <filter id="c" height="132.6%" width="122.4%" x="-11.2%" y="-16.3%">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"/>
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      </filter>
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(8 10)">
      <path d="M.286 18.527c0-10.218 8.292-18.5 18.52-18.5 10.23 0 18.521 8.28 18.521 18.499 0 10.218-8.291 18.5-18.52 18.5-10.23 0-18.52-8.283-18.52-18.501" fill="#7281b8" fill-rule="nonzero"/>
      <path d="M32.245 18.527c0-10.218 8.738-18.5 19.52-18.5 10.781 0 19.52 8.28 19.52 18.499 0 10.218-8.739 18.5-19.52 18.5s-19.52-8.283-19.52-18.501" fill="#4fc276" fill-rule="nonzero"/>
      <use fill="#000" filter="url(#a)" xlink:href="#b"/>
      <use fill="#fff" xlink:href="#b"/>
      <use fill="#000" filter="url(#c)" xlink:href="#d"/>
      <use fill="#fff" xlink:href="#d"/>
    </g>
  </svg>
</template>

<script>

</script>

<style lang="scss" scoped>
  // @import './src/assets/css/_colors.scss';

  svg {
    width: 88px;
    height: 60px;

    .letterUI {
      fill: RGB(68, 82, 141);
    }

    .letterUX {
      fill: RGB(29, 187, 113);
    }

    .letterInsides {
      fill: white;
    }
  }

</style>
