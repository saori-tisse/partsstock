<template>
  <footer class="l-footer footer" id="footer">
    <div class="ads">
      <adsbygoogle :ad-slot="9531046294" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
    </div>
    <nav class="footer-nav">
      <nuxt-link :to="'privacy/'">プライバシーポリシー</nuxt-link>
    </nav>
    <p class="copyright">
      <small>
        &copy; 2020
        <nuxt-link :to="'/'">parts-stock</nuxt-link>All Rights Reserved.
      </small>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-nav {
    text-align: center;
    font-size: rem(14);
    + * {
      margin-top: rem(40);
    }
  }
}
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
