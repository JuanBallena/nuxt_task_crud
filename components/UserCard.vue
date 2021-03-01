<template>
  <div class="card">
    <div class="card-header bg-light text-black">
      <span class="h6 text-uppercase">{{ username }}</span>
      <div class="float-end">
        <span :class="`badge h6 bg-${stateColor}`">{{ state }}</span>  
      </div>
    </div>
    <div class="card-body">
      <div class="pb-2">
        <span class="card-text">
        {{ email }}
        </span>
      </div>
      <nuxt-link 
        :to="`/users/${id}`" 
        class="btn btn-sm btn-outline-secondary">
        Ver más
      </nuxt-link>

      <!-- <div ref="modal" :id="modalVisible">

      </div>

      <button class="btn btn-primary" :disabled="disabledButton" @click="openModal()">{{ nameButton }}</button> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  
  props: {
    id: {
      type: Number,
      default: 0
    },
    username: {
      type: String,
      default: 'username'
    },
    email: {
      type: String,
      default: 'email'
    },
    state: {
      type: String,
      default: 'state'
    },
    stateColor: {
      type: String,
      default: 'secondary'
    }
  },

  // data: () => {

  //   return {
  //     modalVisible: false,
  //     nameButton: "ADD CATEGORY",
  //     disabledButton: false
  //   }
  // },

  // methods: {

  //   openModal(): void {
      
  //     this.modalVisible = true;
  //   },

  //   submit() {
  //     this.disabledButton = true
  //   }
  // }
})
</script>