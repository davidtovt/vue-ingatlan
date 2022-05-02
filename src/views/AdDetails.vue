<template>
  <li><router-link to="/">Vissza</router-link></li>

  <h1>Részletek</h1>

  <h2>{{ adDetails.address }}</h2>
</template>

<script>
import listings from '../json/listings.json'

export default {
  data() {
    return {
      adDetails: []
    }
  },
  methods: {
  },
  created() {
    const adDetails = listings.ads.filter(data => data.adId == this.$route.params.adId);

    this.adDetails = adDetails[0];
  }
}
</script>