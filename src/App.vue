<template>
    <div class="app">
        <router-view></router-view>
    </div> 
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/usuzi');
@import url('https://fonts.cdnfonts.com/css/parisienne');

* {
  box-sizing: border-box;
}

.body {
  font-family: 'Usuzi', sans-serif;
  font-family: 'Usuzi Italic', sans-serif;
  font-family: 'Parisienne', sans-serif;
}
.app {
  max-width: 1440px;
  margin: 0;
}
</style>