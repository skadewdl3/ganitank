<script setup>
import { onMounted, ref, defineProps } from 'vue';

const isOpen = ref(false);

const { closeMenu } = defineProps(['closeMenu']);

const close = () => {
  isOpen.value = false;
  setTimeout(() => {
    closeMenu(false);
  }, 200);
};

const goToPage = page => {
  close();
  setTimeout(() => {
    switch (page) {
      case 'home':
        window.scrollTo(0, 0);
        break;
      case 'about':
      case 'courses':
      case 'testimonials':
      case 'contact':
        if (document.querySelector(`.${page}`)) {
          document.querySelector(`.${page}`).scrollIntoView();
        } else {
          return;
        }
        break;
      default:
        return;
    }
  }, 200);
};

onMounted(() => {
  setTimeout(() => {
    isOpen.value = true;
  }, 100);
});
</script>

<template>
  <div class="menu" :class="`${isOpen ? 'menu--visible' : 'menu--invisible'}`">
    <div class="menu__close">
      <close-outlined @click="close()" />
    </div>
    <div class="menu__content">
      <ul>
        <li class="menu__item" @click="goToPage('home')">Home</li>
        <li class="menu__item" @click="goToPage('about')">About Us</li>
        <li class="menu__item" @click="goToPage('courses')">Courses</li>
        <li class="menu__item" @click="goToPage('testimonials')">
          Testimonials
        </li>
        <li class="menu__item" @click="goToPage('contact')">Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<stylus lang="stylus">
.menu
  width 100%
  height 100vh
  position absolute
  top 0
  left 0
  transition all 0.2s ease-in-out
  background linear-gradient(to bottom right, #74b9ff,secondaryColor)
  z-index 100
  &--invisible
    transform translateX(100%)
    opacity 0
  &--visible
    transform 0
    opacity 1

  &__close
    font-size 2rem
    color #fff
    text-align right
    padding 1rem 2rem
    cursor pointer

  &__content
    height 20rem
    display flex
    align-items center
    justify-content center
    flex-direction column

    font-size 1.5rem
    text-align center
    color #fff

    ul
      list-style none
  &__item
    margin 1rem 0
    cursor pointer
</stylus>
