<template>
  <div>
    <h3>Users</h3>
    <br>
    <div class="spinner-border text-primary" role="status" v-if="users.length == 0">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="row" v-else>
      <div 
        v-for="user in users"
        :key="user.id"
        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5"
      >
        <UserCard 
          :id="user.id"
          :username="user.username"
          :email="user.email"
          :state="user.getState()"
          :stateColor="user.getStateColor()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import UserCard from '../../components/UserCard.vue';

export default Vue.extend({

  layout: 'app',
  
  head() {
    return {
      title: 'App - Users',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Description Users'
        }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  },

  components: {
    UserCard
  },

  async created(): Promise<void> {
    await this.getUsers();
  },

  computed: {
    ...mapGetters({
      users: 'user/getUsers'
    })
  },

  methods: {
    ...mapActions({
      getUsers: 'user/getUsers'
    })
  }

})
</script>