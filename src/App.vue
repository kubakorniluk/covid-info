<script setup>
    import { onMounted } from 'vue'
    import Header from './components/Header.vue';
    import Main from './components/Main.vue';
    import { fetchInitialData }from './data/store';

    onMounted(() => {
        fetchInitialData();
    })
</script>

<template>
    <Header />
    <Main />
</template>

<style>
    *, *:before, *:after { box-sizing: border-box; }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #ffffff;
        width: 100%;
        height: auto;
        font-family: 'Jost', sans-serif;
        letter-spacing: .05rem;
    }
    #app {
        display: flex;
        flex-direction: column;
    }
    a { text-decoration: none; }
    *:focus { outline: 0; }
    /* * {
        outline: 1px solid #f00 !important;
    } */
</style>
