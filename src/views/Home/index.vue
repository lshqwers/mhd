<template>
<div class="page-home">
<!-- 首页头部beign -->
<header class="index-header">
    <a href="mine.html?cpid=0">
       <div class="header-user">
             <div class="user-btn"></div>
       </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
       <div class="header-search"></div>
    </a>
</header>
<!-- 这里加了一个br,会把头部撑大 -->
<br/>
<!-- 调用组件把它做标签来使用 在Swiper里面调用SwiperItem -->
<!-- 在组件中写的开始的内容和闭合的内容,叫组件的内容(用slot插槽) -->
<!-- my-swiper,它会自动继承在根元素上面,class会和并到组件的根元素上面 -->
<Swiper class="my-swiper" ref="my-swiper"  :autoplay="3000" @onChange="onChange"  v-if="bannerList.length>0"><!-- onChange没有加括号的有event -->
<!--下面的东西会渲染在炕中,<div class="swiper-slide">Slide 2</div>把它做成一个组件 -->
<!-- SwiperItem的内容要通过内容去填充 -->
<SwiperItem  v-for="item in bannerList" :key="item.id">
   <img :src='item.imageurl' alt/>
</SwiperItem>
</Swiper>
  </div>
</template>
<script>
/* 引入vue的弄出来的组件 不要忘记SwiperItem */
// 使用../相对路径时,如果当前组件位置发生变化
// 那么相对路径也需要去修改,如果使用@别名的样式。就不需要去修改这个路径了
// @这个是引入组件,不要搞错了,npm下载的不需要去引入
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
// 内视(对象)做解构赋值拿出暴露的东西
import { Swiper, SwiperItem } from '@/components/Swiper'
// 引入cartoon.js暴露出来的文件
import { getBanner } from '@/api/cartoon'
// 引入之后文件对象,把它暴露出来
export default {
  // Swiper:Swiper
  components: {
    Swiper,
    // 注册当前的局部组件
    SwiperItem
  },
  data () {
    return {
      // 需要使用什么的数据,考虑哪些点
      // 数据放在那里 data?props?computed?state?geeter
      // 数据的格式 string?object?number?array?
      // 只在首页中
      bannerList: []
    }
  },
  methods: {
    onChange (index) { // 传过来一个index
      console.log('hello', index)
      // console.log(this.$ref.my-swiper)这种取是有问题的,它的key是一个特殊的字符,要用中括号的方式
      // VueComponent这个是vue组件的实列有loop:true,autoplay:true
      console.log(this.$refs['my-swiper'])// 标记着是组件的实例
    }
  },
  // created () { // 一般在created中发送ajax请求
  //   fetch('/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123').then(response => response.json()).then(res => {
  //     console.log(res)
  //   })
  // fetch('https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123').then(response => response.json()).then(res => {
  //   console.log(res)
  // })
  // fetch('https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1').then(response => response.json()).then(res => {
  //   console.log(res)
  // })
  // fetch('https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1').then(response => response.json()).then(res => {
  //   console.log(res)
  // })
  // // 这种的请求仍然是直接去请求这个接口,仍然是跨域的
  // fetch('http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp').then(response => response.json()).then(res => {
  //   console.log(res)
  // })
  // http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp
  // fetch('/migu/lovev/miguMovie/data/seeFilmData.jsp', { method: 'POST' }).then(response => response.json()).then(res => {
  //   console.log(res)
  // })
  // fetch('https://localhost:9090/wy/j/operation/homepage.json', { method: 'POST' }).then(response => response.json()).then(res => {
  //   console.log(res)
  // })
  // fetch('https://localhost:9090/wy/j/operation/homepage.json', { method: 'POST' }).then(response => response.json()).then(res => {
  //   console.log(res)
  // })
  // http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5
  //     fetch('/weibo/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5', { method: 'GET' }).then(response => response.json()).then(res => {
  //       console.log(res)
  //     })
  //     // https://m.study.163.com/j/operation/homepage.json
  //     fetch('/wyt/j/operation/homepage.json', { method: 'POST' }).then(response => response.json()).then(res => {
  //       console.log(res)
  //     })
  // }
  // 调用组件请求好的接口
  created () {
  // 调用getBanner()请求好的接口
    getBanner().then(res => {
      // console.log(res) 因为response.data的数据,就是一个对象
      // 漫画岛有code的字段。这个字段是200。这个接口是可以的
      if (res.code === 200) {
      // ok
        this.bannerList = res.info
      } else {
      // 不OK,就报错
        alert(res.code_msg)
      }
    }).catch(() => {
      alert('网络异常,请稍后重试')
      // console.log(err)不使用会报错 如handle-callback-err
    }) // 调用之后返回的是Promise
  }
}
</script>
<style lang="scss" scoped>
// 引用公用的minx.scss的文件
@import "@/assets/style/mixins.scss";
 .page-home{
  //  position: relative;
  @include border-bottom;
   display: flex;
   flex-direction: column; // 并且该布局内部的子控件排列方式是纵向排列，
   height: 100%;
   .index-header{
     display:flex;
     height: 44px;
     justify-content: space-between;
     align-items: center;
     padding: 0 20px;
      // 在头部加1px的像素问题 1px的像素比,它的官网drp是2,font-size是75px更粗一些,我们的drp是1
     //  border-bottom: 1px solid #e9e9e9;
     //  实现底边框1px的像素边框问题
     //  很多地方需要用,每个需要用就要给他加边框线,就是复用
    //  &::after{// &是表示继承
    //   content: '';
    //   position: absolute;
    //   width: 100%;
    //   height: 1px;
    //   left: 0;
    //   bottom: 0;
    //   background: #e9e9e9;
    //   transform: scaleY(0.5);
    // }
     .header-user{
       .user-btn{
         width: 25px;
         height: 25px;
         background: url(../../assets/icon/user-btn.png) no-repeat;
         background-size: 100%;
       };
     };
     .header-logo{
         width: 92px;
         height: 28px;
         background: url(../../assets/icon/mlogo.png) no-repeat;
         background-size: 100%;
     }
     .header-search{
         width:  25px;
         height: 25px;
         background: url(../../assets/icon/search.png) no-repeat;
         background-size: 100%;
     }
   };
   a{
     text-decoration: none;
   };
//    .swiper-container .swiper-wrapper .swiper-slide {
//     height: 4.8rem;
//     margin: 0 auto;
//     background-repeat: no-repeat;
//     background-size: cover
// }

// .swiper-container .swiper-pagination .swiper-pagination-bullet {
//     opacity: 1;
//     vertical-align: middle;
//     width: 6px;
//     height: 6px;
//     margin: 0 .13333333rem;
//     border-radius: 50%;
//     background-color: hsla(0,0%,100%,.7)
// }
// .swiper-container .swiper-pagination .swiper-pagination-bullet-active {
//     width: .53333333rem;
//     height: .26666667rem;
//     margin: 0;
//     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUBAMAAAANaGKIAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/Pzs7Oyvr68AAADW1tYAAAD///8YAGtvAAAAD3RSTlMABBwyDQgVCyf2zXAQoC3PT9+CAAAAd0lEQVQY02PACQSRAFSIUTS83AUKyksDBcCCojVpSnCQdjwQrDAkqc8YDl6ouQqAFDp1r/wPB7N2qICUimfc/48E/rYVAgVjtP+jgE1HgUaGdaEKrkgVYGAs60QVnJGOXRCrdmwW4XISpuNxeBMzQHAEHWYg4wIAe7Sz99Wx/OUAAAAASUVORK5CYII=) no-repeat 50%;
//     background-size: contain
// }
  .my-swiper img{
    //如果图片太大可以用width:100%
    width: 100%
  }
 }</style>
 <style lang="scss">
  .swiper-container{
     width: 100%;
     // 要除以heigth/2,这里的规则
     height: 180px;
     img{
       width: 100%;
     }
    .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    //75/2* 0 .13333333rem=5px
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0,0%,100%,.7);
    }
    // 高亮
    // swiper-slide-duplicate-active不是这个不要搞错了
    // swiper-pagination-bullet-active
    .swiper-pagination-bullet-active {
      width: 20px;
      height: 10px;
      background:url("../../assets/icon/dot.png") no-repeat;
      background-size: 100%;
    }
    // img{
    //   background-size: 100%;
    // }
};
 </style>
