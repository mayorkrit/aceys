<template>
    <div>
        <Header :menu="menu"/>
        <section class="catalogue">
            <div class="anime"></div>
            <img src="../images/hoodie.svg" alt="hoodie" class="catalogue__hoodie">
            <div class="catalogue__hoodie_info" v-for="hoodie in hoodies">
                <button 
                    class="btn"
                    @click="showDialog">buy
                </button>
                <my-dialog v-model:show="dialogVisible">
                    <div class="buy-buttons">
                        <button class="buy-button">add to cart</button>
                        <img src="../images/Rectangle.svg" alt="rectangle">
                        <button class="buy-button">buy now</button>
                    </div>
                </my-dialog>
            </div>
        </section>
        <Footer/>
    </div>

</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MyDialog from '@/components/MyDialog'

export default {
    components: {
        Header, Footer, MyDialog
    }
}
</script>

<style>

.catalogue {
    position: relative;
    display: flex;
    margin: 150px auto 1000px;
    max-width: 1000px;
}

p {
    margin: 30px 0 0;
}

.catalogue__hoodie_info {
    font-style: normal;
    font-weight: 380;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    font-family: 'Usuzi', sans-serif;
    color: #0015FF;
}

.btn {
    margin: 20px 0 0;
    background: none;
    border: 1px solid black;
    border-radius: 12px;
}

.btn:hover {
    opacity: 0.6;
}

.buy-button {
    background: #14EC1C;;
    border: none;
    font-style: normal;
    font-weight: 380;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    color: #FFFFFF;
}

.buy-buttons {
    display: flex;
    flex-direction: column;
}

.buy-button:hover {
    opacity: 0.8;
}

.anime {
    position: absolute;
    top: 0px;
    right: 0;
    width: 800px;
    height: 800px;
    /* background: #2f80ed; */
    background: coral;
    z-index: -1;
    animation: rotation 20s linear infinite;
    overflow: hidden;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

</style>