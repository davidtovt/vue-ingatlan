<template>
  <button :class="['btn ', [this.$store.getters.isFavorite(adId) ? 'btn-success' : 'btn-info']]" @click.prevent="toggleFavorite(adId)">Kedvenc</button>
</template>

<script>
export default {
  props: ['adId'],
  methods: {
    toggleFavorite(id) {
      this.$store.dispatch('updateFavorites', id);
    }
  }
}
</script>