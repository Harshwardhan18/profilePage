<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#"
        ><img src="../../assets/logo.png" alt=""
      /></b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class="utils">
          <b-badge variant="light"
            >Explore <i class="fas fa-search"></i
          ></b-badge>
          <b-badge variant="primary">Sign Up</b-badge>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped>
img {
  height: 40px;
  margin-left: 96px;
}
.utils {
  margin-right: 192px;
}
</style>
