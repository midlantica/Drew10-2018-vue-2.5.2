<template>
  <svg width="88px" height="60px" viewBox="0 0 88 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Command Line</title>
      <defs>
          <filter x="-25.6%" y="-17.1%" width="151.1%" height="160.5%" filterUnits="objectBoundingBox" id="filter-1">
              <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
              <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.246376812 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
              <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
          </filter>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
              <stop stop-color="#D1D1D1" offset="0%"></stop>
              <stop stop-color="#848484" offset="100%"></stop>
          </linearGradient>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Artboard-Copy" transform="translate(-15.000000, -193.000000)">
              <g id="terminal" filter="url(#filter-1)" transform="translate(36.500000, 203.000000)">
                  <g id="Group" transform="translate(0.321400, 0.355500)">
                      <rect id="Rectangle-path" fill="url(#linearGradient-2)" fill-rule="nonzero" x="4.26325641e-14" y="0" width="43.3437599" height="36.5219384" rx="1"></rect>
                      <rect id="Rectangle-6" fill="#282828" fill-rule="nonzero" x="3.91155705" y="3.36731648" width="35.9492468" height="29.0200455" rx="1"></rect>
                      <path d="M39.8608038,11.1693218 L39.8608038,31.4705048 C39.8608038,31.9771166 39.4569828,32.3882798 38.9366044,32.3882798 L4.83667425,32.3882798 C4.32639135,32.3882798 3.91155705,31.9771166 3.91155705,31.4705048 L3.91155705,25.1029818 L39.8608038,11.1711573 L39.8608038,11.1693218 Z" id="Rectangle-6" fill="#000000" fill-rule="nonzero"></path>
                      <polygon id="Shape" stroke="#717171" points="3.91155705 3.36823425 39.8608038 3.36823425 39.8608038 32.3882798 3.91155705 32.3882798"></polygon>
                  </g>
                  <polygon id="Shape" fill="#CAD8E9" fill-rule="nonzero" points="14.995 12.717 27.705 18.507 14.995 24.463 14.995 27.549 31.132 20.022 31.132 16.982 14.995 9.448 14.995 12.715"></polygon>
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

  }

</style>
