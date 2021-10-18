<template>
  <p class="plot">{{ plot }}</p>
</template>

<script>
export default {
  props: {
    plot: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.plot {
  max-width: $DETAIL_WIDTH;
  margin-bottom: $BASE_PADDING;
  font-size: 20px;
  line-height: 1.5em;
  word-break: keep-all;
}
</style>
