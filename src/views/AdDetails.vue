<template>
  <page-header hide-on-sm="true" />

  <div class="container section">
    <div class="d-none d-md-flex row mb-5">
      <div class="col-md-3">
        <router-link class="btn btn--icon btn--light-primary" to="/"><svg class="me-2"><use xlink:href="../assets/img/icons.svg#arrow-left"></use></svg> Vissza</router-link>
      </div>
      <div class="col-md-9">
        <page-title title="Részletek"></page-title>
      </div>
    </div>

    <div class="d-md-none intro">
      <router-link class="btn" to="/">
        <svg><use xlink:href="../assets/img/icons.svg#angle-left"></use></svg>
        <span class="visually-hidden">Vissza</span>
      </router-link>
      <figure>
        <img :src="adDetails.image" alt="" />
      </figure>
    </div>

    <div class="d-none d-md-block gallery mb-4">
      <div class="row g-3">
        <div class="col-md-4">
          <figure>
            <img :src="adDetails.image" alt="" />
          </figure>
        </div>
        <div class="col-md-4">
          <figure></figure>
        </div>
        <div class="col-md-4">
          <div class="row g-3">
            <div class="col-12">
              <figure class="half"></figure>
            </div>
            <div class="col-12">
              <figure class="half"></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card mb-sm-4">
      <div class="card-body">
        <h2 class="card-title">{{ adDetails.address }}</h2>

        <p class="price">{{ adDetails.price.toLocaleString() }} Ft</p>

        <favorite-btn :adId="adDetails.adId" />

        <time v-if="adDetails.favorite_date" :datetime="$store.getters.formatDate(adDetails.favorite_date)">
          <svg><use xlink:href="../assets/img/icons.svg#calendar"></use></svg>
          {{ $store.getters.formatDate(adDetails.favorite_date, 'hu') }}
        </time>

        <div class="textfield">
          {{ adDetails.description }}
        </div>

        <div class="text-end">
          <a href="#contact" class="btn btn-primary btn--responsive" data-bs-toggle="modal">Kapcsolatfelvétel</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="contact" tabindex="-1" aria-labelledby="contact" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="contact">Kapcsolat</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="list-unstyled">
            <li><strong>Email:</strong> {{ adDetails.contact.email }}</li>
            <li><strong>Telefon:</strong> {{ adDetails.contact.parsedPhoneNumbers.join(', ') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PageTitle from '../components/PageTitle.vue'
import FavoriteBtn from '../components/FavoriteBtn.vue'

export default {
  components: {
    PageHeader,
    PageTitle,
    FavoriteBtn,
  },
  data() {
    return {
      adDetails: []
    }
  },
  created() {
    let adDetails = this.$store.getters.favoriteList.filter(data => data.adId == this.$route.params.adId);
    
    if(! adDetails.length) {
      adDetails = this.$store.state.adList.filter(data => data.adId == this.$route.params.adId);
    }

    this.adDetails = adDetails[0];
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings';

.intro {
  position: relative;
  margin: -2.5rem (-($grid-gutter-width / 2));

  figure {
    margin-bottom: 0;
  }

  .btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 3.5rem;
    left: $grid-gutter-width / 2;
    width: 2.5rem;
    height: 2.5rem;
    min-height: auto;
    padding: 0;
    background-color: #485563;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      fill: #fff;
    }
  }

  @include media-breakpoint-up(sm) {
    overflow: hidden;
    margin: 0 0 1.5rem;
    border-radius: $border-radius-lg;
  }
}

.gallery {
  overflow: hidden;
  border-radius: $border-radius-lg;

  figure {
    position: relative;
    margin: 0;
    background-color: #637181;

    &:after {
      display: block;
      content: "";
      padding-bottom: 84%;
    }

    &.half {
      &:after {
        padding-bottom: calc(42% - #{map-get($spacers, 3) / 2});
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.card {
  &-body {
    position: relative;
  }
  
  &-title {
    margin-bottom: .25rem;
    padding-right: 3rem;
    font-size: 1.5rem;
  }

  .price {
    margin-bottom: 0;
  }

  time {
    margin-bottom: 1rem;
  }

  .textfield {
    min-height: 8.75rem;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: $font-size-sm;
    border-radius: $border-radius;
    box-shadow: inset 0 0 1.25rem rgba(0, 0, 0, .05);
  }

  .btn--favorite {
    position: absolute;
    top: 2rem;
    right: 1.25rem;
  }

  @include media-breakpoint-down(sm) {
    margin: 0 (-($grid-gutter-width / 2)) -1.25rem;
    box-shadow: none;
    border-radius: 0;
  }

  @include media-breakpoint-up(sm) {
    &-title {
      font-size: 1.875rem;
    }
    
    .price {
      margin-bottom: 3rem;
      font-size: 1.5rem;
    }

    time {
      margin-bottom: 3rem;
    }

    .textfield {
      margin-bottom: 2.5rem;
    }

    .btn--favorite {
      top: 1.75rem;
    }
  }
}
</style>