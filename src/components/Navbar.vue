<script setup>
import { ref, watch, defineProps } from 'vue';
const currentPage = ref('home');
const { openMenu } = defineProps(['openMenu']);
// const isDropdownOpen = ref(false);
const setCurrentPage = page => {
  currentPage.value = page;
};

watch(currentPage, (newVal, _) => {
  switch (newVal) {
    case 'home':
      window.scrollTo(0, 0);
      break;
    case 'about':
    case 'courses':
    case 'testimonials':
      if (document.querySelector(`.${newVal}`)) {
        document.querySelector(`.${newVal}`).scrollIntoView();
      } else {
        return;
      }
    default:
      return;
  }
});
</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <span>GanitAnk</span>
    </div>
    <div class="navbar__links">
      <div
        class="navbar__link navbar__link--about"
        @click="setCurrentPage('about')"
      >
        About Us
      </div>
      <div
        class="navbar__link navbar__link--courses"
        @click="setCurrentPage('courses')"
      >
        Courses
      </div>
      <div
        class="navbar__link navbar__link--testimonials"
        @click="setCurrentPage('testimonials')"
      >
        Testimonials
      </div>
    </div>

    <div class="navbar__left">
      <!-- <div class="navbar__links-dropdown">
        <div
          class="navbar__links-dropdown__current"
          @click="isDropdownOpen = true"
        >
          <span>
            {{ currentPage }}
          </span>
          <span class="navbar__links-dropdown__current--icon">
            <down-outlined />
          </span>
        </div>
        <ul
          class="navbar__links-dropdown__list"
          :class="`${
            isDropdownOpen
              ? 'navbar__links-dropdown__list--visible'
              : 'navbar__links-dropdown__list--invisible'
          }`"
          @click="isDropdownOpen = false"
        >
          <li class="navbar__link" @click="setCurrentPage('home')">Home</li>
          <li class="navbar__link" @click="setCurrentPage('about')">
            About Us
          </li>
          <li class="navbar__link" @click="setCurrentPage('courses')">
            Courses
          </li>
          <li class="navbar__link" @click="setCurrentPage('testimonials')">
            Testimonials
          </li>
        </ul>
      </div> -->
      <div class="navbar__menu">
        <button class="navbar__menu-trigger" @click="openMenu(true)">
          <menu-outlined />
        </button>
      </div>
      <div class="navbar__contact">
        <button class="navbar__cta">Contact Us</button>
      </div>
    </div>
  </nav>
</template>

<style lang="stylus">
.navbar
  width 100%
  display flex
  align-items center
  justify-content space-between
  position sticky
  z-index 90
  top 0
  left 0
  background #fff

  &__menu-trigger
    cursor pointer

  +atTablet()
    padding 0.5rem 5rem
  +atDesktop()
    padding 0.5rem 10rem
  +atMobile()
    padding 0.5rem 2rem
  +mobile()
    padding 0.5rem 1rem

  &__left
    display flex
    align-items center
    position relative

  &__menu
    +atTablet()
      display none
    &-trigger
      font-size 1.3rem
      color accentColor
      background #fff


  &__logo
    span
      font-size 2.3rem
      font-family 'Megrim', 'Poppins', sans-serif
      font-weight bold
      cursor pointer

  &__links
    align-items center
    justify-content space-between
    font-size 1rem
    +mobile()
      display none
    +atMobile()
      display none
    +atTablet()
      display flex

  &__links-dropdown
  display block
    +mobile()
      display none
    +atTablet()
      display none
    margin-right 2rem
    font-size 1rem

    &__list
      cursor pointer
      width 18rem
      list-style none
      text-align right
      position absolute
      top 0
      right 0
      background #fff
      transition all .2s ease-in-out
      transform-origin 50% 0
      &--invisible
        transform scaleY(0)
      &--visible
        transform scaleY(1)
    &__current
      cursor pointer
      font-weight bold
      text-transform capitalize
      diplay flex
      align-items center
      &--icon
        margin-left 0.5rem


  &__link
    margin 0 1rem
    &:hover
      font-weight bold
      cursor pointer

  &__contact
    display none
    +atTablet()
      display block



  &__cta
    padding 0.5rem 1rem
    border-radius 0.5rem
    cursor pointer
    font-size 0.9rem
    border solid 0.1rem accentColor
    background #fff
    color accentColor
    font-weight bold
    transition all .2s ease-in-out


    &:hover
      border solid 0.1rem #fff
      background accentColor
      color #fff
</style>
