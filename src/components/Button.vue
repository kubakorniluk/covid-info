<script setup>

    const props = defineProps({
        title: String
    })

    const { title } = props;
</script>

<template>
    <button class="button">
        {{ title }}
    </button>
</template>

<style scoped>
    .button {
        display: block;
        margin: 0;
        background-color: rgb(200, 37, 82);
        border: none;
        border: 2px solid transparent;
        border-radius: 2rem;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Jost', sans-serif;
        padding: .4rem 1.2rem;
        cursor: pointer;
    }
    .button:hover {
        border: 2px solid rgb(200, 37, 82);
        color: rgb(200, 37, 82);
        background-color: transparent;
    }
</style>