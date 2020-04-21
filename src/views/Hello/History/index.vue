<template>
    <div class="page-history">
        <h1>历史页面的父亲</h1>
        <!--渲染父子下面的儿子-->
        <router-view/>
    </div>
</template>
<script>
export default {
  name: 'History'
}
</script>
