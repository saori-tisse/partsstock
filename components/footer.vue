<template>
  <footer class="l-footer footer" id="footer">
    <div class="ads">
      <adsbygoogle :ad-slot="9531046294" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
    </div>
    <p class="copyright">
      <small>
        &copy; 2020
        <nuxt-link :to="'/'">parts-stock</nuxt-link>All Rights Reserved.
      </small>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.ads {
  text-align: center;
  background: $color-bg;
  padding: rem(10) 0;
  margin-bottom: rem(30);
}
.footer {
  padding-top: rem(30);
}
.copyright {
  text-align: center;
  font-size: rem(12);
}
</style>
