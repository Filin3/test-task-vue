<template>
  <nav class="nav">
    <div class="nav__item">
      <router-link to="/">Home</router-link>
    </div>
    <div class="nav__item">
      <router-link to="/user">User</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
.nav {
  background-color: rgb(3, 168, 163);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.nav__item {
  height: 40px;
  display: flex;
  align-items: center;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  a {
    text-decoration: none;
    font-weight: bold;
    color: white;
    padding: 5px;
  }

  &:has(a.router-link-exact-active) {
    border-bottom: 5px solid white;
  }
}
</style>
