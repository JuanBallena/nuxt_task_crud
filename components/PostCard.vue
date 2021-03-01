<template>
  <div class="card mb-3">
    <div class="card-header bg-light text-black">
      <span class="h6 text-uppercase">{{ title }}</span>
      <div class="float-end">
        <span :class="`badge h6 bg-${stateColor}`">{{ state }}</span>  
      </div>
    </div>
    <div class="card-body">
      <div class="pb-2">
        <span class="card-text">
        {{ description }}
        </span>
        <div class="h6 mt-2">
          <i 
            class="fas fa-heart icon-heart"
            @click="reactPost(likes, id)"
          >
          </i>
          <span class="text-secondary">{{ likes }}</span>
        </div>
      </div>

      <template v-if="comments.length > 0">
        <h6 class="text-primary">Commentarios</h6>
        <ul>
          <li
            class="text-secondary"
            v-for="comment in comments"
            :key="comment.id"
            v-html="comment.body"
          >
          </li>
        </ul>
      </template>

      <h6 
        v-else
        class="text-secondary"
      >
        Sin comentarios...
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Comment from '../store/models/Comment';
import { mapActions } from 'vuex';

export default Vue.extend({
  
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'description'
    },
    state: {
      type: String,
      default: 'state'
    },
    stateColor: {
      type: String,
      default: 'secondary'
    },
    likes: {
      type: Number,
      default: 0
    },
    comments: {
      type: Array as () => Array<Comment>,
      default: () => []
    }
  },

  methods: {
    ...mapActions({
      addReaction: 'post/addReaction',
      getPosts: 'post/getPosts',
    }),

    async reactPost(likes: number, idPost: number): Promise<void> {

      var likesPost = likes;
      likesPost++;

      const dataPost = {
        likes: likesPost,
        idPost: idPost
      }
      await this.addReaction(dataPost);

      await this.getPosts();
    }
  }
})
</script>

<style scoped>
.icon-heart {
  color: red;
  cursor: pointer;
}

.icon-heart:active {
  color: grey;
  /* font-size: 14px; */
}
</style>