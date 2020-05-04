<template>
  <div class="subnav">
    <div class="wrap">
      <ul class="subnav_list">
        <li>
          <nuxt-link :to="'/category/heading/'">見出し</nuxt-link>
        </li>
      </ul>

      <!-- <div v-for="item in items">
        <p>{{ item.name }}</p>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  methods: {
    fetch() {
      return this.$store.dispatch("fetchItems");
    }
  }
};
</script>

<style lang="scss" scoped>
.subnav {
  background: $color-bg;
  padding: rem(10) 0;
  &_list {
    li {
      display: inline-block;
    }
    a {
      display: block;
      border-radius: 100rem;
      text-align: center;
      color: #ffffff;
      font-weight: bold;
      background: $color-main;
      padding: 2px 10px;
      font-size: rem(14);
      border: 2px solid transparent;
      transition: all 0.3s $hov-trans;
      &:hover {
        background: #ffffff;
        color: $color-main;
        border: 2px solid $color-main;
      }
    }
  }
}
</style>
