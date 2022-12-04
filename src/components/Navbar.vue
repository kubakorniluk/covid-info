<script setup>
    import { ref, watchEffect, computed } from 'vue';
    import Logo from './Logo.vue';
    import Menu from './Menu.vue';

    const initialScreenSize = window.innerWidth;
    const screenSize = ref(initialScreenSize);

    // const handleResize = (event) => {
    //     console.log(window.innerWidth)
    //     screenSize.value = window.innerWidth
    // }
    // window.addEventListener('resize', handleResize())

    const handleMenu = computed(() => ( screenSize.value < 768 ) ? true : false );
</script>

<template>
    <nav class="navbar">
        <Logo />
        <Menu :mobile="!handleMenu"/>
    </nav>
</template>

<style scoped>
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
</style>