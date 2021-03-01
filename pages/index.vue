<template>
  <div>
    <h1>Home</h1>
    <nuxt-link to="/login">Login</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { getters } from '../store/index';
import { mapGetters } from 'vuex';

export default Vue.extend({
  
  layout: 'default',

  head() {
    return {
      title: 'App - Home'
    }
  },

  data: () => {
    return {
      //users: []
    }
  },

  created(): void {
    // this.$store.dispatch('user/loadUsers');
  },

  computed: {
    // counter(): number {
    //   return this.$store.getters['getCounter'];
    // },
    // users(): Array<any> {
    //   return this.$store.getters['user/getUsers'];
    // },

    // ...mapGetters({
    //   users: 'user/getUsers',
    //   counter: 'getCounter'
    // })
  },

  methods: {
    // addCounter(): void {
    //   this.$store.dispatch('addCounter');
    // }
  }
})
</script>