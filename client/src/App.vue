<template>
    <div>
        <HeaderMenu />
        <Sidebar />
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import HeaderMenu from './components/HeaderMenu.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;600&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&family=Zen+Dots&display=swap');
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    overflow: hidden;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
