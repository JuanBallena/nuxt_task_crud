<template>
  <div>
    <NavbarComponent />
    <div class="container py-3">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavbarComponent from '@/components/Navbar.vue';
export default Vue.extend({
  
  components: {
    NavbarComponent
  }
})
</script>

