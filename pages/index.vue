<template>
  <div class="wrap">
    <div class="top-mv">
      <Search />
    </div>
    <section class="sec">
      <h2 class="heading-primary">
        <span class="balloon">パーツ一覧</span>
      </h2>
      <div class="card-list c-flex">
        <div v-for="item in items" class="card-list_item">
          <nuxt-link :to="'category/' + item.slug">
            <article class="c-card parts-card">
              <h3>{{ item.name }}</h3>
              <figure class="img">
                <img src alt />
              </figure>
            </article>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="sec top-about">
      <h2 class="heading-primary">
        <span class="balloon">parts-stock はこんなサイト</span>
      </h2>
      <p class="top-about_text">
        parts-stockは、簡単にコピペできるWebパーツを集めたサイトです。
        <br />こんなのが欲しいなどあれば、お気軽にご要望送って下さい！
      </p>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Search from "~/components/searchform.vue";
import axios from "axios";

export default {
  components: {
    Logo,
    Search
  },
  data() {
    return {
      items: []
    };
  },
  async asyncData() {
    const { data } = await axios.get(process.env.API_URL + "category/", {
      headers: { "X-API-KEY": process.env.API_KEY }
    });
    return {
      items: data.contents
    };
  }
};
</script>

<style lang="scss">
.card-list {
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
    color: $color-text;
    font-size: 1rem;
    &:hover {
      color: $color-main;
    }
  }
  &_item {
    width: calc(25% - 24px);
    margin-bottom: rem(24);
    &:not(:nth-child(4n)) {
      margin-right: 24px;
    }
    @include mqdown(sp) {
      width: calc(50% - 12px);
      &:not(:nth-child(4n)) {
        margin-right: 0;
      }
      &:not(:nth-child(2n)) {
        margin-right: 12px;
      }
    }
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
  @include mq {
    &:hover {
      transform: translate(10px, 10px);
      box-shadow: 0 5px 10px 7px rgba($color-main, 0.46);
    }
  }
  @include mqdown(sp) {
    padding: rem(10) 15px;
    box-shadow: 5px 5px 0 0 $color-main;
  }
}

.top-mv {
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: rgba($color-main, 0.2);
}
.top-about {
  &_text {
    width: 650px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
