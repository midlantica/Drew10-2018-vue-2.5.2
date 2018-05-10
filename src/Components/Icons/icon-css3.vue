<template>
  <svg width="88px" height="60px" viewBox="0 0 88 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>CSS3</title>
      <defs>
          <filter x="-32.9%" y="-15.9%" width="165.7%" height="156.1%" filterUnits="objectBoundingBox" id="filter-1">
              <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
              <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.246376812 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
              <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
          </filter>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Artboard-Copy" transform="translate(-296.000000, -10.000000)" fill-rule="nonzero">
              <g id="css" filter="url(#filter-1)" transform="translate(322.500000, 18.500000)">
                  <g id="Group-10">
                      <path d="M1.1929065,0.846 L33.8069548,0.846 C34.3592395,0.846 34.8069548,1.29371525 34.8069548,1.846 C34.8069548,1.87562168 34.8056386,1.90522874 34.8030102,1.93473358 L31.7914203,35.740543 C31.7544678,36.1553428 31.4643202,36.5038207 31.0630785,36.615308 L17.7458869,40.3155661 C17.5706198,40.3642651 17.3853888,40.3642341 17.2101379,40.3154766 L3.93271168,36.6214896 C3.53158042,36.5098886 3.24157376,36.161417 3.2046805,35.7466882 L0.196839895,1.93460767 C0.147903232,1.38449527 0.554186437,0.898870058 1.10429883,0.849933395 C1.13376201,0.847312422 1.16332697,0.846 1.1929065,0.846 Z" id="Shape" fill="#0070BA"></path>
                      <polyline id="Shape" fill="#1B86C1" points="17.5 37.363 29.015 34.163 31.725 3.757 17.498 3.757 17.498 37.363"></polyline>
                      <polyline id="Shape" fill="#ECECE9" points="17.5 28.292 17.48 28.297 12.628 26.985 12.318 23.505 7.945 23.505 8.555 30.357 17.479 32.839 17.499 32.832 17.499 28.292"></polyline>
                      <path d="M17.404,21.32 L22.849,21.32 L22.342,26.982 L17.482,28.296 L17.482,32.836 L26.414,30.356 L27.504,18.128 L27.61,16.956 L17.405,16.956 L17.405,21.321 L17.404,21.32 Z M17.46,12.45 L28.01,12.467 L28.1,11.487 L28.297,9.273 L28.401,8.103 L17.46,8.103 L17.46,12.451 L17.46,12.45 Z" id="Shape" fill="#FFFFFF"></path>
                      <polygon id="Shape" fill="#FFFFFE" points="17.46 12.69 28.4 8.1 28.037 12.433 17.465 16.915 17.465 21.279 17.459 21.279 17.459 12.689"></polygon>
                      <polygon id="Shape" fill="#EBEBE9" points="7.034 12.434 6.634 8.102 17.499 8.102 17.499 12.452 7.033 12.434"></polygon>
                      <polygon id="Shape" fill="#ECECE9" points="7.405 16.906 7.75 21.321 17.46 21.321 17.46 12.693 7.405 16.907"></polygon>
                  </g>
              </g>
          </g>
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

    .letterInsides {
      // fill: white;
    }
  }

</style>
