// 引入Swiper和SwiperItem的vue
import Swiper from './Swiper.vue'
import SwiperItem from './SwiperItem.vue'
// 暴露引入的
// export default {
//   Swiper,
//   SwiperItem
// }
// ESM的规范看上去想解构赋值,但是模块不是默认暴露
// 其实不是,实需要做命名暴露
// export const Swiper
// export const SwiperItem
// 暴露多个对象
export {
  Swiper,
  SwiperItem
}
