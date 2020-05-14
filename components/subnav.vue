<template>
  <div class="subnav">
    <div class="wrap">
      <ul class="subnav_list">
        <li>
          <nuxt-link :to="'/category/heading/'">見出し</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/category/hamburger/'">ハンバーガーボタン</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/category/button/'">ボタン</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/category/link/'">リンク</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link :to="'/category/list/'">リスト</nuxt-link>
        </li>-->
      </ul>
      <!-- <div v-for="category in categories">
        <p>{{category.slug}}</p>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    categories: function() {
      return this.$store.state.categories;
    }
  },
  mounted() {
    this.$store.dispatch("fetchCategories");
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
