<script setup>
    import Navbar from './Navbar.vue';
</script>

<template>
    <header class="header">
        <div class="overlay">
            <Navbar />
        </div>
    </header>
</template>

<style scoped>
    .header {
        position: relative;
        display: block;
        width: 100%;
        min-height: 75vh;
        max-height: 75vh;
        background-image: url('../assets/img/background.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }
    .overlay {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 2rem 8rem;
    }

    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        .overlay {
            padding: 1.5rem
        }
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        .overlay {
            padding: 1.5rem; 
        }
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        .overlay {
            padding: 2rem 4rem; 
        }
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) {
        .overlay {
            padding: 3rem 6rem; 
        }
    } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) {
        .overlay {
            padding: 2rem 6rem; 
        }
    }
</style>