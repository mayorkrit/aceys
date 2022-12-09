<template>
    <div>
        <Header :menu="menu"/>
        <Cart :countries="countries"/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Cart from '@/components/Cart'
import Footer from '@/components/Footer'

export default {
    components: {
        Header, Cart, Footer,
    },
    data() {
        return {
            menu: [
        {
            name: 'CATALOGUE',
            path: '/catalogue'
        },
        
        {
            name: 'CART',
            path: '/cart'
        },

        {
            name: 'ABOUT',
            path: '/about'
        },
    ],

    countries: [
        {id: 1, name: 'PANAMA'},
        {id: 2, name: 'RUSSIA'},
        {id: 3, name: 'ISRAEL'},
        {id: 4, name: 'USA'},
        {id: 5, name: 'KAZAKHSTAN'},
        {id: 6, name: 'ARMENIA'},
        {id: 7, name: 'GEORGIA'},
        {id: 8, name: 'GERMANY'},
        {id: 9, name: 'FRANCE'},
        {id: 10, name: 'SOUTH AFRICA'},
        {id: 11, name: 'SOUTH KOREA'},
        {id: 12, name: 'CHINA'},
        {id: 13, name: 'AUSTRALIA'},
        {id: 14, name: 'BELGIUM'},
        {id: 15, name: 'AUSTRALIA'},
        {id: 16, name: 'BELGIUM'},
        {id: 17, name: 'BRAZIL'},
        {id: 18, name: 'UK'},
        {id: 19, name: 'MEXICO'},
        {id: 20, name: 'NORWAY'},
        {id: 21, name: 'PORTUGAL'},
        {id: 22, name: 'SPAIN'},
        {id: 23, name: 'ROMANIA'},
        {id: 24, name: 'SINGAPORE'},
        {id: 25, name: 'SWEDEN'},
        {id: 26, name: 'SWITZERLAND'},
        {id: 27, name: 'THAILAND'},
        {id: 28, name: 'VIETNAM'},
        {id: 29, name: 'COLOMBIA'},
        {id: 30, name: 'COSTA RICA'},
        {id: 31, name: 'DENMARK'},
        {id: 32, name: 'FINLAND'},
        {id: 33, name: 'ETHIOPIA'},
        {id: 34, name: 'GREECE'},
        {id: 35, name: 'ITALY'},
        {id: 36, name: 'JAPAN'},
        {id: 37, name: 'LUXEMBOURG'},
        {id: 38, name: 'NETHERLANDS'}
    ]
        }
    }
}
</script>


<style>



</style>