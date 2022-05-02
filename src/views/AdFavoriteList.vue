<template>
  <h1>Kedvencek</h1>

  <select class="form-select" v-model="sortBy">
    <option value="address">Név szerint</option>
    <option value="favorite_date">Kedvenchez adás szerint</option>
  </select>

  <div v-for="data in favoriteListSorted" :key="data.adId">
    <ad-item :data="data" :show-date="true" />
  </div>
</template>

<script>
import AdItem from '../components/AdItem.vue'

export default {
  components: {
    AdItem
  },
  computed: {
    favoriteListSorted() {
      return this.$store.getters.favoriteListSorted;
    },
    sortBy: {
      get() {
        return this.$store.state.favoriteSortBy
      },
      set(value) {
        this.$store.commit('UPDATE_SORT_BY', value)
      }
    },
  },
}
</script>