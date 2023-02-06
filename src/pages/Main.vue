<template>
    <div class="main-page">
        <div class="main-page__info">
            <h1 class="main-page__link">continue shopping at <a href="#" class="main-page__link">ACEYSALLAROUND.COM</a></h1>
        </div>
        <div class="main-page__content">
            <img src="../images/monkeys.svg" alt="aceys" class="main-page__content__image_monkey">
            <h2 class="main-page__content_trap">get to know first</h2>
            <img src="../images/texts.svg" alt="dontbeshy" class="main-page__content__image_user-info">
        </div>
        <FormCustomer/>
    </div>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer'
import FormCustomer from '@/components/FormCustomer'

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
    margin-bottom: 300px;
}
.main-page__info {
    display: flex;
    justify-content: flex-end;
    margin: 30px 30px 0;
}
.main-page__link {
    font-family: 'Sequel Sans';
    font-style: normal;
    font-weight: 380;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    color: inherit;
}

.main-page__content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.main-page__content_trap {
    margin: auto;
    text-align: center;
    width: 340px;
    border: 1px solid black;
    text-transform: uppercase;
    font-family: 'Sequel Sans';
    font-style: normal;
    font-weight: 355;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
}
.main-page__content__image_monkey {
    max-width: 100%;
    max-height: auto;
}

/* @media screen and (min-width: 320px) and (max-width: 676px) {
    .main-page__content__image_monkey {
        max-width: 320px;
    }
}

@media screen and (min-width: 676px) {
    .main-page__content__image_monkey {
        max-width: 676px;
    }
}

@media screen and (min-width: 878px) {
    .main-page__content__image_monkey {
        max-width: px;
    }
} */
.main-page__content__image_user-info {
    max-width: 850px;
    max-height: 760px;
    padding-right: 50px;
}

</style>