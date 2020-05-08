<template>
  <div class="wrap">
    <h1 class="heading-primary">
      <span class="balloon">{{ $route.params.slug }}</span>
    </h1>
    <div class="card-list c-flex">
      <div v-for="item in postFilter" class="card-list_item">
        <nuxt-link :to="'/parts/' + item.id">
          <article class="c-card parts-card">
            <div v-if="item.poster">
              <img :src="item.poster.url" :alt="item.title" />
            </div>
            <!-- <img :src="item.poster.url"></img> -->
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
  fetch({ store }) {
    store.commit("resetMenu");
  },
  data() {
    return {
      items: []
    };
  },
  async asyncData({ params }) {
    console.log(params.slug);
    // const { category } = await axios.get(
    //   process.env.API_URL + "category?filters=slug[equals]" + params.slug,
    //   {
    //     headers: { "X-API-KEY": process.env.API_KEY }
    //   }
    // );
    // console.log(category);
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
    },
    limitCount: function() {
      return this.category.slice(0, 1);
    },
    imageDisp: function() {
      return this.item.poster.length ? this.item.poster[0].image.url : "";
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
    font-size: rem(16);
    + * {
      margin-top: rem(16);
    }
  }
}
</style>
