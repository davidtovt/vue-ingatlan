<template>
  <page-header />

  <div class="container section">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <page-menu />
      </div>
      <div class="col-lg-9">
        <page-title title="Kedvencek">
          <div class="text-nowrap ms-auto">{{ favoriteListSorted.length }} db</div>
        
          <select class="form-select form-select-sm" v-model="sortBy">
            <option value="address">Név szerint</option>
            <option value="favorite_date">Kedvenchez adás szerint</option>
          </select>
        </page-title>

        <div v-for="data in favoriteListSorted" :key="data.adId">
          <ad-item :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PageMenu from '../components/PageMenu.vue'
import PageTitle from '../components/PageTitle.vue'
import AdItem from '../components/AdItem.vue'

export default {
  components: {
    PageHeader,
    PageMenu,
    PageTitle,
    AdItem,
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

<style lang="scss" scoped>
@import '../assets/scss/settings';

.form-select {
  width: 100%;
  margin-top: .5rem;
}

@include media-breakpoint-up(md) {
  .form-select {
    width: 13rem;
    margin-top: 0;
    margin-left: 1rem;
  }
}
</style>