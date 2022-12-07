<template>
    <section class="cart">
        <h1 class="title">"Aceys All Around"</h1>
        <div class="countries" v-for="country in countries">
            {{country.name}}
        </div>
    </section>
</template>


<script>

export default {
    props: {
        countries: {
            type: Object,
            required: true
        }
    }
}
</script>


<style>

.cart {
    display: flex;
    flex-direction: column;
    margin: 600px auto 0;
}

.title {
    text-align: center;
    font-family: 'Parisienne';
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 131px;
    color: #0015FF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 0 400px 0;
}

.countries {
    font-style: normal;
    font-weight: 380;
    font-size: 48px;
    line-height: 57px;
    text-align: center;
    color: #0015FF;
    flex-wrap: wrap;
    font-family: 'Usuzi', sans-serif;
}
</style>