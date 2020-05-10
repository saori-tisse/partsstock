<template>
  <section class="topics">
    <div class="topics-box">
      <h2 class="topics-title">topics</h2>
      <dl class="topics_list">
        <dt>
          <time datetime="2020-05-10">2020.05.10</time>
        </dt>
        <dd>リンクを追加しました</dd>
        <dt>
          <time datetime="2020-05-09">2020.05.09</time>
        </dt>
        <dd>見出し、ボタンを追加しました</dd>
        <dt>
          <time datetime="2020-05-08">2020.05.08</time>
        </dt>
        <dd>parts-stock オープンしました</dd>
      </dl>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.topics {
  padding-top: rem(30);
  &-title {
    color: #fff;
    font-weight: 900;
    + * {
      margin-top: rem(20);
    }
  }
  &-box {
    position: relative;
    width: 600px;
    max-width: 100%;
    border-radius: 10px;
    background: #c6b3a3;
    margin-right: auto;
    margin-left: auto;
    padding: rem(10) rem(15) rem(30);
  }
  &_list {
    display: flex;
    max-height: 100px;
    overflow: auto;
    flex-wrap: wrap;
    align-items: center;
    font-size: rem(14);
    dt,
    dd {
      margin-bottom: 8px;
      color: #ffffff;
    }
    dt {
      width: 25%;
      font-weight: bold;
      // color: #a18e7d;
    }
    dd {
      width: 75%;
    }
  }
}
</style>
