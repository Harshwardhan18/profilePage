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
          <b-badge variant="light">Sign Up</b-badge>
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
  margin-right: 115px;
  font-size: 20px;
}
.bg-info {
  background-color: #007bff !important;
  opacity: 0.8;
}
</style>
