<template>
    <div>
        <Header :menu="menu"/>
        <Footer/>
    </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Header, Footer
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
        }
    }
    
}
</script>

<style scoped>

</style>