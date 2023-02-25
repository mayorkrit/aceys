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

@font-face {
  font-family: 'Sequel Sans';
  src: url(../src/Sequel-Sans-TTF/Sequel\ Sans\ Black\ Obl\ Body.ttf);
  font-style: normal; 
  font-weight: normal;  
}

@font-face {
  font-family: 'Sequel Sans';
  src: url(../src/Sequel-Sans-TTF/Sequel\ Sans\ Book\ Obl\ Body.ttf);
  font-style: normal; 
  font-weight: normal;  
}

* {
  box-sizing: border-box;
}

.body {
  /* font-family: 'Usuzi', sans-serif;
  font-family: 'Usuzi Italic', sans-serif;
  font-family: 'Parisienne', sans-serif; */
  font-family: 'Sequel Sans';
}
.app {
  max-width: 1440px;
  margin: 0;
}
</style>