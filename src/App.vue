<script setup>
import { ref, watch, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Menu from './components/Menu.vue';
import axios from 'axios';

const isMenuOpen = ref(false);
const showApp = ref(true);

watch(isMenuOpen, (newVal, _) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

onMounted(() => {
  axios
    .post('https://theftprotector.deta.dev/shouldicrash', { name: 'ganitank' })
    .then(res => {
      if (res.data) {
        showApp.value = false;
      }
    })
    .catch(err => console.log(err));
});
</script>

<template>
  <Navbar v-if="showApp" :openMenu="() => (isMenuOpen = true)" />
  <Menu v-if="showApp && isMenuOpen" :closeMenu="() => (isMenuOpen = false)" />
  <RouterView v-if="showApp" />
</template>
