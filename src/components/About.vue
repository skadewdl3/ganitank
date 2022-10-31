<script setup></script>

<template>
  <div class="about__wrapper">
    <div class="about">
      <div class="about__title">Our Journey, Our Mission</div>

      <div class="about__container--mobile">
        <div class="about__img--mobile">
          <img src="./../assets/sir.png" alt="" />
        </div>
        <div class="about__text--mobile">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            ipsum congue, sagittis massa nec, finibus dolor. Nullam auctor nibh
            mattis efficitur semper. Praesent lectus sem, sagittis sed mi et,
            scelerisque malesuada leo. Donec vel sapien sodales, egestas quam
            nec, vehicula nulla.
          </div>
        </div>
      </div>

      <div class="about__container">
        <div class="about__text">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            ipsum congue, sagittis massa nec, finibus dolor. Nullam auctor nibh
            mattis efficitur semper. Praesent lectus sem, sagittis sed mi et,
            scelerisque malesuada leo. Donec vel sapien sodales, egestas quam
            nec, vehicula nulla.
          </div>
        </div>
        <div class="about__img">
          <img src="./../assets/sir.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.about
  +mobile()
    padding 5rem 1rem
  +atMobile()
    padding 8rem 2rem
  +atTablet()
    padding 10rem 5rem
  +atDesktop()
    padding 10rem 15rem
  &__title
    color #fff
    font-family 'Megrim', 'Poppins', sans-serif
    font-size 3rem
    text-align center
    +mobile()
      margin-bottom 2rem
    +atMobile()
      margin-bottom 2rem
    +atTablet()
      margin-bottom 0
  &__wrapper
    background linear-gradient(to bottom right, #74b9ff,secondaryColor)
    +atTablet()
      clip-path polygon(0 0, 100% 20%, 100% 100%, 0 80%)
    +atMobile()
      clip-path polygon(0 0, 100% 10%, 100% 100%, 0 90%)
    +mobile()
      clip-path polygon(0 0, 100% 5%, 100% 100%, 0 95%)

  &__text
    background #fff
    height 15rem
    border-radius 0.5rem
    padding 2rem
    font-size 1rem
    overflow-x hidden
    overflow-y hidden

    &--mobile
      +atTablet()
        display none
      +atMobile()
        padding 1rem 2rem
        font-size 1rem
      +mobile()
        padding 1rem 2rem
        font-size 1rem

    div
      +atTablet()
        width 60%
      +atDesktop()
        width 70%

  &__container
    margin 10rem 0
    position relative
    +mobile()
      display none
    +atMobile()
      display none
    +atTablet()
      display block
    &--mobile
      +atTablet()
        display none
      +atMobile()
        width 80%

      +mobile()
        width 95%
      background #fff
      padding 5rem 0
      padding-top 0

      +mobile()
        padding 0
      +atMobile()
        padding 0

      margin 0 auto
      display flex
      flex-direction column
      align-items center
      border-radius 0.5rem
  &__img
    +atMobile()
      background transparent
      position absolute
      bottom 0
      right 0

    img
      display block
</style>
