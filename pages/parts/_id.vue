<template>
  <div class="wrap" data-plugin-header="show-language">
    <h1 class="heading-primary">
      <span class="categoryname">{{item.category.name}}</span>
      <br />
      <span class="balloon">{{ item.title }}</span>
    </h1>
    <article class="code-article">
      <div class="code-example">
        <div v-html="item.htmlview"></div>
      </div>
      <div class="code-card html line-numbers">
        <p class="lang html">HTML</p>
        <pre class="language-html"><code class="language-html"><div v-html="item.html"></div></code></pre>
      </div>
      <div class="code-card css line-numbers">
        <p class="lang css">CSS</p>
        <pre class="language-css"><code class="language-css"><div v-html="item.css"></div></code></pre>
      </div>
      <div v-if="item.javascript">
        <div class="code-card js line-numbers">
          <p class="lang js">JavaScript</p>
          <pre class="language-js"><code class="language-js"><div v-html="item.javascript"></div></code></pre>
        </div>
      </div>
    </article>
    <style v-html="item.css"></style>
    <script v-html="item.javascript"></script>
  </div>
</template>


<script>
import axios from "axios";
import Prism from "~/plugins/prism";

export default {
  layout: "page",
  async asyncData({ params }) {
    const { data } = await axios.get(
      process.env.API_URL + `parts/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    );
    return {
      item: data
    };
  },
  computed: {
    postFilter: function() {
      return this.items.filter(function(el) {
        return el.category.slug == this.$route.params.slug;
      }, this);
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>


<style lang="scss" scoped>
.heading-primary {
  margin-top: rem(40);
}
.categoryname {
  font-size: 24 / 32 * 1em;
  margin-bottom: 0.7em;
}
.code-article {
  padding-bottom: rem(40);
}
.code-example {
  // text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  + * {
    margin-top: rem(64);
  }
}

.code-card {
  width: 100%;
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  background: #272822;
  border-radius: 10px;
  border: 4px solid #222;
  position: relative;
  + * {
    margin-top: rem(40);
  }
  .lang {
    position: absolute;
    color: #ffffff;
    top: 0;
    left: 0;
    border-radius: 10px 0 0 0;
    z-index: 1;
  }
  &.html {
    box-shadow: 10px 10px 0 0 #76d0cd;
  }
  &.css {
    box-shadow: 10px 10px 0 0 #d0ae76;
  }
  &.js {
    box-shadow: 10px 10px 0 0 #d0767d;
  }
}

pre[class*="language-"] {
  margin: 0;
  // background: #666666;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  padding-top: rem(20);
}
</style>
