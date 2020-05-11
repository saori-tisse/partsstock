<template>
  <header class="l-header header" id="header">
    <div class="wrap">
      <div class="c-flex -spacebetween -alignCenter">
        <p class="logo">
          <nuxt-link :to="'/'">
            <img src="~/assets/img/common/logo.svg" alt="parts-stock" />
          </nuxt-link>
        </p>
        <div class="header-buttonwrap">
          <!-- <button class="btn-search">
            <i class="fas fa-search"></i>
          </button>-->
          <button
            class="button-hamburger js-button-hamburger"
            aria-controls="globalnav"
            v-bind:aria-expanded="[
        $store.state.isMenuActive === true ? 'true' : 'false'
        ]"
            @click="$store.commit('toggleMenu')"
            :class="{'is-active': $store.state.isMenuActive}"
          >
            <span class="hamburger">
              <span class="u-visibilityHidden">メニューを開閉する</span>
            </span>
          </button>
        </div>
      </div>
      <nav
        class="l-globalnav globalnav"
        id="globalnav"
        :class="{'is-active': $store.state.isMenuActive}"
      >
        <ul class="globalnav_list">
          <li>
            <nuxt-link :to="'/'">パーツ</nuxt-link>
          </li>
          <!-- <li>便利ツール</li> -->
          <li>
            <nuxt-link :to="'/about/'">このサイトについて</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/privacy/'">プライバシーポリシー</nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- /#globalnav.l-globalnav globalnav -->
    </div>
  </header>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit("resetMenu");
  }
};
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  padding: rem(10) 0;
  .wrap {
    position: relative;
  }
}

.logo {
  img[src$=".svg"] {
    height: rem(30);
  }
}

.btn-search {
  background: $color-main;
  border-radius: 50%;
  width: rem(45);
  height: rem(45);
  color: #f6f2ed;
  display: inline;
  vertical-align: middle;
  margin-right: 20px;
  font-size: rem(20);
  cursor: pointer;
}

.button-hamburger {
  // position: absolute;
  position: relative;
  vertical-align: middle;
  // top: 0;
  // right: 2.5%;
  // bottom: 0;
  z-index: 5;
  width: 50px;
  height: 50px;
  // margin: auto 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  appearance: none; /* IE非対応 */
}

.hamburger {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 45px;
  height: 4px;
  margin: auto;
  border-radius: 10rem;
  background-color: #263238;

  &:before,
  &:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: inherit;
    content: "";
    transition: all 0.3s;
  }

  &:before {
    top: -10px;
  }

  &:after {
    top: 10px;
  }

  .is-active & {
    background: transparent;
    &::before,
    &::after {
      background: #ffffff;
    }
    &::before {
      transform: rotate(45deg);
      top: 0;
    }
    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  }
}

.globalnav {
  position: fixed;
  top: 0;
  right: 0;
  background: $color-main;
  padding: rem(45) rem(20);
  width: 100%;
  height: 100vh;
  z-index: 3;
  transform-origin: top right;
  transform: translateX(150%) scale(0, 0);
  transition: transform 0.3s;
  &_list {
    li + * {
      margin-top: rem(14);
    }
    a {
      display: block;
      text-align: center;
      color: #fff;
      font-size: rem(18);
    }
  }

  &.is-active {
    transform-origin: top right;
    transform: translateX(0) scale(1, 1);
  }
}
</style>
