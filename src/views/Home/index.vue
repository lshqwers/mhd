<template>
<div class="page-home">
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
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
 .page-home{
   display: flex;
   flex-direction: column; // 并且该布局内部的子控件排列方式是纵向排列，
   height: 100%;
   .index-header{
     display:flex;
     height: 44px;
     justify-content: space-between;
     align-items: center;
     padding: 0 20px;
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
   }
 }

</style>
