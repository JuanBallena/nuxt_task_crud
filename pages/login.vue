<template>
  <div>
    <div class="row mt-5 mx-0">
      <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8 mx-auto">
        <div class="row mx-0">

          <div class="mb-4 h2">Iniciar sesión</div>

          <div class="col-xl-12 mb-3">
            <label for="">Usuario</label>
            <input 
              type="text"
              class="form-control input-username"
              placeholder="example"
              v-model="username"
            >
          </div>

          <div class="col-xl-12 mb-5">
            <label for="">Contraseña</label>
            <input 
              type="password"
              class="form-control input-password"
              placeholder="123xyz"
              v-model="password"
            >
          </div>

          <div class="col-xl-12 mb-3">
            <div class="d-grid gap-2">
              <button 
                class="btn btn-primary" 
                type="button"
                @click="login()"
              >
                Acceder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'default',

  data: () => {
    return {
      username: '',
      password: '',
    }
  },

  methods: {
    login(): void {
      this.$router.push('/users');
    }
  }
})
</script>

<style scoped>

label {
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: grey;
}
.input-username, .input-password {
  box-shadow: none;
}
</style>

