<template>
  <svg width="88px" height="60px" viewBox="0 0 88 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Sketch</title>
      <defs>
          <filter x="-26.1%" y="-17.1%" width="152.3%" height="160.5%" filterUnits="objectBoundingBox" id="filter-1">
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
          <g id="Artboard-Copy" transform="translate(-15.000000, -103.000000)">
              <g id="Sketch" filter="url(#filter-1)" transform="translate(37.000000, 113.000000)">
                  <g id="Group-8">
                      <polygon id="Polygon" fill="#FFAE00" points="22 37.8 0.988962058 13.6474326 10.097166 1.26845638 22 0 33.902834 1.26845638 43.0106278 13.6474326"></polygon>
                      <polygon id="Polygon" fill="#EC6C00" points="22 37.8 1 13.65 43 13.65"></polygon>
                      <polygon id="Polygon" fill="#FFAE00" points="22 37.8 9.4 13.65 34.6 13.65"></polygon>
                      <polygon id="Polygon" fill="#FFEFB4" points="22 0 9.4 13.65 34.6 13.65"></polygon>
                      <polygon id="Polygon" fill="#FED305" points="10 1.2796875 9.4 13.65 22 2.95585778e-12"></polygon>
                      <polygon id="Polygon" fill="#FED305" points="34 1.2796875 34.6 13.65 22 0"></polygon>
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
