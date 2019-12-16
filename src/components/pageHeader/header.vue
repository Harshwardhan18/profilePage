<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#"
        ><img src="../../assets/logo.png" alt=""
      /></b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class="utils">
          <div>For Organisation</div>
          <div>
            Help |
            <div class="explore ml-2">
              <router-link
                class="navbar-brand color-text"
                active-class="active"
                :to="{ name: 'home' }"
              >
                Explore <i class="fas fa-search"></i>
              </router-link>
            </div>
          </div>
          <div>Sign Up</div>
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
  display: flex;
  color: white;
  margin-right: 96px;
  justify-content: space-around;
  width: 500px;
  align-items: center;
  font-size: 18px;
}
.explore {
  display: inline-block;
  padding: 1px 5px;
}
.bg-info {
  background-color: #007bff !important;
}
</style>
