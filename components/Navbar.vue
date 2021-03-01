<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
              <!-- linkActiveClass: '',
  linkExactActiveClass: 'nuxt-link-exact-active', -->
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/posts">Publicaciones</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/users">Usuarios</nuxt-link>
            </li>
          </ul>
          <ul class="d-flex navbar-nav">
            <li class="nav-item dropdown left">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administrator
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Mi perfil</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><nuxt-link class="dropdown-item" to="/login">Cerrar sesión</nuxt-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scope>
#menu li a {
  color: white;
  font-weight: bold;
}
/* #menu li a:active {
  color: blue;
} */
/* #menu li a.nuxt-link-active {
  font-weight: bold;
} */
/* exact link will show the primary color for only the exact matching link */
#menu li a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>