<template>
  <div class="wrap">
    <h1 class="heading-primary">
      <span class="balloon">{{ this.$route.params.slug }}</span>
    </h1>
    <div class="card-list c-flex">
      <div v-for="item in postFilter" class="card-list_item">
        <nuxt-link :to="'/parts/' + item.id">
          <article class="c-card parts-card">
            <h3 class="title">{{ item.title }}</h3>
          </article>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  layout: "page",
  data() {
    return {
      items: []
    };
  },
  async asyncData({ params }) {
    const { data } = await axios.get(process.env.API_URL + "parts/", {
      headers: { "X-API-KEY": process.env.API_KEY }
    });
    return {
      items: data.contents
    };
  },
  computed: {
    postFilter: function() {
      return this.items.filter(function(el) {
        return el.category.slug == this.$route.params.slug;
      }, this);
    }
  }
};
</script>


<style lang="scss" scoped>
.heading-primary {
  margin-top: rem(20);
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
  }
  &_item {
    width: calc(25% - 24px);
    @include mqdown(sp) {
      width: 100%;
    }
  }
}
.card-list_item:not(:nth-child(4n)) {
  margin-right: 24px;
  @include mqdown(sp) {
    margin-right: 0;
  }
}
.c-card {
  padding: 18px;
  background: #ffffff;
  text-align: center;
  border-radius: 10px;
  border: 4px solid #222;
  box-shadow: 10px 10px 0 0 $color-main;
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
  &:hover {
    transform: translate(10px, 10px);
    box-shadow: 0 5px 10px 7px rgba($color-main, 0.46);
  }
  .title {
    + * {
      margin-top: rem(16);
    }
  }
}
</style>
