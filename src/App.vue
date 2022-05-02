<template>
  <header class="header"><hr></header>
  
  <div class="container">
    <div class="row">
      <nav class="col-md-3">
        <ul class="menu">
          <li><router-link to="/">Lista</router-link></li>
          <li><router-link to="/kedvencek">Kedvencek</router-link></li>
        </ul>
      </nav>
      
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </div>

  <footer class="footer"><hr></footer>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('setFavorites');
  }
}
</script>
