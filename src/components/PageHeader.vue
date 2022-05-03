<template>
  <header :class="['header', { 'd-none d-md-flex': hideOnSm }]">
    <a href="#menu" data-bs-toggle="collapse" class="d-xl-none menu-btn" @click.prevent="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </header>
</template>

<script>
export default {
  props: ['hideOnSm'],
};
</script>
