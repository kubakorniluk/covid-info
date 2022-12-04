<script setup>
    import Button from './Button.vue';

    const props = defineProps({
        mobile: Boolean
    })
</script>

<template>
    <ul class="menu" v-if="mobile">
        <li class="menu__item">Statistics</li>
        <li class="menu__item">Countries</li>
        <li class="menu__item">Diagrams</li>
        <Button title="Search" />
    </ul>
    <Button v-else title="Search" />
</template>

<style scoped>
    .menu {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3rem;
    }
    .menu__item {
        margin: 0;
        color: rgb(255, 255, 255);
        font-size: 1rem;
        cursor: pointer;
        font-weight: 500;

    }
    .menu__item:hover {
        color: rgb(200, 37, 82);
    }
</style>