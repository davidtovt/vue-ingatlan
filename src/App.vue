<template>
  <router-view />

  <footer class="footer"></footer>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('loadFavorites');
  }
}
</script>