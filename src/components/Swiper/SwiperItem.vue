<template>
<div class="swiper-slide">
  <slot/>
  <!-- <slot/> 几个个slot,渲染几次
  <slot/> -->
</div>
</template>
<script>
// 暴露组件的名字,后面方便用
export default {
  name: 'SwiperItem'
}
</script>
<style lang="scss" scoped>

</style>
