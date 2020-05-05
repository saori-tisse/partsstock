<template>
  <div class="wrap">
    <h1 class="heading-primary">
      <span class="balloon">このサイトについて</span>
    </h1>
    <p class="top-about_text">
      parts-stockは、簡単にコピペできるWebパーツを集めたサイトです。
      <br />コーディングでここどうやるんだっけな、とか
      <br />デザインの参考に、、、と自由にお使いいただけます！
    </p>
    <section class="sec top-menseki">
      <h2 class="heading-primary">
        <span class="balloon">免責事項</span>
      </h2>
      <p class="top-about_text">
        ・ここのサイトにのっているコードは自由にコピー、使用していただいて構いません。
        <br />・すべての環境で同一の表示となるわけではありませんのでご了承ください。
        <br />・コードを使っていただくのは自由ですが、
        <br />使用したことで何かトラブルが発生しても管理人の私は責任を一切負わないことをご了承ください。
      </p>
    </section>
    <section class="sec about-profile">
      <h2 class="heading-primary">
        <span class="balloon">つくった人について</span>
      </h2>
      <div class="top-about_text c-flex">
        <figure class="profile-img">
          <img src="~/assets/img/common/profile.jpg" alt="プロフィール画像" />
        </figure>
        <div class="textbox">
          <p class="name">さおり</p>
          <p>
            神奈川県を拠点にWebサイトつくったりしてます。
            <br />主にコーディング、WordPressメイン。
          </p>
          <ul class="sns-link c-flex">
            <li>
              <a href="https://tisse-design.com/" target="_blank" rel="noopenner">
                <i class="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tisse_web" target="_blank" rel="noopenner">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/saori_tissedesign/"
                target="_blank"
                rel="noopenner"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.jp/hz/wishlist/ls/8W2O4KU9VJOM?ref_=wl_share"
                target="_blank"
                rel="noopenner"
              >
                <i class="fab fa-amazon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  layout: "page",
  fetch({ store }) {
    store.commit("resetMenu");
  }
};
</script>

<style lang="scss" scoped>
.heading-primary {
  margin-top: rem(32);
}
.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: rem(24);
  img {
    position: relative;
    z-index: 1;
    width: 100%;
  }
}
.name {
  font-weight: bold;
  + * {
    margin-top: rem(12);
  }
}
.sns-link {
  margin-top: rem(12);
  li {
    &:not(:last-child) {
      margin-right: rem(10);
    }
  }
  a {
    color: $color-main;
    display: block;
    font-size: 18/16 * 1em;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: translateY(-4px);
    }
  }
}
</style>
