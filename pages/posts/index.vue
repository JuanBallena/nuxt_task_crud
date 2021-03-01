<template>
  <div>
    <h3>Publicaciones</h3>
    <br>
    <div class="spinner-border text-primary" role="status" v-if="posts.length == 0">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="row" v-else>
      <div 
        v-for="post in posts"
        :key="post.id"
        class="col-xl-12"
      >
        <PostCard 
          :id="post.id"
          :title="post.title"
          :description="post.description"
          :state="post.getState()"
          :stateColor="post.getStateColor()"
          :likes="post.likes"
          :comments="post.comments"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import PostCard from '../../components/PostCard.vue';

export default Vue.extend({

  layout: 'app',
  
  head() {
    return {
      title: 'App - Posts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Description Posts'
        }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  },

  components: {
    PostCard
  },

  async created(): Promise<void> {
    await this.getPosts();
  },

  computed: {
    ...mapGetters({
      posts: 'post/getPosts'
    })
  },

  methods: {
    ...mapActions({
      getPosts: 'post/getPosts'
    })
  }

})
</script>