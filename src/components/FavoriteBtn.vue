<template>
  <button :class="['btn btn--favorite', { 'active': isFavorite }]" @click.prevent="toggleFavorite(adId)">
    <svg><use :xlink:href="favoriteIconUrl"></use></svg>
    
    <span class="visually-hidden">Kedvenc</span>
  </button>
</template>

<script>
export default {
  props: ['adId'],
  computed: {
    isFavorite() {
      return this.$store.getters.isFavorite(this.adId);
    },
    favoriteIconUrl() {
      const icon = require('../assets/img/icons.svg');

      return this.isFavorite ? icon + '#star' : icon + '#star-outline';
    }
  },
  methods: {
    toggleFavorite(id) {
      this.$store.dispatch('updateFavorites', id);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings';

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  min-height: auto;
  padding: 0;
  background-color: #fff;
  box-shadow: $box-shadow-sm;

  &.active {
    svg {
      fill: #FFB300;
    }
  }

  svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    fill: #B2B2B2;
  }
}
</style>