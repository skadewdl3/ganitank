<script setup>
const goToLearning = () => {
  if (document.querySelector('.contact')) {
    document.querySelector('.contact').scrollIntoView();
  } else {
    return;
  }
};
</script>

<template>
  <div class="landing__grid">
    <div class="landing__mobile-img">
      <img src="./../assets/landing.svg" alt="Landing Image" />
    </div>
    <div class="landing__text">
      <div class="landing__text--main">Math is not just about finding 𝑥</div>
      <div class="landing__text--sub">
        It's about learning that every problem has a solution ...
      </div>
      <div class="landing__cta-container">
        <button class="landing__cta" @click="goToLearning">
          <span>Start Learning</span>
          <span class="landing__cta--icon"><right-outlined /></span>
        </button>
      </div>
    </div>
    <div class="landing__img">
      <img src="./../assets/landing.svg" alt="Landing Image" />
    </div>
  </div>
</template>

<style lang="stylus">
.landing
  &__mobile-img
    +atTablet()
      display none
    text-align center
    img
      +mobile()
        width 50%
      +tablet()
        width 40%
      display none
      display inline-block


  &__grid
    display flex
    align-items center
    justify-content space-between
    +atMobile()
      padding 2rem 2rem
      flex-direction column
      display block
    +atTablet()
      padding 4rem 4rem
      flex-direction row
      display flex
    +atDesktop()
      padding 4rem 10rem
    +mobile()
      padding 2rem 1rem
      flex-direction column

    padding-bottom 0

  &__img
    +atMobile()
      display none
    +atTablet()
      display block
    +atDesktop()
      display block
    +mobile()
      display none

    img
      +atTablet()
        width 100%

  &__text
    +mobile()
      text-align center
    +atMobile()
      text-align center
    +atTablet()
      text-align left
    &--main
      font-size 4rem
      font-weight 700
      +atMobile()
        width 100%
        font-size 2rem
      +atTablet()
        width 80%
        font-size 3rem
      +atDesktop()
        font-size 4rem
      +mobile()
        width 100%
        font-size 2rem
    &--sub
      margin 1rem 0
      font-size 2rem
      font-weight 300
      +atMobile()
        width 100%
        font-size 1.2rem
      +atTablet()
        width 80%
      +atDesktop()
        width 90%
        font-size 2rem
      +mobile()
        width 100%
        font-size 1.2rem

  &__cta-container
    display flex
    width 100%
    +mobile()
      justify-content center
    +atMobile()
      justify-content center
    +atTablet()
      justify-content flex-start


  &__cta
    background accentColor
    display flex
    align-items center
    color #fff
    border-radius 0.5rem
    padding 0.5rem 2rem
    font-size 1.2rem
    border solid 0.1rem #fff
    margin 2rem 0
    cursor pointer
    transition all .2s ease-out


    &:hover
      border solid 0.1rem accentColor
      background #fff
      color accentColor

    &--icon
      font-size 0.9rem
      margin-left 0.5rem
</style>
