<template>
  <page-header />

  <div class="container section">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <page-menu />
      </div>
      <div class="col-lg-9">
        <page-title title="Lista">
          <div class="text-nowrap ms-auto">{{ adList.length }} db</div>
        </page-title>

        <div v-for="data in adList" :key="data.adId">
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
    adList() {
      return this.$store.state.adList;
    }
  }
}
</script>