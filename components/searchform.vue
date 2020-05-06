<template>
  <form action="/search/" method="get" class="search-form form">
    <label class="search-form_input">
      <input type="text" name="keyword" id="keyword" class="form_input" placeholder="キーワードを入力" />
      <button type="submit" class="form_submit">
        <i class="fas fa-search"></i>
        <span class="u-visibilityHidden">検索</span>
      </button>
    </label>
  </form>
  <!-- /.search-form -->
</template>


<style lang="scss" scoped>
.search-form {
  &_input {
    display: block;
    position: relative;
    @include mqdown(sp) {
      max-width: 90%;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
.form {
  &_input {
    border: 2px solid #222;
    border-radius: 20px;
    min-height: 55px;
    font-size: rem(16);
    padding: 0.75em 0.5em;
    width: 400px;
    max-width: 100%;
  }
  &_submit {
    font-size: rem(32);
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    background: transparent;
  }
}
</style>
