<template>
  <div id="app">
    <div id="nav" class="container">
      <router-link :to="{name: 'backofficeUsers'}">Users</router-link> |
      <router-link :to="{name: 'backofficeUcs'}">Ucs</router-link> |
      <router-link :to="{name: 'backofficeAtividades'}">Atividades</router-link> |
      <router-link :to="{name: 'backofficeFormula'}">Formula</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: primary;
}

#nav a.router-link-exact-active {
  color: #000000;
  opacity: 0.3;
}
</style>
