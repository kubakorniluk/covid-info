<script setup>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faVirusCovid } from '@fortawesome/free-solid-svg-icons';

    library.add( faVirusCovid );
</script>

<template>
    <div class="logo">
        <font-awesome-icon icon="fa-solid fa-virus-covid" class="logo__icon"/>
        <a href="#" class="logo__title">Covid Info</a>
    </div>
</template>

<style scoped>
    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
    .logo__icon {
        margin: 0;
        color: rgb(200, 37, 82);
        font-size: 2.5rem;
    }
    .logo__title {
        margin: 0;
        color: rgb(255, 255, 255);
        font-size: 1.75rem;
        font-weight: 800;
    }
</style>