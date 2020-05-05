<template>
  <div>
    <Header />
    <SubNav />
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
.sec {
  padding-top: rem(70);
  padding-bottom: rem(35);
}
</style>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import SubNav from "@/components/subnav.vue";
export default {
  components: {
    Header,
    Footer,
    SubNav
  }
};
</script>
