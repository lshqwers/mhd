<template>
<!--轮播把它拿出来放在弄成一个组件-->
<!-- 首页头部end -->
<!-- 录播图start -->
<!-- <link rel="stylesheet" href="dist/css/swiper.min.css"> -->
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <!-- 轮播图的项目写死了,用我们调用组件时替换这里slot换掉 -->

        <!-- <div class="swiper-slide">
          Slide 1
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div> -->
        <!-- 会把一些的index.vue的元素渲染在这个炕中  -->
        <slot/>
    </div>
    <!-- 如果需要用分页器 -->
    <div class="swiper-pagination"></div>
</div>
<!-- 录播图end -->
</template>
<script>
// 引入swiper的核心
import Swiper from 'swiper'
// 引入swiper的样式当前的项目不能使用less,因为这里配置的是支持scss的语法 这里是npm下载的不需要使用@符号
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      // 在组件外面调用的时候,传替prop
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  // swiper的实列要放在这里写   在mounted
  mounted () {
    const that = this
    // .ref如果标记的是**普通的元素**,那么后续得到的是**一个dom对象**
    console.log(this.$refs.swiper)
    console.log(this.$el)// $el是组件根元素的dom对象
    // 这里的Swiper(大写的Swiper是上面获取的东西)
    // 42:7  error  Do not use 'new' for side effects no-new  这里不能是用new
    /* eslint-disable */
    // this.$el
      new Swiper(this.$el, {
      /* autoplay:true,
      direction: 'vertical', //  垂直的轮播图
      direction: 'horizontal',  //  水平的轮播图
      loop: true,
      如果需要分页器
      pagination: '.swiper-pagination',
      如果需要分页器
      */
      pagination: {
      el: '.swiper-pagination',
    },
    //loop为true无缝轮播
    loop:this.loop,
    // 第一个autoplay是swiper的配置项,第二个autoplay是当前组件接受到的一个prop
    // 默认是0就是false
    autoplay:this.autoplay ? {
      delay: this.autoplay ,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    }:false,
    // 绑定事件,可以获取当前的下标
    on: {
    slideChangeTransitionStart: function(){
      //它的索引不是从0开始的,而是从你开始的31231
      // console.log(this.activeIndex);
      //它的索引是从0开始的
      // alert(mySwiper.realIndex);
      //1.要控制两个this的不同的指向,可以用闭包 2.用that=this
      console.log(this.realIndex);// 这里的this是找swiper的实列  this.realIndex=>this swiper的实列
      // 普通函数指向的是当前的swiper的实列
      // 触发一个自定义的事件change,((封装好组件外面调用))
      that.$emit('onChange',this.realIndex)  // this 当前的组件是实列,vue的实列方法

    },
  },
   });
    /* eslint-enable */
  }
}
</script>
