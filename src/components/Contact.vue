<script setup>
const redirectTo = l => {
  let link =
    l == 'youtube'
      ? 'https://youtube.com/c/GanitAnk'
      : 'https://www.instagram.com/ganit_ank';
  let a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
</script>

<template>
  <div class="contact">
    <div class="contact__text">
      <div class="contact__title">We're here for you. Always.</div>
      <div class="contact__subtitle">
        No endeavour is perfect without feedback. That's why we listen, to
        students and to parents. All to provide you with the best experience we
        can!
      </div>
    </div>
    <div class="contact__methods">
      <div class="contact__methods__title">
        You can get in touch with us here:
      </div>
      <div class="contact__methods__content">
        <div
          class="contact__method contact__method--youtube"
          @click="redirectTo('youtube')"
        >
          <div class="contact__method__icon">
            <youtube-outlined />
          </div>
          <div class="contact__method__text">YouTube</div>
        </div>
        <div
          class="contact__method contact__method--instagram"
          @click="redirectTo('instagram')"
        >
          <div class="contact__method__icon">
            <instagram-outlined />
          </div>
          <div class="contact__method__text">Instagram</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.contact
  +mobile()
    margin 4rem auto
  +atMobile()
    margin 3rem auto
  &__text
    font-family 'Poppins', sans-serif
    text-align center
  &__title
    font-weight bold
    +mobile()
      font-size 1.5rem
      padding 0 0.5rem
    +atMobile()
      font-size 2rem
    +atTablet()
      font-size 2rem
    +atDesktop()
      font-size 3rem
  &__subtitle
    text-align center
    font-weight 300
    width 60%
    +mobile()
      width 90%
      font-size 1.2rem
    +atMobile()
      width 80%
      font-size 1.2rem
    +atTablet()
      width 60%
      font-size 1.5rem

    margin 1rem auto

  &__methods
    margin 2rem 0
    display flex
    align-items center
    flex-direction column

    &__title
      font-size 1.5rem
      +mobile()
        font-size 1.1rem
    &__content
      margin 2rem 0
      display flex
      align-items center
      justify-content space-between

  &__method
    cursor pointer
    color #fff
    &--youtube
      background #ff0000
    &--instagram
      background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);


    &__icon
      font-size 2rem
      +mobile()
        font-size 1.5rem

    font-size 1rem
    +mobile()
      font-size 0.8rem
    font-weight bold
    display flex
    align-items center
    flex-direction column
    margin 0 1rem
    padding 1rem 2rem
    +mobile()
      padding 0.5rem 1rem
    border-radius 0.5rem
    background #fff
</style>
