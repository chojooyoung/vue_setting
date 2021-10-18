<template>
  <div class="not-found">
    <h1 class="not-found-txt">결과를 찾지 못했어요</h1>
    <img
      class="not-found-img"
      src="../assets/images/not-found.png"
      alt="슬픈 고양이"
    />
    <button class="back" @click="back">
      <img src="../assets/images/txt-balloon.png" />
      <span class="txt">돌아갈까요..?</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.not-found {
  height: calc(100vh - $HEADER_HEIGHT);
  @include flexbox;
  flex-direction: column;
  &-txt {
    font-size: 20px;
    font-weight: 700;
  }
  &-img {
    width: 150px;
  }

  .back {
    position: relative;
    left: 80px;
    bottom: 20px;

    &:hover,
    &:active {
      transform: translateY(-10px);
      color: $COLOR_RED;
    }

    img {
      width: 150px;
      transform: rotate(180deg) scaleX(-1);
    }

    .txt {
      @include pos-center-x;
      top: 50%;
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
}
</style>
