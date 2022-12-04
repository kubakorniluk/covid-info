<script setup>
    import { store } from '../data/store';
</script>

<template>
    <!-- <h2 class="section-title">Daily statistics</h2> -->
    <section class="daily-stats">
        <div class="stats">
            <h3 class="stats__heading">{{ store.dailyConfirmed }}</h3>
            <p class="stats__subheading">Confirmed</p>
        </div>
        <div class="stats">
            <h3 class="stats__heading">{{ store.dailyDeaths }}</h3>
            <p class="stats__subheading">Deaths</p>
        </div>
        <div class="stats">
            <h3 class="stats__heading">{{ store.dailyRecovered }}</h3>
            <p class="stats__subheading">Recovered</p>
        </div>
    </section>
</template>

<style scoped>
    .section-title {
        display: block;
        width: 100%;
        margin: 0;
        padding: 3rem 0 0 0;
        text-align: center;
        color: rgb(24, 24, 24);
        font-weight: 800;
        text-transform: uppercase;
        font-size: 1.45rem;
    }
    .daily-stats {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        /* gap: 4rem; */
        width: 100%;
        margin: 0;
        padding: 3rem 0;
        width: 100%;
    }
    .stats {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin: 0;
        padding: 0
    }
    .stats__heading {
        margin: 0;
        color: rgb(24, 24, 24);
        font-weight: 800;
        font-size: 3rem;
    }
    .stats__subheading {
        margin: 0;
        color: rgb(150, 150, 160);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1rem;
    }

    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        
        .daily-stats {
            flex-direction: column;
        }
        .stats {
            width: 100%;
        }
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        .daily-stats {
            flex-direction: column;
        }
        .stats {
            width: 100%;
        }
    }
    /* @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) {
        
    } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) {
        
    } */

</style>