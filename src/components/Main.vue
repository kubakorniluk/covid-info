<script setup>
    import DailyStats from './DailyStats.vue';
</script>

<template>
    <main class="main">
        <DailyStats />
    </main>
</template>

<style scoped>

    .main {
        display: block;
        width: 100%;
        height: auto;
        margin: 0;
        background-color: rgb(255 , 255, 255);
        padding: 2rem 8rem;
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        .main {
            padding: 1.5rem
        }
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        .main {
            padding: 1.5rem; 
        }
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        .main {
            padding: 2rem 4rem; 
        }
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) {
        .main {
            padding: 3rem 6rem; 
        }
    } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) {
        .main {
            padding: 2rem 6rem; 
        }
    }
</style>
