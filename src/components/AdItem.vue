<template>
  <router-link class="card mb-3" :to="'/' + data.adId">
    <div class="row g-0">
      <figure class="col-md-3 m-0">
        <img class="img-fluid" :src="data.image" :alt="data.address" />
      </figure>
      <div class="col-md-9">
        <div class="card-body">
          <h3 class="card-title">{{ data.address }}</h3>

          <p class="price">{{ data.price.toLocaleString() }} Ft</p>

          <favorite-btn :adId="data.adId" />

          <time v-if="data.favorite_date" :datetime="$store.getters.formatDate(data.favorite_date)">
            <svg><use xlink:href="../assets/img/icons.svg#calendar"></use></svg>
            {{ $store.getters.formatDate(data.favorite_date, 'hu') }}
          </time>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import FavoriteBtn from './FavoriteBtn.vue'

export default {
  components: {
    FavoriteBtn
  },
  props: ['data'],
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings';

.card {
  overflow: hidden;
  text-decoration: none;
  color: $body-color;

  figure {
    height: 8.75rem;
  }

  &-body {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    min-height: 6.875rem;
    padding: .75rem 4.5rem .75rem 1.25rem;
  }

  .img-fluid {
    height: 100%;
    object-fit: cover;
  }

  &-title {
    margin-bottom: .25rem;
    font-size: 1.5rem;
  }

  .price {
    margin-bottom: 0;
  }

  .btn--favorite {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }

  @include media-breakpoint-up(md) {
    figure,
    &-body {
      height: 11.25rem;
    }
    
    &-title {
      font-size: 1.875rem;
    }
    
    .price {
      font-size: 1.5rem;
    }

    .btn--favorite {
      top: 1.75rem;
    }
  }
}
</style>