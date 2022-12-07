<template>
    <div class="header">
        <div class="header__images">
            <img src="../images/AA.svg" alt="AA" class="header__logo">
            <img src="../images/globus.svg" alt="global" class="header__logo-global">
        </div>
        
        <div class="header__links">
            <a 
            class="header__link"
            :href="element.path"
            v-for="(element, i) of menu"
            :key="i">{{element.name}}</a> 
        </div>
        
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        menu: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

.header {
    /* position: fixed;
    top: 0;
    left: 0; */
    display: flex;
    height: 153px;
    background: #fff;
    justify-content: space-between;
}

.header__logo {
    margin: 39px 32px 39px;
    width: 62px;
    height: 69px;

}

.header__logo-global {
    height: 32px;
    width: 32px;
    margin: 39px 0 0;
}

.header__link {
    margin: 0 100px 0 0;
    text-decoration: none;
    font-weight: 300;
    font-size: 48px;
    color: black;
    line-height: 57px;
    font-family: 'Usuzi', sans-serif;
    text-align: center;
}

/* .header__link:visited {
    color: blue;
} */

.header__images {
    display: flex;
    justify-content: space-between;
}

.header__links {
    display: flex;
    justify-content: space-between;
    margin: 53px 0 0 0;
}
</style>