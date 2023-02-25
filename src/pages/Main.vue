<template>
    <div class="main-page">
        <div class="main-page__info">
            <h1 class="main-page__link">continue shopping at <a href="https://aceysallaround.com/" class="main-page__link_actualy">ACEYSALLAROUND.COM</a></h1>
        </div>
        <div class="main-page__content">
            <img src="../images/monkeys.svg" alt="aceys" class="main-page__content__image_monkey">
            <h2 class="main-page__content_trap">sign up for giveaway</h2>
        </div>
        <FormCustomer/>
    </div>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer'
import FormCustomer from '@/components/FormCustomer'
import { url } from 'inspector';

export default {
    components: {
        Footer, FormCustomer
    }
}
</script>

<style scoped>

.main-page {
    display: flex;
    flex-direction: column;
    margin: 0 auto 600px;
}
.main-page__info {
    display: flex;
    justify-content: flex-end;
    margin: 0;
}
.main-page__link {
    font-family: 'Sequel Sans';
    font-style: normal;
    font-weight: 380;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    margin: 21px 29px 0 0;
    max-width: 305px;
    text-align: end;
}

.main-page__link_actualy {
    font-style: normal;
    font-weight: 380;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
}

.main-page__content {
    display: flex;
    flex-direction: column;
    margin: 0 auto 50px;
}

.main-page__content_trap {
    margin: auto;
    text-align: center;
    max-width: 630px;
    border: 2px solid black;
    text-transform: uppercase;
    font-family: 'Sequel Sans';
    font-style: normal;
    font-weight: 355;
    font-size: 45px;
    line-height: 53px;
    color: #000000;
}

@media screen and (max-width: 660px){
    .main-page__content_trap {
        max-width: 300px;
        font-style: normal;
        font-weight: 355;
        font-size: 20px;
        line-height: 24px;
    }
}

.main-page__content__image_monkey {
    max-width: 100%;
    max-height: auto;
    margin: auto;
}

@media screen and (min-width: 320px) and (max-width: 676px) {
    .main-page__content__image_monkey {
        max-width: 371px;
    }
}

@media screen and (min-width: 676px) {
    .main-page__content__image_monkey {
        max-width: 676px;
    }
}

@media screen and (min-width: 878px) {
    .main-page__content__image_monkey {
        max-width: 763px;
    }
}


.main-page__content__image_user-info {
    max-width: 850px;
    max-height: 760px;
    padding-right: 50px;
}

</style>