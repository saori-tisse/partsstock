<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
.sec {
  padding-top: rem(70);
  + * {
    margin-top: rem(100);
  }
}
</style>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
