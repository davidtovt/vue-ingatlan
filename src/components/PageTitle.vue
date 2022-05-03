<template>
  <div class="card mb-3">
    <div class="card-body d-flex flex-wrap  align-items-center">
      <h1 class="page-title">{{ title }}</h1>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings';

.card-body {
  padding: .5rem 2rem;
}

.page-title {
  margin: 0;
  font-size: 1.5rem;
}

@include media-breakpoint-up(md) {
  .card-body {
    min-height: 3.75rem;
    padding: .5rem 2rem;
  }
}
</style>