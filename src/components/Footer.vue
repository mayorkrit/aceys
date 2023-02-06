<template>
    <footer class="footer">
            <a href="#" class="footer__links">Privacy Policy</a>
            <a href="#" class="footer__links">FAQ</a>
            <a href="#" class="footer__links">Shipment</a>
            <a href="#" class="footer__links">Contact</a>
    </footer>
</template>

<script>


</script>

<style>

.footer {
    padding: 0 64px 29px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.footer__links {
    text-decoration: none;
    color: #DF4ADC;
    text-transform: uppercase;
    font-family: 'Sequel Sans';
    font-style: normal;
    font-weight: 355;
    font-size: 30px;
    line-height: 35px;
}

@media (max-width: 767px) {
    .footer {
        flex-direction: column;
    }
}

</style>