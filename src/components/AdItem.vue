<template>
  <a class="card" :href="data.adId">
    <div class="row">
      <figure class="col-md-3">
        <img :src="data.image" :alt="data.address" />
      </figure>
      <div class="col-md-9">
        <h3>{{ data.address }}</h3>

        <favorite-btn :adId="data.adId" />

        <time v-if="showDate" :datetime="$store.getters.formatDate(data.favorite_date)">{{ $store.getters.formatDate(data.favorite_date, 'hu') }}</time>
      </div>
    </div>
  </a>
</template>

<script>
import FavoriteBtn from './FavoriteBtn.vue'

export default {
  components: {
    FavoriteBtn
  },
  props: ['data', 'showDate'],
}
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>