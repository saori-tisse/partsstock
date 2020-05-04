<template>
  <footer class="l-footer footer" id="footer">
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
  padding-top: rem(30);
}
.copyright {
  text-align: center;
  font-size: rem(12);
}
</style>
