<template>
  <div>
    <h4>Usuario</h4>
    <div class="text-center" v-if="user == null">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="card" v-else>
      <div class="card-header">
        <h5 class="card-title">{{ user.username }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ user.email }}</p>
        <span :class="`badge h5 + bg-${user}`">{{ user.state }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import UserCard from '../../components/UserCard.vue';
import User from '../../store/models/User';
import { mapState, mapGetters, mapActions } from 'vuex';

export default Vue.extend({

  layout: 'app',

  head() {
    return {
      title: 'App - User',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Description User'
        }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  },

  async created(): Promise<void> {
    await this.getUser(this.$route.params.id);
  },

  computed: {
    ...mapState('user', ['user']),
    // ...mapGetters({
    //   user: 'user/getUser'
    // })
  },

  methods: {
    ...mapActions({
      getUser: 'user/getUser'
    }),
  }

})
</script>