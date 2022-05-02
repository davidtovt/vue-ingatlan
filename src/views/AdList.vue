<template>
  <h1>Lista</h1>

  <div v-for="data in adList" :key="data.adId">
    <ad-item :data="data" />
  </div>
</template>

<script>
import AdItem from '../components/AdItem.vue'

export default {
  components: {
    AdItem
  },
  computed: {
    adList() {
      return this.$store.state.adList;
    }
  }
}
</script>